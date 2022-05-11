<script>
  // import { fade } from 'svelte/transition';
  import { selected_id } from '../neurostore'
  export let neurodata;

  function reset(id) {
		selected_id.set(id);
	}
</script>

<button 
  on:click={reset(neurodata.id)} 
>
<a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/neurodata/${neurodata.id}`}>
  <img class="h-40 w-40" src={neurodata.image} alt={neurodata.name} />
  <h2 class="text-xl">{neurodata.name}</h2>
  <h3 class="text-l">Labels: {neurodata.first_label} | {neurodata.second_label}</h3>
</a>
</button>
