import Object_isObject from '../Object/isObject';
import Object_mapValues from '../Object/mapValues';

let Reflect_clone = function(value) {
	if (Array.isArray(value)) {
		return value.map(Reflect_clone);
	} else
	if (Object_isObject(value)) {
		return Object_mapValues(value, Reflect_clone);
	}
	return value;
};

export default Reflect_clone;
