<script>
  import NameCard from "../components/nameCard.svelte";
  // import Vizzu from "$lib/Vizzu.svelte";
  import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@~0.4.0/dist/vizzu.min.js';
	import { data } from "./_data/test_vizzu.js";

  let chart = new Vizzu('myVizzu')

chart.initializing.then(
  chart => chart.animate({data: data,
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
							})
)


</script>

<svelte:head>
  <title>Brain Experience | Visualization</title>
</svelte:head>

<h1 class="text-2xl md:text-4xl text-center my-8">
  <span class="font-semibold break-all block md:inline">Visualization</span>
</h1>
<!-- <p>- people 1</p>
<p>- people 2</p> -->

<div id="myVizzu" style="width:800px; height:480px;"></div>

<!-- <Vizzu
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
				/> -->


<p class="text-base md:text-lg">Here is the visualization.</p>
