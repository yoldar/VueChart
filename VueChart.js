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
			type() {
				this.recreateChart();
			},

			data: {
				handler(data) {
					this.setChartData(data);
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

			setChartData(data) {
				if (this.chart) {
					this.chart.data = data;
				}
			},

			updateChart() {
				if (this.chart) {
					this.chart.update(this.updateConfig);
				}
			},
		},
	};

});