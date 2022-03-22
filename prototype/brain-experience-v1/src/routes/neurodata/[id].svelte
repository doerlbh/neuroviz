<script context="module">
    import { getNeurodataById } from "../../neurostore";
    export async function load(ctx) {
        let id = ctx.params.id;
        const neurodatum = await getNeurodataById(id);
        return { props: { neurodatum }}
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

    <h1 class="text-4xl text-center my-8">{neurodatum.dataset_name}</h1>
    <p>Type: <strong>{neurodatum.dataset_type}</strong> | Sample: <strong>{neurodatum.dataset_name}</strong>
        | Dimension: <strong>{neurodatum.datapoints.length}</strong>
    </p>
    <img class="card-image" src={neurodatum.sprites['front_default']} 
    alt={neurodatum.name}
    />
</div>
