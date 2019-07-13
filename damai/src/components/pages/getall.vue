<template>
  <div>
    <ul class="infinite-list ulbox">
      <li v-for="item in goodsList" :key="item.id">
        <i>
          <img :src="item.icon" alt />
        </i>
        <div class="mains">
          <h2>{{item.name}}</h2>
          <span class="sp01">{{item.venueName}}</span>
          <span class="sp02">{{item.price}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  async created() {
    //   获取传入id

    // 发起ajax请求，获取商品信息
    let { data } = await this.$axios.get(
      "http://localhost:9001/admin/api/rest/categories"
    );

    this.goodsList = data;

    // //  隐藏菜单
  }
};
</script>

<style  scoped>
.ulbox li {
  padding-left: 0.490741rem;
  padding-top: 0.490741rem;
  padding-bottom: 0.490741rem;
  margin-right: 0.490741rem;
  display: flex;
  position: relative;
}
i > img {
  width: 2.398148rem;
  height: 3.194444rem;
}
.mains {
  margin-left: 0.342593rem;
  width: 9.026667rem !important;
}
.mains h2 {
  font-size: 0.425926rem;
  color: black;
  font-weight: 600;
  line-height: 0.527778rem;
  width: 100%;
}
.mains .sp01 {
  font-size: 0.296296rem;
  color: #aaaaaa;
  line-height: 0.833333rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sp02 {
  font-size: 0.268519rem;
  color: #d72563;
  line-height: 0.453704rem;
  position: absolute;
  top: 117px;
  left: 124px;
}
</style>