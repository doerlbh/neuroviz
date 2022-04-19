## Lab 7

**Note**: This project makes use of the `svelte-app` and `vue-app` directories in the top level of this repo.

### Objective

**Understand how to use UI component libraries that work well with Vue and Svelte**

- Import new UI elements from [Element Plus](https://element-plus.org/en-US/) (for Vue) and [Svelte Material UI](https://sveltematerialui.com/) (for Svelte).
- Read and understand the components' API documentation
- Understand the tradeoffs of using external component libraries

### Questions to check your understanding

- In `BarChart.vue`, we do not pass a value to the `el-slider` attributes for `show-input` and `show-stops`. Same for `BarChart.svelte` and the `Slider` attributes for `discrete` and `tickMarks`. Why not? What value could we pass?
- In `BikeRecommender.vue` and `UmbrellaRecommender.vue` and `Forecast.svelte`, we deleted most of the CSS we were using to style these components, but we still need to set the card background color. Where does this happen?

### Features to try implementing

- In `Forecast.svelte`, the media query that hides the thumbnail images on small screens is broken. Can you find a way to fix it using CSS only? Can you find a way to fix it using JavaScript and markup?
- In the Svelte app, use checkboxes or chips to implement a filter applies to the cards in `Forecast.svelte`.
- In the Vue app, add a Select component to change what term triggers the `umbrellaRecommendation`. (This logic lives in `App.vue` and gets passed to `UmbrellaRecommender.vue`.)
