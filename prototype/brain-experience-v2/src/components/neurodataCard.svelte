<script>
  // import { fade } from 'svelte/transition';
  export let neurodata;
</script>

<!-- <a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/neurodata/${neurodata.dataset_id}`} transition:fade> -->
<a
  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href={`/neurodata/${neurodata.id}`}
>
  <img class="h-40 w-40 " src={neurodata.image} alt={neurodata.name} />
  <h2 class="uppercase text-2xl">{neurodata.id}. {neurodata.name}</h2>
</a>
