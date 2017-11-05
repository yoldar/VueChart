# VueChart

Very simple Vue wrapper for Chart.

## dependencies

- [Vue](https://github.com/vuejs/vue)
- [Chart](https://github.com/chartjs/Chart.js)

## setup

Install the [package](https://www.npmjs.com/package/vuechart) via npm.

```sh

npm install vuechart

```

---

Include the code in your page via a CDN.

```html

<script src="https://unpkg.com/vue"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vuechart"></script>

```

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

`type`

*type*: `String`

The type of the chart.

Changing the value will recreate the chart.

---

`data`

*type*: `Object`

The data.

Changing the value will update the chart.

---

`options`

*type*: `Object`

The configuration options of the chart of the current type.

Changing the value will recreate the chart.

---

`updateConfig`

*type*: `Object`

The additional configuration for the update process.
