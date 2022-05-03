<script>
  import NeurodataCard from "../components/neurodataCard.svelte";
  import { neurodata, fetchNeurodata } from "../neurostore";

  let searchTerm = "";
  let filteredNeurodata = [];

  $: {
    if (searchTerm) {
      filteredNeurodata = $neurodata.filter((neurodata) =>
        neurodata.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredNeurodata = [...$neurodata];
    }
  }

  fetchNeurodata();
</script>

<svelte:head>
  <title>Brain Experience</title>
</svelte:head>

<h1 class="text-2xl md:text-4xl text-center my-8">
  <span class="font-semibold">Brain</span> Experience
</h1>

<p class="text-base md:text-lg">
  Pick a dataset to visualization <br /><br />
</p>

<input
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  bind:value={searchTerm}
  placeholder="Search a project"
/>
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
  {#each filteredNeurodata as neurodata}
    <NeurodataCard {neurodata} />
  {/each}
</div>
