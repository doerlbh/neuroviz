<script>
	import Singleviz from "./singleviz.svelte";
	import CovidUK from "./CovidUK.svelte";
	// import CovidUk from "./CovidUK.svelte";
	let isLoaded = false;
	function loaded() {
		isLoaded = true;
	}
</script>

<svelte:head>
	<script
		src="https://cdn.plot.ly/plotly-2.11.1.min.js"
		on:load={loaded}></script>
</svelte:head>

<!-- {#if isLoaded} -->
	<Singleviz />
<!-- {/if} -->
