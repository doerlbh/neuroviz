<script>
    import * as d3 from 'd3';
    import { afterUpdate } from 'svelte';
    import Slider from '@smui/slider';
    import '../node_modules/@smui/slider/bare.css';

	export let data = [];
    export let height;
    export let width;
    let days = 7;
    const margin = 20;
    const DEFAULT_FORECAST = "Hover for Forecast";
    let shortForecast = DEFAULT_FORECAST;

    $: yScale = d3.scaleLinear()
        .domain([Math.min(
            0,
            d3.min(data, d => d.temperature)
        ), d3.max(data, d => d.temperature)])
        .range([0, height - margin])
    $: xScale = d3.scaleBand()
        .padding(0.1)
        .domain(data.map(d => d.name))
        .range([0, width])

    $: rectWidth = xScale.bandwidth()

    afterUpdate(() => {
        d3.select('.bars')
            .selectAll('g.bar')
            .data((data || []).slice(0, days))
            .join(
                (enter) => {
                    const bar = enter.append('g').attr('class', 'bar');
                    const rect = bar
                        .append('rect')
                        .attr('width', rectWidth)
                        .attr('height', 0)
                        .attr('y', height)
                        .attr('x', (d) => xScale(d.name))
                        .attr('fill', 'lightblue');
                    rect
                        .transition()
                        .delay((_, i) => i * 50)
                        .attr('y', (d) => height - yScale(d.temperature))
                        .attr('height', (d) => yScale(d.temperature));

                    const nameText = bar
                        .append('text')
                        .attr('class', 'name-text')
                        .attr('y', height + rectWidth)
                        .attr('x', (d) => xScale(d.name))
                        .attr(
                        'transform',
                        (d) => `rotate(-90 ${xScale(d.name)} ${height})`
                        )
                        .attr('opacity', 0)
                        .text((d) => d.name);
                    nameText.transition().attr('opacity', 1);

                    const tempText = bar
                        .append('text')
                        .attr('class', 'temp-text')
                        .attr('text-anchor', 'middle')
                        .attr('x', (d) => xScale(d.name) + rectWidth / 2)
                        .attr('y', height)
                        .text((d) => d.temperature);
                    tempText
                        .transition()
                        .delay((_, i) => 100 + i * 50)
                        .attr('y', (d) => height - yScale(d.temperature) - 5);

                    return bar;
                },
                (update) => {
                    update
                        .select('rect')
                        .attr('fill', 'lightgreen')
                        .attr('width', rectWidth)
                        .attr('x', (d) => xScale(d.name));
                    update
                        .select('.name-text')
                        .attr('y', height + rectWidth)
                        .attr('x', (d) => xScale(d.name))
                        .attr(
                            'transform',
                            (d) => `rotate(-90 ${xScale(d.name)} ${height})`
                        );
                    update
                        .select('.temp-text')
                        .attr('x', (d) => xScale(d.name) + rectWidth / 2);
                    return update;
                },
                (exit) => {
                    exit
                        .select('rect')
                        .transition()
                        .attr('height', 0)
                        .attr('y', height)
                        .on('end', () => {
                        exit.remove();
                        });
                    exit.select('text').transition().attr('opacity', 0);
                }
            )
            .on('mouseenter', (event, d) => {
                shortForecast = d.shortForecast;
            })
            .on('mouseleave', () => {
                shortForecast = DEFAULT_FORECAST;
            });
    })
</script>

<main>
    <div>
        <label for="days-slider">Number of forecasts to show: {days}</label>
        <Slider
            bind:value={days}
            min={3}
            max={14}
            step={1}
            discrete
            tickMarks
        />
    </div>
    <div>{shortForecast}</div>
    <svg height={height} width={width}>
        <g class='bars' />
    </svg>
</main>

<style>
input[type="range"]::-webkit-slider-thumb {
  cursor: ew-resize; /* grab */
}
</style>
