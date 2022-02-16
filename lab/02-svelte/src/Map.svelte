<script>

    // based on this example: https://observablehq.com/@mbostock/u-s-state-map

    import us from './states-albers-10m.json'
    import { feature } from 'topojson-client'
    import { geoPath, geoIdentity } from 'd3'

    const states = feature(us, us.objects.states).features
    const path = geoPath(geoIdentity().scale(0.6))

    export let callback;
    export let list = [];
    let visibleState = '';

</script>

<svg height={400} width={600}>
    <g class="paths">
        {#each states as state}
            <path
                class:selected={list.includes(state.properties.name)}
                on:click={() => callback(state.properties.name)}
                on:mouseenter={() => visibleState = state.properties.name}
                on:mouseleave={() => visibleState = ''}
                d={path(state)}
            />
        {/each}
    </g>
    <g class="labels">
        {#each states as state}
            <text
                class:visible={visibleState === state.properties.name}
                x={path.centroid(state)[0]}
                y={path.centroid(state)[1]}
            >
                {state.properties.name}
            </text>
        {/each}
    </g>
</svg>

<style>
path {
    fill: white;
    stroke: black;
    stroke-width: 2px;
    cursor: pointer;
}
path.selected {
    fill: lightblue;
}
text {
    opacity: 0;
    pointer-events: none;
    text-anchor: middle;
    transition: opacity 0.5s;
}
text.visible {
    opacity: 1;
}
</style>
