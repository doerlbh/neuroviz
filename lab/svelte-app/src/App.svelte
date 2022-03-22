<script>
	import { onMount } from 'svelte';
	import BarChart from './BarChart.svelte'
	import Forecast from './Forecast.svelte'

	const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";

	let forecast = {
		properties: {
			periods: []
		}
	};

	onMount(async () => {
		const res = await fetch(API_URL);
		forecast = await res.json();
	});
</script>

<main>
	<h4>This week's temperature chart</h4>
	<div class='app-body'>
		<Forecast periods={forecast.properties.periods} />
		<BarChart data={forecast.properties.periods} height={400} width={600} />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
	}

	.app-body {
		display: grid;
		grid-template: 1fr / 1fr 1fr;
	}
	@media (max-width: 1200px) {
        .app-body {
            display: grid;
            grid-template: 1fr 1fr / 1fr;
        }
    }

</style>
