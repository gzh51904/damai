<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="background:white;"  class="navigation" >
    <el-tab-pane label="详情"  name="first"><information></information></el-tab-pane>
    <el-tab-pane label="须知"  name="second"><attention></attention></el-tab-pane>
    <el-tab-pane label="推荐"  name="third"><recommend></recommend></el-tab-pane>  
  </el-tabs>
  
</template>
<script>
import information from './information.vue';
import attention from './attention.vue';
import recommend from './recommend.vue';
 

  export default {
    data() {
      return {
    
        activeName: 'second',
       
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
        },
  };
</script>
<style scoped>

.navigation{
  /* display:flex !important; */
  /* flex-direction:column !important; */
  /* justify-content:space-around !important; */

  /* display:flex !important; */
}
.el-tab-pane{
  /* display:inline-block !important; */
/* margin-top:3.4rem; */


}
</style>