export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/visualization.svelte"),
	() => import("../../src/routes/neuroscience.svelte"),
	() => import("../../src/routes/references.svelte"),
	() => import("../../src/routes/neurodata/[id].svelte"),
	() => import("../../src/routes/Forecast.svelte"),
	() => import("../../src/routes/viz2.svelte"),
	() => import("../../src/routes/viz3.svelte"),
	() => import("../../src/routes/App.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"visualization": [[0, 3], [1]],
	"neuroscience": [[0, 4], [1]],
	"references": [[0, 5], [1]],
	"neurodata/[id]": [[0, 6], [1]],
	"Forecast": [[0, 7], [1]],
	"viz2": [[0, 8], [1]],
	"viz3": [[0, 9], [1]],
	"App": [[0, 10], [1]]
};