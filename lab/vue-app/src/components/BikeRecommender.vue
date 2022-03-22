<template>
  <div
    class="card"
    :class="{
      shouldRide: recommendation === true,
      shouldNotRide: recommendation === false,
    }"
  >
    {{ recommendationText }}
  </div>
</template>

<script>
export default {
  name: "BikeRecommender",
  props: {
    recommendation: Boolean,
  },
  computed: {
    recommendationText() {
      return this.recommendation === true
        ? "🚲 All clear to ride! 🚲"
        : this.recommendation === false
        ? "🚇 Better stick to the subway 🚇"
        : "🤷 TBD 🤷";
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
  color: white;
  font-weight: bold;
  font-size: 24px;
}
.shouldRide {
  background-color: green;
}
.shouldNotRide {
  background-color: red;
}
</style>
