import VueChart from './VueChart';

export default VueChart;

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.component(VueChart.name, VueChart);
}
