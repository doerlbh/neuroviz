<!-- <script>
  import { onMount, onDestroy } from "svelte";
  import Forecast from "./Forecast.svelte";
  import { browser } from "$app/env";

  const API_URL = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";
  const MAX_SVG_WIDTH = 600;

  let forecast = {
    properties: {
      periods: [],
    },
  };

  let width = MAX_SVG_WIDTH;

  const onResize = () => {
    width = Math.min(MAX_SVG_WIDTH, window.innerWidth);
  };

  onMount(async () => {
    const res = await fetch(API_URL);
    forecast = await res.json();

    window.addEventListener("resize", onResize);
  });

  if (browser) {
    onDestroy(() => window.removeEventListener("resize", onResize));
  }
</script>

<main>
  <h4>This week's temperature chart</h4>
  <div class="app-body">
    <Forecast periods={forecast.properties.periods} />
    <BarChart data={forecast.properties.periods} height={400} {width} />
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
  }

  .app-body {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
  }
  @media (max-width: 1200px) {
    .app-body {
      display: grid;
      grid-template: 1fr 1fr / 1fr;
    }
  }
</style> -->
