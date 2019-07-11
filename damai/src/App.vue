<template>
  <div id="app">
    <homelist></homelist>
    <banner></banner>
    <joinnow></joinnow>
    <hof></hof>
    <show></show>
  </div>
</template>
<script>
import banner from "./components/homeList.vue";
import homelist from "./components/banner.vue";
import joinnow from "./components/joinNow.vue";
import hof from "./components/hof.vue";
import show from "./components/show.vue";

export default {
  components: {
    banner,
    homelist,
    joinnow,
    hof,
    show,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
