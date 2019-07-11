<template>
    <div>
        <a href="./login.vue">登录/注册</a>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="(item,i) in top" :key="i">
                <span class="{{item.icon}}"></span>
                <a class="mui-navigate-right">{{item.title}}</a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell" v-for="(item,i) in middle" :key="i">
                <span class="{{item.icon}}"></span>
                <a class="mui-navigate-right">{{item.title}}</a>
            </li>
        </ul>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mine-last" v-for="(item,i) in middle" :key="i">
                <span class="{{item.icon}}"></span>
                <a :class="{'mui-navigate-right':i != item.length -1,'mine-tel':i == item.length}">{{item.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      top: [
        {
          icon: "mui-icon mui-icon-bars",
          title: "我的订单"
        },
        {
          icon: "mui-icon mui-icon-star",
          title: "优惠券"
        },
        {
          icon: "mui-icon mui-icon-paperclip",
          title: "我的票"
        }
      ],
      middle: [
        {
          icon: "mui-icon mui-icon-spinner-cycle mui-spin",
          title: "我的关注"
        }
      ],
        bottom:[{
            icon:"mui-icon mui-icon-location",
            title:"收货地址",
        },
        {
            icon:"mui-icon mui-icon-contact",
            title:"常用购票人",
        },
        {
            icon:"mui-icon mui-icon-flag",
            title:"实名认证",
        },
        {
            icon:"mui-icon mui-icon-compose",
            title:"意见反馈",
        },
        {
            icon:"mui-icon mui-icon-help",
            title:"客服电话",
        }]
    };
  }
};
</script>
    
<style>
    .mine-last{
        position: relative;
    }
    .mine-tel::after{
        content: "1010-3721";
        position: absolute;
        right: 0;
        font-size: .32rem;
        color: #999;
    }
</style>
