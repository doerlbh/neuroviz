<!-- <script context="module">
  import { getNeurodataById } from "../../neurostore";
  export async function load(ctx) {
    let id = ctx.params.id;
    const neurodatum = await getNeurodataById(id);
    return { props: { neurodatum } };
  }
</script>

<script>
  export let neurodatum;
  const type = neurodatum.types[0].type.name;
</script>

<svelte:head>
  <title>Neurodata - {neurodatum.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8">{neurodatum.name}</h1>
  <p>
    Type: <strong>{neurodatum.name}</strong> | Sample:
    <strong>{neurodatum.weight}</strong>
    | Dimension: <strong>{neurodatum.height}</strong>
  </p>
  <img class="card-image" src={neurodatum.image} alt={neurodatum.name} />
</div> -->
