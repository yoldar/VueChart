import Chart from 'chart.js';
import Object_hasOwn from 'x/src/Object/hasOwn';

let {clone, isArray, isObject} = Chart.helpers;

let mergeData = function(target, source) {
	if (target === source) {
		return target;
	}
	if (isArray(source)) {
		if (isArray(target)) {
			for (let i = 0, ii = Math.min(target.length, source.length); i < ii; ++i) {
				target[i] = mergeData(target[i], source[i]);
			}
			if (target.length < source.length) {
				target.push(...source.slice(target.length));
			} else
			if (target.length > source.length) {
				target.splice(source.length);
			}
			return target;
		}
	} else
	if (isObject(source)) {
		if (isObject(target)) {
			for (let k in target) {
				if (!k.startsWith('_') && Object_hasOwn(target, k) && Object_hasOwn(source, k)) {
					target[k] = mergeData(target[k], source[k]);
				}
			}
			for (let k in target) {
				if (!k.startsWith('_') && Object_hasOwn(target, k) && !Object_hasOwn(source, k)) {
					delete target[k];
				}
			}
			for (let k in source) {
				if (!k.startsWith('_') && Object_hasOwn(source, k) && !Object_hasOwn(target, k)) {
					target[k] = source[k];
				}
			}
			return target;
		}
	}
	return source;
};

export default mergeData;
