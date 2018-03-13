import Chart from 'chart.js';

import mergeData from './mergeData';
import mergeOptions from './mergeOptions';

let {clone} = Chart.helpers;

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
			let options = clone(this.options);
			let updateConfig = this.updateConfig;
			let chart = this.chart;

			if (chart) {
				if (chart.config.type === type) {
					mergeData(chart.data, data);
					mergeOptions(chart.options, options);
					chart.update(updateConfig);
					return;
				}
				chart.destroy();
			}
			this.chart = new Chart(this.$refs.canvas, {type, data, options});
		});
	},

	render(createElement) {
		return (
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
						'div',
						{
							style: {
								position: 'absolute',
								left: 0,
								top: 0,
								right: 0,
								bottom: 0,
							},
						},
						[
							createElement(
								'canvas',
								{
									ref: 'canvas',
								},
							),
						],
					),
				],
			)
		);
	},
};
