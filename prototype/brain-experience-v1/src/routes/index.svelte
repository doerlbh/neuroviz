<script>
import NeurodataCard from "../components/neurodataCard.svelte";
import {neurodata, fetchNeurodata} from "../neurostore";

let searchTerm = "";
let filteredNeurodata = [];

$: {
    if(searchTerm){
        filteredNeurodata = $neurodata.filter( neurodata => neurodata.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else {
        filteredNeurodata = [...$neurodata];
    }
}

fetchNeurodata();
</script>

<svelte:head>
	<title>The Brain Experience</title>
</svelte:head>

<h1 class="text-4xl text-center my-8">The Brain Experience</h1>
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} placeholder="Search Neurodata">
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
    
    {#each filteredNeurodata as neurodata}
            <NeurodataCard neurodata={neurodata}/>
    {/each}
</div>
    
