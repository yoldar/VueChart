import Vue from 'vue';
import Chart from 'chart.js';

let VueChart = {
	name: 'VueChart',

	render(createElement) {
		return createElement('canvas');
	},

	props: {
		type: String,
		data: Object,
		options: Object,
		updateConfig: Object,
	},

	mounted() {
		this.createChart();
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
};

Vue.component(VueChart.name, VueChart);

export default VueChart;