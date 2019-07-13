<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="navigation" >
    <el-tab-pane label="详情" name="first">详情<information></information></el-tab-pane>
    <el-tab-pane label="须知" name="second">须知<attention></attention></el-tab-pane>
    <el-tab-pane label="推荐" name="third">推荐<recommend></recommend></el-tab-pane>
    
  </el-tabs>
</template>
<script>
import information from './information.vue';
import attention from './attention.vue';
import recommend from './recommend.vue';
//基于babel-plugin-component的按需加载样式会自动加载
// import {Tabs}from 'element-ui';

  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
        information,
        attention,
        recommend,
        }
  };
</script>
<style>


</style>