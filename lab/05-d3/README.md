## Lab 5

**Note**: This project makes use of the `svelte-app` and `vue-app` directories in the top level of this repo.

### Objective

**Understand how to use d3.js with frameworks**

- Think about the separation of responsibilities for different parts of the DOM
- Refresh how d3.js enter/update/exit works

### Questions to check your understanding

- Under what conditions does `xScale` get recomputed? What about `yScale`?
- Why do we need to pass the function `(update) => update` to the `.join` method if it doesn't change anything?
- Which HTML and SVG elements are rendered by the framework (Vue/Svelte) and which ones by d3?
- Given how similar the d3 code is in `BarChart.svelte` and `BarChart.vue`, how might you imagine reusing this code in order to make reusable code for multiple frameworks? (And why might you want to do that?)

### Features to try implementing

- [easy] Change the color of bars in the "update" selection so it's easier to visually differentiate between bars that were just added and bars that were previously visible.
- [medium] When the user hovers over a bar, display the `shortForecast` for that period underneath the bar chart.
- [hard] Change the behavior of the input slider so the d3 transition only begins when the user releases the slider (hint: on `mouseup`).
