<template>
  <el-card
    shadow="always"
    class="card"
    :body-style="{ backgroundColor: recommendation ? 'green' : 'red' }"
  >
    {{ recommendationText }}
  </el-card>
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
  color: white;
}
</style>
