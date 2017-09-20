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
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.min.js"></script>
<script src="https://unpkg.com/vuechart"></script>

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

...

---

`data`

...

---

`options`

...

---

`updateConfig`

...
