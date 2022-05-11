<script>
  import NeurodataCard from "../components/neurodataCard.svelte";
  import { neurodata, fetchNeurodata } from "../neurostore";
  import Slide from "$lib/Slide.svelte";
	import Deck from "$lib/Deck.svelte";

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


<nav class="flex justify-end w-full">
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./">Journey</a>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./secret"
	  >Secret</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./emulation"
	  >Emulation</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-400 md:text-lg hover:scale-110" href="./beyond"
	  >Beyond</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./about"
	>?</a
  >
  </nav>

  <svelte:head>
	<title>Brain Experience | Beyond</title>
  </svelte:head>


<Deck>


	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="animate__animated animate__zoomIn font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				Roads Ahead.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto leading-relaxed"
			>
		 What is more to be expected?
		</p>

			<p
				class="font-sans font-normal text-center text-lg text-gray-300 max-w-4/6 mx-auto leading-relaxed"
			>
			Please press the right-left key to navigate the journey.
			</p>
		</div>
	</Slide>


<Slide>
	<div
		class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
	>
		<div class="lg:w-11/24 w-22/24 mb-8">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				Next steps
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-4xl text-left mt-8 tracking-tighter"
			>
				Synergy between AI and neuroscience
			</h1>
			<p
				class="font-sans font-light text-l text-gray-500 mt-8 leading-relaxed"
			>
			 Some information about computational neuroscience
			
			</p>
		</div>
		<div class="lg:w-11/24 w-22/24">
			<lottie-player
				src="https://assets2.lottiefiles.com/packages/lf20_ayiupfed.json"
				background="transparent"
				speed="1"
				loop
				autoplay
			/>
		</div>
	</div>
</Slide>

<Slide>

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

</Slide>
</Deck>
