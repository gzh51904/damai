<template>
  <div>
    <ul class="getcityandtime">
      <li @click="showthecity('city')">
        广州
        <span></span>
      </li>
      <li @click="showthecity('time')" class="timepick">
        时间
        <span></span>
      </li>
      <li @click="showthecity('best')">
        推荐排序
        <span></span>
      </li>
      <li @click="showthecity('lanch')">
        最近
        <span></span>
      </li>
    </ul>
    <div class="showallcity">
      <getcity v-if="cityactive"></getcity>

      <div class="tofixed">
        <gettime v-if="timeactive"></gettime>
      </div>
      <getbest v-if="bestactive"></getbest>

      <getdingwei v-if="lanchactive"></getdingwei>
    </div>
  </div>
</template>

<script>
import getcity from "./getcity.vue";
import getdingwei from "./getDingWei.vue";
import getbest from "./getBest.vue";
import gettime from "./gittime.vue";
export default {
  data() {
    return {
      cityactive: false,
      bestactive: false,
      lanchactive: false,
      timeactive: false
    };
  },
  methods: {
    showthecity(name) {
      document.documentElement.scrollTop = 0;
      //城市切换
      if (name == "city") {
        this.cityactive = !this.cityactive;

        console.log(document.documentElement.scrollTop);

        if (this.bestactive == true) {
          this.bestactive = !this.bestactive;
        }
        if (this.lanchactive == true) {
          this.lanchactive = !this.lanchactive;
        }
        if (this.timeactive == true) {
          this.timeactive = !this.timeactive;
        }
      }
      // 推荐排序切换
      else if (name == "best") {
        this.bestactive = !this.bestactive;

        if (this.cityactive == true) {
          this.cityactive = !this.cityactive;
        }
        if (this.lanchactive == true) {
          this.lanchactive = !this.lanchactive;
        }
        if (this.timeactive == true) {
          this.timeactive = !this.timeactive;
        }
      }
      //定位切换
      else if (name == "lanch") {
        this.lanchactive = !this.lanchactive;

        if (this.bestactive == true) {
          this.bestactive = !this.bestactive;
        }
        if (this.cityactive == true) {
          this.cityactive = !this.cityactive;
        }

        if (this.timeactive == true) {
          this.timeactive = !this.timeactive;
        }
      }

      // 时间切换
      else if (name == "time") {
        this.timeactive = !this.timeactive;

        if (this.bestactive == true) {
          this.bestactive = !this.bestactive;
        }
        if (this.cityactive == true) {
          this.cityactive = !this.cityactive;
        }
        if (this.lanchactive == true) {
          this.lanchactive = !this.lanchactive;
        }
      }
    }
  },
  components: {
    getcity,
    getdingwei,
    getbest,
    gettime
  }
};
</script>

<style scoped>
.tofixed {
  position: fixed;
  width: 100%;
  background-color: #ffffff;
}
.getcityandtime {
  background-color: #d1d1d1;
  display: flex;
  width: 100%;
  height: 1.287037rem;
  align-content: center;
  position: fixed;
  z-index: 9999999999999;
}
.getcityandtime li {
  flex: 1;

  height: 100%;
  font-size: 0.351852rem;
  text-align: center;
  line-height: 1.287037rem;
}
.getcityandtime li span {
  display: inline-block;
  width: 0;
  height: 0;

  border: 0.092593rem solid;
  border-color: black transparent transparent;
}
.showallcity {
  position: relative;
  overflow: auto;
  z-index: 100;
  top: 48px;
  background-color: #ffffff;
}
.timepick {
  /* width: 2.5rem !important;
  height: 2.138889rem !important; */

  display: inline-block;
  position: relative;
}
.popper-class {
  top: 0px;
  left: 0px;
  position: absolute;
  width: 100% !important;
  height: 100% !important;
}
</style>