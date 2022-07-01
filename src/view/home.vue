<script setup>
import tabbar from "../components/tabar.vue";
function show(e) {
  console.log(e);
}
</script>
<template>
  <div id="home">
    <tabbar @show="show" />
  </div>
</template>
<style lang="scss" scoped></style>
