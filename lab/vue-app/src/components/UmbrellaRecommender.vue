<template>
  <el-card
    class="card"
    shadow="always"
    :body-style="{
      backgroundColor: recommendation ? 'lightblue' : 'lightgray',
    }"
  >
    {{ recommendationText }}
  </el-card>
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
        : "🤞 No umbrella needed 🤞";
    },
  },
};
</script>

<style></style>
