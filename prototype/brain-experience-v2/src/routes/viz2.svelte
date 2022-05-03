<script>
  // import BarChart from "./BarChart.svelte";
  import { scaleOrdinal, scaleBand } from "d3-scale";

  import ForceLayout from "./_components/CirclePackForce.svelte";

  import data from "./_data/neurons.json";

  const xKey = "time";
  const rKey = "value";
  const zKey = "time";

  let groupBy = "true";

  const seriesNameSet = new Set();
  const seriesColors = ["#f0c", "#0cf", "#fc0"];

  data.forEach((d) => {
    seriesNameSet.add(d[zKey]);
  });

  /* --------------------------------------------
   * Convert this to an array so we can use it in our scales
   */
  const seriesNames = [...seriesNameSet];

  let manyBodyStrength = 3;
  let xStrength = 0.1;
</script>

<div class="">
  <!-- <BarChart {data} height={400} width={500} /> -->
</div>
