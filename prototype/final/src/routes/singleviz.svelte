<script>
	import Charts from '$lib/Charts.svelte';
	let id = Math.floor(Math.random() * 117) + 1;

	import { data } from './_data/allen_tiny_tiny_tiny.js';
	let neurodatum = data.records;

	const charts = [];
	for (let i = 0; i < 1; i++) {
		charts.push({
			id: 'chart' + i,
			data: [
				{
					type: 'scatter3d',
					name: 'All neuronal firing patterns',
					x: neurodatum.filter((x) => x[1] === 'V1' && x[5] !== id.toString()).map((x) => x[0]),
					y: neurodatum.filter((x) => x[1] === 'AM' && x[5] !== id.toString()).map((x) => x[0]),
					z: neurodatum.filter((x) => x[1] === 'AL' && x[5] !== id.toString()).map((x) => x[0]),
					mode: 'markers',
					marker: {
						color: 'rgb(127, 127, 127)',
						size: 12,
						symbol: 'circle',
						line: {
							color: 'rgb(204, 204, 204)',
							width: 0.5
						},
						opacity: 0.1
					}
				},
				{
					type: 'scatter3d',
					name: 'Stimulus-specific neuronal firing patterns',
					x: neurodatum.filter((x) => x[1] === 'V1' && x[5] === id.toString()).map((x) => x[0]),
					y: neurodatum.filter((x) => x[1] === 'AM' && x[5] === id.toString()).map((x) => x[0]),
					z: neurodatum.filter((x) => x[1] === 'AL' && x[5] === id.toString()).map((x) => x[0]),
					mode: 'markers',
					marker: {
						size: 12,
						line: {
							color: 'rgba(217, 217, 217, 0.14)',
							width: 1
						},
						opacity: 1
					}
				}
			],
			layout: {
				scene: {
					xaxis: { title: 'Primary visual cortex' },
					yaxis: { title: 'Anteromedial cortex' },
					zaxis: { title: 'Anterolateral cortex' }
				},
				margin: { t: 0 },
				autosize: false,
				width: 1000,
				height: 600
			},
			config: { responsive: true, displayModeBar: false }
		});
	}
</script>

<svelte:head>
	<script src="https://cdn.plot.ly/plotly-2.11.1.min.js"></script>
</svelte:head>

<Charts {charts} />
