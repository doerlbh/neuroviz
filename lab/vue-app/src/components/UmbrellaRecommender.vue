<template>
  <div
    class="card"
    :class="{
      shouldCarry: recommendation === true,
    }"
  >
    {{ recommendationText }}
  </div>
</template>

<script>
export default {
  name: "UmbrellaRecommender",
  props: {
    recommendation: Boolean,
  },
  computed: {
    recommendationText() {
      return this.recommendation === true
        ? "☂️ Better carry an umbrella ☂️"
        : "No guarantees, but you should be OK without an umbrella";
    },
  },
};
</script>

<style>
.card {
  border: 1px solid black;
  border-radius: 4px;
  opacity: 0.8;
  background-color: lightgray;
  width: 300px;
  margin: 10px;
  padding: 50px;
  font-weight: bold;
  font-size: 24px;
}
.shouldCarry {
  background-color: lightblue;
}
</style>
