<script>
  import { xlink_attr } from "svelte/internal";

  import PubCard from "../components/pubCard.svelte";
  import { epubs, cpubs, jpubs, mpubs, fetchPubdataTypes } from "../datastore";

  let searchTerm = "";
  let filteredEpubs = [];
  let filteredCpubs = [];
  let filteredJpubs = [];
  let filteredMpubs = [];

  $: {
    if (searchTerm) {
      filteredEpubs = $epubs
        .filter((pubdata) =>
          pubdata.abstract.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((x, i) => ({ ...x, displayid: x.nid }));
    } else {
      filteredEpubs = [...$epubs].map((x, i) => ({ ...x, displayid: x.nid }));
    }
  }

  $: {
    if (searchTerm) {
      filteredCpubs = $cpubs
        .filter((pubdata) =>
          pubdata.abstract.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((x, i) => ({ ...x, displayid: x.nid }));
    } else {
      filteredCpubs = [...$cpubs].map((x, i) => ({ ...x, displayid: x.nid }));
    }
  }

  $: {
    if (searchTerm) {
      filteredJpubs = $jpubs
        .filter((pubdata) =>
          pubdata.abstract.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((x, i) => ({ ...x, displayid: filteredJpubs.length - i }));
    } else {
      filteredJpubs = [...$jpubs].map((x, i) => ({ ...x, displayid: x.nid }));
    }
  }

  $: {
    if (searchTerm) {
      filteredMpubs = $mpubs
        .filter((pubdata) =>
          pubdata.abstract.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((x, i) => ({ ...x, displayid: filteredMpubs.length - i }));
    } else {
      filteredMpubs = [...$mpubs].map((x, i) => ({ ...x, displayid: x.nid }));
    }
  }

  fetchPubdataTypes();
</script>

<svelte:head>
  <title>Brain Experience | References</title>
</svelte:head>

<h1 class="text-2xl md:text-4xl text-center my-8">
  <span class="font-semibold break-all">References</span>
</h1>
<input
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  bind:value={searchTerm}
  placeholder="Search a publication"
/>

<br />
<h2 class="font-semibold text-lg md:text-2xl my-4">
  Manuscripts and preprints
</h2>
<div class="py-4 grid gap-4 grid-cols-1">
  {#each filteredMpubs as pubdata}
    <PubCard {pubdata} />
  {/each}

  <h2 class="font-semibold text-lg md:text-2xl my-4">
    Peer-reviewed journal publications
  </h2>
  {#each filteredJpubs as pubdata}
    <PubCard {pubdata} />
  {/each}

  <h2 class="font-semibold text-lg md:text-2xl my-4">
    Peer-reviewed conference proceedings
  </h2>
  {#each filteredCpubs as pubdata}
    <PubCard {pubdata} />
  {/each}

  <h2 class="font-semibold text-lg md:text-2xl my-4">
    Peer-reviewed extended abstracts
  </h2>
  {#each filteredEpubs as pubdata}
    <PubCard {pubdata} />
  {/each}
</div>
