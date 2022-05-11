<script>
  import NeurodataCard from "../components/neurodataCard.svelte";
//   import NeurovizCard from "../components/neurovizCard.svelte";
  import { selected_id, neurodata, fetchNeurodata } from "../neurostore";
  import { data } from "../routes/_data/allen_tiny_tiny_tiny.js";

  import Slide from "$lib/Slide.svelte";
	import Deck from "$lib/Deck.svelte";

  let searchTerm = "";
  let filteredNeurodata = [];

  let selected_one;
  data.selected_one = selected_one

  let instruction = `Please select an actual image stimulus to activate the full brain regions.`

selected_id.subscribe(value => {
	selected_one = String(value);
});

  $: {
    if (searchTerm) {
      filteredNeurodata = $neurodata.filter((neurodata) =>
        neurodata.name.toLowerCase().includes(searchTerm.toLowerCase()) || neurodata.first_label.toLowerCase().includes(searchTerm.toLowerCase()) || neurodata.second_label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredNeurodata = [...$neurodata];
    }
  }

  $: {
	  console.log(selected_one)
	  if (selected_one != -1) {
		filteredNeurodata = $neurodata.filter((neurodata) =>
		neurodata.id == selected_one
		);
		instruction = `You have selected an image stimuli. Please proceed to the next page to see what's under the hood.`
	  }
	  data.selected_one = selected_one
  }

  fetchNeurodata();
</script>


<nav class="flex justify-end w-full">
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./">Journey</a>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-400 md:text-lg hover:scale-110" href="./secret"
	  >Secret</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./emulation"
	  >Emulation</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./beyond"
	  >Beyond</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./about"
	>?</a
  >
  </nav>

  <svelte:head>
	<title>Brain Experience | Secret</title>
  </svelte:head>


<Deck>
	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="animate__animated animate__zoomIn font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				Research Division.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto leading-relaxed"
			>
		The nits and grits behind the experience of individual perception.
		</p>

			<p
				class="font-sans font-normal text-center text-lg text-gray-300 max-w-4/6 mx-auto leading-relaxed"
			>
				Please press the right-left key to navigate the journey.
			</p>
		</div>
	</Slide>

<Slide>

<h1 class="text-2xl md:text-4xl text-center my-8">
  How does the brain operate when facing different stimulations?
</h1>

<p id='instruction_info' class="text-base md:text-lg text-center">
  <b>Instructions:</b> {instruction} <br /><br />
</p>

<input
  class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
  bind:value={searchTerm}
  placeholder="Input a keyword for searching"
/>
<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
  {#each filteredNeurodata as neurodata}
    <NeurodataCard {neurodata} />
  {/each}
  <!-- <div class='hidden start-1:grid'>
	<NeurovizCard {selected_one} />
</div> -->
</div>

</Slide>

</Deck>
