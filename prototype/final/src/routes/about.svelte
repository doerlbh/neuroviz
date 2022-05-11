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
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./beyond"
	  >Beyond</a
	>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-400 md:text-lg hover:scale-110" href="./about"
	>?</a
  >
  </nav>

  <svelte:head>
	<title>Brain Experience | About</title>
  </svelte:head>


<Deck>


	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="animate__animated animate__zoomIn font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				About.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto leading-relaxed"
			>
		 Behind the scenes of this project.

		 <br>
		 <br>
		 
		 Which brain regions light up at which moments when seeing which images or listening certain music? And inversely what do brain imagine seeing or hearing given certain types of neural responses?

		 </p>
		 <p
				class="font-sans font-normal  max-w-4/6 mx-auto leading-relaxed"
			>
		 <br>
		 <br>
		 Created by Columbia University neuroscientist <b><a href="https://www.baihan.org/">Baihan Lin</a></b>, <i>Brain Experience</i> is an interactive data visualization that enables the users to experience how human brains perform complicated tasks that we as people find easy. The mechanisms and processes beneath it, surprisingly, are highly complex and involve many organic elements. The projects can help the users unravel these beautiful mysteries that intrigue scientists and philosophers for ages. The cognitive tasks specific for this visualization are mostly likely to be either viewing images or listening to music.

		 <br>
		 <br>
		 As the <b>Research Topics</b>,
this project will <br>
<br>&bull; introduce the foundations of the perception process of the brains with visual storytelling and
<br>&bull; visualize the dynamic process of how different brain regions interact to perform these cognitive tasks,


 <br>
 <br>
The <b>Research Significance</b> is to guide the readers understand how the human brains process information in an organized, systematic and hierarchical way, so that they can:

<br>
<br>&bull; have a knowledge of the underlying mechanisms when they perform daily tasks;
<br>&bull;  gain access to one of the research frontiers in the fields of cognitive and computational neuroscience;
<br>&bull;    come up with new research questions and pursue a scientific research;
<br>&bull;     build better neural network structures inspired by these neuroscientific discoveries; and
<br>&bull;   revisit their philosophical stances of life about how our consciousness and thinking processes are formed.

<br>
<br>
<b>Research Outline</b>

<img src="research-map.png" alt="research" class="w-150 mx-auto" />

<br>
<br>
<b>Design Outline</b>

<img src="initial-design.png" alt="design" class="w-150 mx-auto" />

<br>
<br>
<b>Design Wireframe</b>
<img src="wireframe.png" alt="wireframe" class="w-150 mx-auto" />

<br>
<br>


		</p>

			<!-- <p
				class="font-sans font-normal text-center text-lg text-gray-300 max-w-4/6 mx-auto leading-relaxed"
			>
			Please press the right-left key to navigate the journey.
			</p> -->

			
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
