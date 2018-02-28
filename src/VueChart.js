import Chart from 'chart.js';

import Lang_clone from 'x/src/Lang/clone';

export default {
	name: 'VueChart',

	props: {
		type: String,
		data: Object,
		options: Object,
		updateConfig: Object,
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
					data: Reflect_clone(this.data),
					options: Reflect_clone(this.options),
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
				this.chart.data = Reflect_clone(value);
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
