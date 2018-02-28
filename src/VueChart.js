import Chart from 'chart.js';

let {clone, merge} = Chart.helpers;

export default {
	name: 'VueChart',

	props: {
		type: String,
		data: Object,
		options: Object,
		updateConfig: Object,
	},

	mounted() {
		this.$watch(() => {
			let type = this.type;
			let data = clone(this.data);
			let options = this.options;
			let updateConfig = this.updateConfig;
			let chart = this.chart;

			if (chart) {
				if (chart.config.type === type) {
					merge(chart, {data, options});
					chart.update(updateConfig);
					return;
				}
				chart.destroy();
			}
			this.chart = new Chart(this.$refs.canvas, clone({type, data, options}));
		});
	},

	beforeDestroy() {
		if (this.chart) {
			this.chart.destroy();
		}
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
