<script>
  // import { fade } from 'svelte/transition';
	import { data } from "../routes/_data/allen_tiny_tiny_tiny.js";
  export let selected_one;

import Slide from "$lib/Slide.svelte";
import Deck from "$lib/Deck.svelte";
import Vizzu from "$lib/Vizzu.svelte";

</script>



<!-- <a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/neurodata/${neurodata.dataset_id}`} transition:fade> -->
<!-- <button
  class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
>
  <img class="h-40 w-40" src={neurodata.image} alt={neurodata.name} />
  <h2 class="text-xl">{neurodata.name}</h2>
  <h3 class="text-l">Labels: {neurodata.first_label} | {neurodata.second_label}</h3>
</button> -->

    <Vizzu
      options={[
        (chart) =>
							{chart.animate({
								data:data,
    config: {
        channels: {
            y: { set: ['signal_val'] },
            x: { set: ['brain_region','stim_id'] },
			color: { set: ['brain_region'] },
        },
		title: 'brain activities in a glance',
		coordSystem: "polar",
		geometry: 'circle'
    },						
});
// chart => {
// chart.animate({
//   data:data,
// config: {
// channels: {
//         x: { set: ['time_point'] },
//         y: { set: ['brain_region'], range: { max: '120%' } },
//   color: { set: ['signal_val']},
//   size: { set: ['signal_val']  },
//     },
// geometry: 'circle',
// title: 'spatio-temporal grid of visual perception in brain',
// }
// });
// chart.animate({
//     data: {
//       data,
//         filter: record => record["stim_id"] == {selected_one}
//     }
// });
// chart.feature('tooltip',true);
},

      ]}
    />
