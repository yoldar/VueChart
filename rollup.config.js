import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

import pkg from './package.json';

let globals = {
	'chart.js': 'Chart',
};

export default {
	input: 'src/index.js',
	external: Object.keys(globals),
	output: {
		file: pkg.main,
		format: 'umd',
		name: 'VueChart',
		globals,
	},
	plugins: [
		nodeResolve(),
		buble(),
		uglify(),
	],
};
