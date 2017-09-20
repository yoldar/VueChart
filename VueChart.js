(function(factory) {
	if (typeof module !== 'undefined' && typeof exports !== 'undefined' && this === exports) {
		module.exports = factory(require('vue'), require('chart.js'));
	} else {
		this.Vue.component('VueChart', factory(this.Vue, this.Chart));
	}
}).call(this, function(Vue, Chart) {

	return {
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
			type(type) {
				this.createChart();
			},

			data: {
				handler(data) {
					this.setChartData(data);
					this.updateChart();
				},
				deep: true,
			},

			/*options: {
				handler(options) {
					this.setChartOptions(options);
					this.updateChart();
				},
				deep: true,
			},*/
		},

		methods: {
			createChart() {
				this.destroyChart();
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

			setChartData(data) {
				if (this.chart) {
					this.chart.data = data;
				}
			},

			/*setChartOptions(options) {
				if (this.chart) {
					this.chart.options = options;
				}
			},*/

			updateChart() {
				if (this.chart) {
					this.chart.update(this.updateConfig);
				}
			},
		},
	};

});