
    <svelte:head>
      <script src="https://cdn.plot.ly/plotly-2.11.1.min.js" ></script>
    <title>Research Division | Stimulus {id}</title>
    </svelte:head>

<script>
  export let id;
  import Slide from "$lib/Slide.svelte";
  import Deck from "$lib/Deck.svelte";
  // export let neurodatum;
  // import { data } from "../_data/allen_tiny_tiny_tiny.js";
  // neurodatum = data.records.filter((x) => x[5] === id);

  import Singleviz from "../singleviz.svelte";
	let isLoaded = false;
	function loaded() {
		isLoaded = true;
	}

</script>

  
  <nav class="flex justify-end w-full">
    <a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="../">Journey</a>
    <a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-400 md:text-lg hover:scale-110" href="../secret"
      >Secret</a
    >
    <a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="../emulation"
      >Emulation</a
    >
    <a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="../beyond"
      >Beyond</a
    >
    <a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="../about"
    >?</a
    >
    </nav>
  
  <Deck>
  
  <Slide>
  
  <h1 class="text-2xl md:text-4xl text-center my-8">
  When seeing stimulus {id}, the brain be like:
  </h1>
  
  <!-- <p id='instruction_info' class="text-base md:text-lg text-center">
    <b>Instructions:</b>  <br /><br />
  </p> -->
 
	<Singleviz id={id}/>

</Slide>
  
  </Deck>
  