<script>

	import Map from './Map.svelte'
	import List from './List.svelte'

	let list = [];

	$: stateCount = list.length;

	function pluralize(noun, count) {
		if (count === 1) {
			return noun
		}
		return `${noun}s`
	}

	function onToggleState(state) {
		const stateIndex = list.indexOf(state)
		if (stateIndex === -1) {
			list = [
				...list,
				state
			].sort()
		} else {
			list = [
				...list.slice(0, stateIndex),
				...list.slice(stateIndex + 1)
			]
		}
	}

	function resetList() {
		list = [];
	}

</script>

<main>
	<h1>How many states have you been to?</h1>
	<p>
		You've been to {stateCount} {pluralize('state', stateCount)}! Click a state to add it to your list.
		<button on:click={resetList}>Reset List</button>
	</p>
	<Map callback={onToggleState} list={list} />
	<List list={list} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
