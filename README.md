# VueChart

Very simple Vue wrapper for Chart.

## dependencies

- [Vue](https://github.com/vuejs/vue)
- [Chart](https://github.com/chartjs/Chart.js)

## setup

### NPM

```sh

npm install vuechart

```

### ES2015

Register the component globally.

```js

import Vue from 'vue';
import VueChart from 'vuechart';

Vue.component(VueChart.name, VueChart);

```

*or*

Register the component in the scope of another instance.

```js

import VueChart from 'vuechart';

export default {
  // ...
  components: {
	[VueChart.name]: VueChart,
  },
};

```

### Browser

```html

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/chart.js/dist/Chart.min.js"></script>
<script src="https://unpkg.com/vuechart"></script>

```

If Vue is detected, the component will be registered automatically.

Include [polyfills](https://polyfill.io/) to support older browsers.

```html

<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>

```

## usage

```html

<vue-chart
  type="bar"
  :data="chartData"
  :options="{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}"
  :update-config="{duration: 800, easing: 'easeOutBounce'}"
></vue-chart>

```

## properties

| property | type | description |
| ---: | :--- | :--- |
| `type` | `String` | The type of the chart.<br/>Changing the value will recreate the chart. |
| `data` | `Object` | The data.<br/>Changing the value will update the chart. |
| `options` | `Object` | The configuration options of the chart of the current type.<br/>Changing the value will recreate the chart. |
| `updateConfig` | `Object` | The additional configuration for the update process. |
