<script>
	import Slide from "$lib/Slide.svelte";
	import Deck from "$lib/Deck.svelte";
	import Vizzu from "$lib/Vizzu.svelte";
	import { data } from "https://lib.vizzuhq.com/test/integration/test_data/infinite_data.js?client";
</script>

<Deck>
	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<h1
				class="font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				Brain Experience.
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
		A data visualization that XXX by Baihan Lin
		</p>

			<p
				class="font-sans font-normal text-center text-lg text-gray-300 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				Press the right-left key to navigate or tap the right-left side
				of the screen
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
				<img src="14.svg" alt="figure-1" class="rounded-20" />
			</div>
			<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Introduction
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					What is cognitive neuroscience?
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Some background of neuroscience
				</p>
			
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
					Introduction
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					How does the brain work?
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Some more information
				
				</p>
			</div>
			<div class="lg:w-11/24 w-22/24">
				<lottie-player
					src="https://assets9.lottiefiles.com/packages/lf20_rhnmhzwj.json"
					background="transparent"
					speed="1"
					loop
					autoplay
				/>
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
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Methods are here...
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					The analytical framework is ....
				</p>
			</div>
			<div class="xl:w-11/24 w-22/24">
				<div
					class="flex flex-wrap justify-evenly items-top mx-auto max-w-22/24"
				>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-1:op100 start-1:animate__fadeInRight"
					>
						<div
							class="i-openmoji-magnifying-glass-tilted-right
						text-5xl"
						/>
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Computational approaches
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							blah blah blah
						</p>
					</div>
					<div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-2:op100 start-2:animate__fadeInRight"
					>
						<div class="i-openmoji-rocket text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
						 Experimental approaches
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							some more details
						</p>
					</div>
					<!-- <div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-3:op100 start-3:animate__fadeInRight"
					>
						<div class="i-openmoji-bullseye text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							Inference techniques
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							No magic, you know exactly what is going on at each
							transition.
						</p>
					</div> -->
					<!-- <div
						class="w-23/24 md:w-11/24 py-10 animate__animated op0 start-4:op100 start-4:animate__fadeInRight"
					>
						<div class="i-openmoji-delete text-5xl" />
						<h2
							class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
						>
							You can also remove classes.
						</h2>
						<p
							class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
						>
							With the `end-1:...` you can remove classes from
							your HTML. This is very useful when you are working
							with animate.css.
						</p>
					</div> -->
				</div>
			</div>
		</div>
	</Slide>


	<Slide>
		<div class="flex flex-col min-h-screen justify-center">
			<img
				src="bg.jpg"
				alt="background"
				class="fixed object-cover w-screen h-screen"
			/>
			<div
				class="absolute md:self-end lg:mr-1/8 m-5 sm:p-10 p-5 lg:w-1/3 md:w-1/2 bg-white rounded-lg relative shadow-md op90 animate__animated animate__slideInRight start-1:animate__hinge end-1:animate__slideInRight"
			>
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Analysis
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					Machine Learning
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Neuroscience research are usually powered by machine learning these days.
				</p>
			</div>
		</div>
	</Slide>


	<Slide>
		<div
			class="flex flex-wrap justify-evenly items-center mx-auto max-w-22/24 pt-20"
		>
			<div
				class="lg:w-11/24 w-22/24 animate__animated animate__fadeInLeft"
			>
				<Vizzu
					options={[
						(chart) =>
							chart.animate({
								data: data,
								config: {
									channels: {
										x: { set: ["Value 1", "Joy factors"] },
										color: { set: ["Joy factors"] },
										label: { set: ["Value 1"] },
									},
									coordSystem: "polar",
									legend: null,
								},
								style: {
									logo: { width: 0 },
									plot: {
										marker: {
											label: {
												fontSize: 13,
												orientation: "tangential",
												angle: 4.7,
											},
										},
										xAxis: {
											title: { color: "#ffffff00" },
											label: { color: "#ffffff00" },
											ticks: { color: "#ffffff00" },
											interlacing: { color: "#ffffff00" },
										},
										yAxis: {
											color: "#ffffff00",
											title: { color: "#ffffff00" },
											label: { color: "#ffffff00" },
											ticks: { color: "#ffffff00" },
										},
									},
								},
							}),
						(chart) => {
							chart.animate(
								{
									config: {
										channels: {
											x: {
												set: [
													"Value 1",
													"Joy factors",
													"Region",
													"Country code",
												],
											},
											label: { set: null },
										},
									},
								},
								"500ms"
							);
							chart.animate({
								config: {
									channels: {
										x: {
											set: [
												"Value 1",
												"Joy factors",
												"Region",
												"Country code",
											],
										},
										y: {
											set: ["Value 3"], /* Setting the radius of the empty circlein the centre. */
											range: { min: "-60%" },
										},
									},
								},
								style: {
									plot: {
										marker: {
											borderWidth: 0,
											borderOpacity: 1,
										},
									},
								},
							});
						},
						(chart) =>
							chart.animate({
								config: {
									channels: {
										x: {
											set: [
												"Joy factors",
												"Region",
												"Country code",
												"Value 1",
											],
										},
										color: { set: ["Joy factors"] },
									},
									coordSystem: "cartesian",
									legend: null,
								},
							}),
						(chart) =>
							chart.animate({
								config: {
									channels: {
										x: {
											set: ["Joy factors", "Value 1"],
										},
										color: { set: ["Joy factors"] },
										label: { set: ["Value 1"] },
									},
									coordSystem: "cartesian",
									legend: null,
								},
							}),
					]}
				/>
			</div>
			<div class="lg:w-11/24 w-22/24 animate__animated animate__fadeInUp">
				<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Visualization
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					What happens when the brain sees an image
				</h1>
				<p
					class="font-sans font-light text-xl text-gray-500 mt-8 leading-relaxed"
				>
					Interpretation of the visualization here...
				</p>

			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
		<p
					class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
				>
					Conclusions
				</p>
				<h1
					class="font-sans font-black text-neutral-900 text-5xl text-left mt-8 tracking-tighter"
				>
					What can we learn from these visualizations?
				</h1>
			<div
				class="flex md:flex-nowrap flex-wrap md:w-7/10 w-9/10 h-1/3 items-center mr-5 mb-5 border-b-1 border-gray-400 pb-10 animate__animated animate__slideInRight animate__slow"
			>
				<img src="12.svg" alt="figure-1" class="w-70 mx-auto" />
				<div class="flex flex-col">
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						knowledge 1
					</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						some details
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
					knowledge 2
				</h2>
					<p
						class="font-sans font-normal text-lg text-gray-500 mt-8 leading-relaxed"
					>
						some details 2
					</p>
				</div>
				<img src="14.svg" alt="figure-1" class="w-70 mx-auto" />
			</div>
			<div
				class="flex h-1/3 md:flex-nowrap flex-wrap md:w-7/10 w-9/10 items-center mr-5 mb-5 pb-10 animate__animated animate__slideInRight animate__slow"
			>
				<img src="16.svg" alt="figure-1" class="w-70 mx-auto" />
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
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				Interactions
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
			>
				Try it out yourself.
			</h1>
			<p
				class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-6 leading-relaxed"
			>
				instructions here: click to reveal viz.
			</p>
			<div
				class="flex flex-wrap max-h-full max-w-full justify-evenly mx-6"
			>
				<!-- bg-gray-100 -->
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-1:animate__pulse start-1:bg-gray-100"
				>
					<div class="i-openmoji-shooting-star text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						image 1.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						image 2.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-2:animate__pulse start-2:bg-gray-100"
				>
					<div class="i-openmoji-test-tube text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						image 3.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						image 4.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-3:animate__pulse start-3:bg-gray-100"
				>
					<div class="i-openmoji-ringed-planet text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						image 5.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						image 6.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-4:animate__pulse start-4:bg-gray-100"
				>
					<div class="i-openmoji-violin text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						image 7.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						image 8.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-5:animate__pulse start-5:bg-gray-100"
				>
					<div class="i-openmoji-radioactive text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						image 9.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						image 10.
					</p>
				</div>
				<div
					class="xl:w-11/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg shadow-md animate__animated start-6:animate__pulse start-6:bg-gray-100"
				>
					<div class="i-openmoji-shower text-5xl" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						image 11.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						image 12.
					</p>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
			<p
				class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
			>
				Resources
			</p>
			<h1
				class="font-sans font-black text-neutral-900 text-left text-6xl tracking-tighter mt-4 mb-8 leading-none"
			>
				To learn more.
			</h1>
			<p
				class="font-sans font-normal text-lg text-gray-500 max-w-5/6 my-8 leading-relaxed"
			>
				some resources here
			</p>
			<div
				class="flex flex-wrap max-h-full max-w-full justify-evenly mx-6"
			>
				<div
					class="flex-auto xl:w-10/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg"
				>
					<img src="12.svg" alt="figure-1" class="w-5/6" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						resource 1.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						resource 2.
					</p>
				</div>
				<div
					class="flex-auto xl:w-10/36 md:w-8/18 border border-gray-200 p-6 m-4 ml-0 rounded-lg"
				>
					<img src="14.svg" alt="figure-2" class="w-5/6" />
					<h2
						class="font-sans font-semibold text-neutral-900 mt-6 text-2xl tracking-tighter leading-none"
					>
						resource 3.
					</h2>
					<p
						class="font-sans font-light text-gray-500 mt-4 leading-relaxed"
					>
						resource 4.
					</p>
				</div>
			</div>
		</div>
	</Slide>

	<Slide>
		<div class="flex flex-col min-h-screen pt-15 ml-8">
			<p
			class="font-sans font-bold text-sm text-blue-600 tracking-widest uppercase"
		>
			Resources
		</p>
			<h1
				class="font-sans font-black text-neutral-900 text-center text-7xl tracking-tighter max-w-5/6 mx-auto my-8 leading-none"
			>
				References
			</h1>
			<p
				class="font-sans font-normal text-center text-lg text-gray-500 max-w-4/6 mx-auto mt-8 leading-relaxed"
			>
				references used in this visualization
			</p>
			<div class="flex flex-wrap justify-center mt-8">
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 1
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 2
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 3
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 4
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 5
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 6
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-check-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 7
					</h2>
				</div>
				<div
					class="flex w-5/6 md:w-1/3 items-center bg-gray-100 text-3xl rounded-lg space-x-3 space-y-0 p-5 m-3"
				>
					<div class="i-openmoji-cross-mark shrink-0 text-4xl" />
					<h2
						class="font-sans font-normal text-neutral-900 mt-6 text-2xl"
					>
						ref 8
					</h2>
				</div>
			</div>
		</div>
	</Slide>

</Deck>
