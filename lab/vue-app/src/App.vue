<template>
  <div>
    <router-link class="margin-x" to="/">Home</router-link>
    <router-link class="margin-x" to="/methodology">Methodology</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.margin-x {
  margin: 0px 5px;
}
</style>
