<template>
  <div>
    <div class="slider">
      <label for="days-slider">Number of forecasts to show:</label>
      <el-slider :min="3" :max="14" v-model="days" show-input show-stops />
    </div>
    <div>{{ shortForecast }}</div>
    <svg :height="height" :width="width">
      <g class="bars" />
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

const margin = 20;

const DEFAULT_FORECAST = "Hover for Forecast";

export default {
  name: "BarChart",
  data() {
    return {
      days: 7,
      shortForecast: DEFAULT_FORECAST,
    };
  },
  props: {
    data: Array,
    height: Number,
    width: Number,
  },
  computed: {
    xScale() {
      return d3
        .scaleBand()
        .padding(0.1)
        .domain(this.data.map((d) => d.name))
        .range([0, this.width]);
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([
          Math.min(
            0,
            d3.min(this.data, (d) => d.temperature)
          ),
          d3.max(this.data, (d) => d.temperature),
        ])
        .range([0, this.height - margin]);
    },
    rectWidth() {
      return this.xScale.bandwidth();
    },
  },
  updated() {
    const that = this;
    d3.select(".bars")
      .selectAll("g.bar")
      .data((this.data || []).slice(0, this.days))
      .join(
        (enter) => {
          const bar = enter.append("g").attr("class", "bar");
          const rect = bar
            .append("rect")
            .attr("width", this.rectWidth)
            .attr("height", 0)
            .attr("y", this.height)
            .attr("x", (d) => this.xScale(d.name))
            .attr("fill", "lightblue");
          rect
            .transition()
            .delay((_, i) => i * 50)
            .attr("y", (d) => this.height - this.yScale(d.temperature))
            .attr("height", (d) => this.yScale(d.temperature));

          const nameText = bar
            .append("text")
            .attr("class", "name-text")
            .attr("y", this.height + this.rectWidth)
            .attr("x", (d) => this.xScale(d.name))
            .attr(
              "transform",
              (d) => `rotate(-90 ${this.xScale(d.name)} ${this.height})`
            )
            .attr("opacity", 0)
            .text((d) => d.name);
          nameText.transition().attr("opacity", 1);

          const tempText = bar
            .append("text")
            .attr("class", "temp-text")
            .attr("text-anchor", "middle")
            .attr("x", (d) => this.xScale(d.name) + this.rectWidth / 2)
            .attr("y", this.height)
            .text((d) => d.temperature);
          tempText
            .transition()
            .delay((_, i) => 100 + i * 50)
            .attr("y", (d) => this.height - this.yScale(d.temperature) - 5);

          return bar;
        },
        (update) => {
          update
            .select("rect")
            .attr("fill", "lightgreen")
            .attr("width", this.rectWidth)
            .attr("x", (d) => this.xScale(d.name));
          update
            .select(".name-text")
            .attr("y", this.height + this.rectWidth)
            .attr("x", (d) => this.xScale(d.name))
            .attr(
              "transform",
              (d) => `rotate(-90 ${this.xScale(d.name)} ${this.height})`
            );
          update
            .select(".temp-text")
            .attr("x", (d) => this.xScale(d.name) + this.rectWidth / 2);
          return update;
        },
        (exit) => {
          exit
            .select("rect")
            .transition()
            .attr("height", 0)
            .attr("y", this.height)
            .on("end", () => {
              exit.remove();
            });
          exit.select("text").transition().attr("opacity", 0);
        }
      )
      .on("mouseenter", (event, d) => {
        that.shortForecast = d.shortForecast;
      })
      .on("mouseleave", () => {
        that.shortForecast = DEFAULT_FORECAST;
      });
  },
};
</script>

<style>
.slider {
  max-width: 50%;
  margin: 0 auto;
}
input[type="range"]::-webkit-slider-thumb {
  cursor: ew-resize; /* grab */
}
</style>
