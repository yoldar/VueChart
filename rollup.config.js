import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import minify from 'rollup-plugin-babel-minify';

export default {
	input: 'src/VueChart.js',
	external: ['vue', 'chart.js'],
	output: {
		file: 'VueChart.js',
		format: 'umd',
		name: 'VueChart',
		globals: {
			'vue': 'Vue',
			'chart.js': 'Chart',
		},
	},
	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: [
				['env', {
					targets: {
						'browsers': ['last 2 versions'],
					},
					modules: false,
					useBuiltIns: true,
				}],
			],
		}),
		nodeResolve(),
		commonjs({
			include: 'node_modules/**',
		}),
		minify({comments: false}),
	],
};