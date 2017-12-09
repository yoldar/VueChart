import Chart from 'chart.js';

let VueChart = {
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

	methods: {
		recreateChart() {
			this.destroyChart();
			this.createChart();
		},

		createChart() {
			if (this.$el) {
				this.chart = new Chart(this.$el, {
					type: this.type,
					data: this.data,
					options: this.options,
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
				this.chart.data = value;
			}
		},

		updateChart() {
			if (this.chart) {
				this.chart.update(this.updateConfig);
			}
		},
	},

	render(createElement) {
		return createElement('canvas');
	},
};

export default VueChart;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueChart.name, VueChart);
}