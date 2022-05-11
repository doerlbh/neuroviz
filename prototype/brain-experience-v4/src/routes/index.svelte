<script>
	import Slide from "$lib/Slide.svelte";
	import Deck from "$lib/Deck.svelte";
	// import Vizzu from "$lib/Vizzu.svelte";
	// import { data } from "./_data/allen_tiny_tiny_tiny.js";

	let interpretation = ` dWhat we are seeing now, is the signal value of many neurons recorded from the study where multiple participants view different images at different time points, colored by their brain regions.`;

	</script>

<nav class="flex justify-end w-full">
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-400 md:text-lg hover:scale-110" href="./">Journey</a>
	<a class="pr-2 pl-2 pt-2 pb-2 text-sm text-gray-300 md:text-lg hover:scale-110" href="./secret"
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
	<title>Brain Experience | Journey</title>
  </svelte:head>

<Deck>


	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="animate__animated animate__zoomIn font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				Brain Experience.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto leading-relaxed"
			>
		A journey towards the inner self of your brain, brought to you by Baihan Lin.
		</p>
			<p class="font-sans font-normal text-center text-lg text-gray-300 max-w-4/6 mx-auto leading-relaxed">
				Please press the right-left key to navigate the journey.
			</p>
		</div>
	</Slide>




	<Slide>
		<div
			class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
		>
			<div
				class="lg:w-11/24 w-22/24 animate__animated animate__fadeInLeft"
			>
			<lottie-player
			src="https://assets8.lottiefiles.com/packages/lf20_33asonmr.json"
			background="transparent"
			speed="1"
			loop
			autoplay
		/>
			</div>
			<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Introduction
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-4xl text-left mt-8 tracking-tighter"
				>
					Through the eye of a cognitive neuroscientist
				</h1>
				<p
					class="font-sans font-light text-l text-gray-500 mt-8 leading-relaxed"
				>
				Cognitive neuroscience is the research field that studies the biological processes and psychological aspects that underlie cognition, with a specific focus on the neural connections in the brain which are involved in mental processes. There are many things cognitive neuroscientist do: we might study how the brain understands language, music, do math, or think creatively. In this journey, we are going to focus on brain mechanisms behind the perception, and more specifically, visual perception.
				Wanna join us? Buckle up.
				</p>
			
			</div>
		</div>
	</Slide>


	<Slide>
		<div class="flex flex-wrap justify-evenly mx-auto max-w-22/24 pt-20">
			<div class="xl:w-11/24 w-22/24">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Background
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-4xl text-left mt-8 tracking-tighter"
				>
					This is the Way...
				</h1>
				<p
					class="font-sans font-light text-l text-gray-500 mt-8 leading-relaxed"
				>
				Usually, neuroscientists first define a research question (e.g. how do the background noise affect how different brain regions perform their functional role in categorizing one object from another?) Then, we design controlled experiments with specific conditions that test the hypothesis (e.g. images with different background noise as the visual stimuli). We recruit participants to perform these tasks while we record their brain activities. Finally, we analyze the data and arrive at a explanation.
							</p>
			</div>
			<div class="xl:w-11/24 w-22/24">
				<div
					class="flex flex-wrap justify-evenly items-top mx-auto max-w-22/24"
				>
			
					<div
						class="w-23/24 md:w-11/24 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
					>
						<div class="i-openmoji-lab-coat text-5xl mt-6 " />
						<h2
							class="font-sans font-semibold text-neutral-900 text-2xl tracking-tighter leading-none"
						>
						 Experimental approaches
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
						&bull; Psychophysics <br>
						&bull; Event-related potential <br>
						&bull; Lab on a chip 
						</p>
					</div>
					<div
					class="w-23/24 md:w-11/24 animate__animated op0 start-2:op100 start-2:animate__fadeInRight"
				>
					<div class="i-openmoji-video-camera text-5xl mt-6" />
					<h2
						class="font-sans font-semibold text-neutral-900  text-2xl tracking-tighter leading-none"
					>
						Data collection methods
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
					&bull; Neuroimaging   <br>
					&bull; Neuronal recording <br>
					&bull; Single-cell techniques
					</p>
				</div>

				<div
				class="w-23/24 md:w-11/24 animate__animated op0 start-3:op100 start-3:animate__fadeInRight"
			>
				<div
					class="i-openmoji-magnifying-glass-tilted-right mt-6 text-5xl"
				/>
				<h2
					class="font-sans font-semibold text-neutral-900 text-2xl tracking-tighter leading-none"
				>
					Computational approaches
				</h2>
				<p
					class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
				>
				&bull; Functional connectivity  <br>
				&bull; Brain-wide association analysis <br>
				&bull; Time series analysis
				</p>
			</div>

					 <div
						class="w-23/24 md:w-11/24 animate__animated op0 start-4:op100 start-4:animate__fadeInRight"
					>
						<div class="i-openmoji-spider-web text-5xl mt-6 " />
						<h2
							class="font-sans font-semibold text-neutral-900 text-2xl tracking-tighter leading-none"
						>
							Inference techniques
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
						&bull; Representational similarity analysis  <br>
						&bull; Deep neural networks <br>
						&bull; Theoretical neuroscience modeling
						</p>
					</div>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 center">
		<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Method
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-4xl text-left mt-8 tracking-tighter"
				>
					Into our visual perception problem.
				</h1>
			<div

				class="flex md:flex-nowrap flex-wrap md:w-7/10 w-9/10 h-1/3 items-center mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInRight animate__slow"
			>
				<img src="cat_brain.png" alt="figure-1" class="w-70 mx-auto" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
					We want to study major visual cortical areas in the brain and how they operate when viewing scenes of naturalistic conditions. 
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
					To investigate this question, we collect brain activity data from the subjects when they are viewing a series of images. In this case, to examine the cellular responses to natural stimuli, the images being used consist of a library of 118 natural scenes, selected from three different databases (Berkeley Segmentation Dataset, van Hateren Natural Image Dataset and McGill Calibrated Colour Image Database). A scene image was presented briefly (250 ms) then replaced with the next scene image. Each image was presented 50 times, in a random order, with intermittent blank intervals.
					</p>
				</div>
			</div>

			<div
				class="flex h-1/3 md:flex-nowrap flex-wrap-reverse md:w-7/10 w-9/10 items-center mr-5 mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInLeft animate__slow"
			>
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
					We study multiple brain regions at the same time.
				</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
					To understand the function of different brain regions, we use a neuroimaging technique, called calcium imaging, to measure the activity pattern of different brain regions of interest (ROIs). To be more precise, we are interested in the perceptual behavior of six visual brain areas: primary visual cortex (V1), laterointermediate (LM), posteromedial (PM), rostrolateral (RL), anteromedial (AM), and anterolateral (AL) visual areas.
					</p>
				</div>
				<img src="brain_areas.jpg" alt="figure-1" class="w-70 mx-auto" />
			</div>
			<!-- <div
				class="flex h-1/3 md:flex-nowrap flex-wrap md:w-7/10 w-9/10 items-center mr-5 mb-5 pb-10 animate__animated animate__slideInRight animate__slow"
			>
				<img src="brain_areas.jpg" alt="figure-1" class="w-70 mx-auto" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						knowledge 3
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
					some details 3
									</p>
				</div> 
			</div>-->
		</div>
	</Slide>


	<Slide>
		
		<div
			class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
		>
		<div class="xl:w-11/24 w-22/24">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				Visualization
			</p>
			<h1
				class="animate__animated animate__fadeIn font-sans font-black text-neutral-900 text-4xl text-left mt-8 tracking-tighter"
			>
			What are the teams at play when the brain sees an image?
			</h1>
			
			<p				class="font-sans font-light text-l text-gray-500 mt-8 leading-relaxed"
			>
			This is what the data looks like. Please click on the visualization to activate the interactive sequence.
			<br>
		</p>
		<p				class="font-sans font-light text-l text-gray-500 mt-8 leading-relaxed"
		>
		{interpretation}
		<br>
	</p>
		</div>

			<div
				class="lg:w-11/24 w-22/24 animate__animated animate__zoomIn"
			>
				
			
			</div>
		
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
					How does the brain work?
				</h1>
				<p
					class="font-sans font-light text-l text-gray-500 mt-8 leading-relaxed"
				>
					Some more information
				
				</p>
			</div>
			<div class="lg:w-11/24 w-22/24">
				<lottie-player
					src="https://assets2.lottiefiles.com/packages/lf20_2cnqtinl.json"
					background="transparent"
					speed="1"
					loop
					autoplay
				/>
			</div>
		</div>
	</Slide>


</Deck>
