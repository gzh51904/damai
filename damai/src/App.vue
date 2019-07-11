<template>
  <div id="app">
    <hometop></hometop>
    <banner></banner>
    <homelist></homelist>
    <joinnow></joinnow>
    <hof></hof>
    <show></show>
    <more></more>
  </div>
</template>
<script>
import hometop from "./components/hometop.vue";
import homelist from "./components/homeList.vue";
import banner from "./components/banner.vue";
import joinnow from "./components/joinNow.vue";
import hof from "./components/hof.vue";
import show from "./components/show.vue";
import more from "./components/more.vue";

export default {
  components: {
    banner,
    homelist,
    joinnow,
    hof,
    show,
    more,
    hometop,
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
