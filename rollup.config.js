import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

let globals = {
	'chart.js': 'Chart',
};

export default {
	input: 'src/VueChart.js',
	external: Object.keys(globals),
	output: {
		file: 'VueChart.js',
		format: 'umd',
		name: 'VueChart',
		globals,
	},
	plugins: [
		buble(),
		uglify(),
	],
};