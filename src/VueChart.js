import Chart from 'chart.js';

import Function_stubObject from 'x/src/Function/stubObject';
import Lang_clone from 'x/src/Lang/clone';

export default {
	name: 'VueChart',

	props: {
		type: String,
		data: {
			type: Object,
			default: Function_stubObject,
		},
		options: {
			type: Object,
			default: Function_stubObject,
		},
		updateConfig: {
			type: Object,
			default: Function_stubObject,
		},
	},

	watch: {
		type() {
			this.recreateChart();
		},

		data: {
			handler(value) {
				this.setChartData(value);
				this.updateChart();
			},
			deep: true,
		},

		options: {
			handler() {
				this.recreateChart();
			},
			deep: true,
		},
	},

	mounted() {
		this.createChart();
	},

	beforeDestroy() {
		this.destroyChart();
	},

	methods: {
		recreateChart() {
			this.destroyChart();
			this.createChart();
		},

		createChart() {
			if (this.$refs.canvas) {
				this.chart = new Chart(this.$refs.canvas, {
					type: this.type,
					data: Lang_clone(this.data),
					options: Lang_clone(this.options),
				});
			}
		},

		destroyChart() {
			if (this.chart) {
				this.chart.destroy();
			}
		},

		setChartData(value) {
			if (this.chart) {
				this.chart.data = Lang_clone(value);
			}
		},

		updateChart() {
			if (this.chart) {
				this.chart.update(this.updateConfig);
			}
		},
	},

	render(createElement) {
		return(
			createElement(
				'div',
				{
					style: {
						position: 'relative',
						width: '100%',
						height: '100%',
					},
				},
				[
					createElement(
						'canvas',
						{
							ref: 'canvas'
						},
					),
				],
			)
		);
	},
};
