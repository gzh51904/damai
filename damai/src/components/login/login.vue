<template>
  <div class="login">
    <div class="login-logo">
      <img src="../../assets/login-logo.png" alt="">
    </div>
    <!-- <form class="mui-input-group">
        <div class="login-tel">
          <div class="login-tel-cap">
            <div class="login-cap" @click="changecap">
                {{cap}}
                <i class="mui-icon mui-icon-arrowdown login-tel-icon"></i>              
            </div>
          </div>
          <div class="mui-input-row login-tel-main">
            <input type="tel" 
            class="mui-input-clear login-tel" 
            placeholder="请输入手机号"
            v-model="logintel">
          </div>
        </div>
        <div class="mui-input-row login-test-main">
            <input type="password" 
            class="mui-input-password login-test" 
            placeholder="请输入验证码"
            maxlength="6"
            autocomplete="off">
        </div>
        <div>
            <a href="#" @click="getverify" ref="getverify">获取验证码</a>
        </div>
        <div @loginchangecap="loginchangecap">
            <div>
                <span @click="chose('no')">取消</span>
                <span @click="chose('yes')">确定</span>
            </div>
            <ul>
                <li v-for="(item,index) in adress" :key="index">{{item.title}}</li>
            </ul>
        </div>
      </form> -->
    <div class="login-content">
      <div class="login-main">
        <div class="login-title">短信登录</div>
        <form id="login-form" class="login-form">
          <div class="login-mobile">
            <div class="login-cap">             
              +86
              <i class="login-cap-icon"></i>
            </div>
            <div class="login-input">
              <input class="login-text" tabindex="1" type="text" placeholder="请输入手机号">
            </div>
          </div>
          <div class="login-mobile">
            <div class="login-input">
              <input class="login-text" tabindex="2" type="tel" placeholder="请输入验证码" maxlength="6" autocomplete = "off">
            </div>
            <div class="login-verify">
              <a href="" class="login-gettest">获取验证码</a>
            </div>
          </div>
          <div class="login-btn">
            <button class="login-submit" type="submit" tabindex="3">登录</button>
          </div>
          <div class="login-links">
            <a href="" class="login-links-goto">账号密码登录</a>
            <a href="" class="login-links-reg" @click.prevent="goto('/register')">新用户注册</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adress: [
        { title: "中国大陆", cap: "+86" },
        { title: "中国香港", cap: "+852" },
        { title: "中国澳门", cap: "+853" },
        { title: "中国台湾", cap: "+886" }
      ],
      cap: "+86",
      logintel: "",
      loginest: ""
    };
  },
  methods: {
    changecap() {},
    chose(val) {
      if (val == "yes") {
        //   this.$emit()
      }
    },
    goto(val){
      this.$router.push(val);
    },
    getverify() {
      if (!new RegExp("^1[3-9]d{9}&").test(this.logintel)) {
        // 请输入正确的手机号
      }
      function getRandomVal() {
        let arr = [],
          arr1 = [],
          randomStr = "";
        for (let i = 48; i <= 57; i++) {
          let j = String.fromCharCode(i);
          arr.push(j);
        }
        for (let i = 97; i <= 122; i++) {
          let j = String.fromCharCode(i);
          arr.push(j);
        }
        let randomVal;
        for (let i = 0; i < 6; i++) {
          randomVal = parseInt(Math.random() * 36);
          arr1.push(arr[randomVal]);
        }
        randomStr = arr1.join("");
        return randomStr;
      }
      let randomStrGet = getRandomVal();
      let randomStrSend = encodeURIComponent(randomStrSend);
      // axios.get("http://v.juhe.cn/sms/send", {
      //   params: {
      //     mobile: this.logintel,
      //     tpl_id: 171855,
      //     tpl_val:randomStrSend,
      //     key:"83e8680d7ea9cf3f3c8608610407cc07",
      //   }
      // });
      // let endTime = Date.now() + 60*1000;
      // let countDown = setInterval(()=>{
      //     // this.$refs.getverify.innerText =
      //     let currentTime = Date.now();
      //     if(currentTime >= endTime){

      //     }
      // },1000)
    },
    loginchangecap() {}
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.login-logo {
  height: 3.26667rem;
  text-align: center;
}
.login-logo img {
  width: 2.66667rem;
  height: 1.21333rem;
  margin-top: 1.02667rem;
  border: 0;
}
.login-content{
  position: absolute;
  top: 3.26667rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.login-main{
  width: 100%;
  background: #fff;
  font: 400 .16rem arial;
  color: #666;
  margin: 0 auto;
  padding: 0 .266667rem .266667rem;
  margin-bottom: .266667rem;
}
.login-title{
  width: 100%;
  font-size: .213333rem;
  font-weight: 700;
  border-bottom: .013333rem solid #ccc;
  padding-bottom: .066667rem;
  margin: 0 auto .133333rem;
  display: none;
}
.login-form{
  width: 100%;
  margin-top: .026667rem;
  margin: 0;
  padding: 0;
}
.login-mobile{
  position: relative;
  margin-bottom: .133333rem;
  font-size: .186667rem;
}
.login-cap{
  width: .933333rem;
  padding-left: .133333rem;
  height: .533333rem;
  line-height: .533333rem;
  border-right: .013333rem solid #ccc;
  position: relative;
  cursor: pointer;
  border-color: #e7e7e7;
  border-bottom: 0;
}
.login-cap-icon{
  margin-left: .04rem;
  font-size: .16rem;
}
.login-input{
  position: relative;
  padding: 0;
}
.login-text{
  border-bottom: none;
  border-color: #e7e7e7;
  padding-left: 1.066667rem;
  height: .56rem;
  outline: none;
  font-size: .186667rem;
}

.login-verify{
  border-radius: .266667rem;
  padding: 0 .133333rem;
  margin-bottom: .106667rem;
  background: #fff1f6;
  line-height: .333333rem;
  position: absolute;
  right: .133333rem;
  bottom: 0;;
}
.login-gettest{
  color: #fc347b;
  font-size: .16rem;
  float: left;
  margin: 0;
}
.login-btn{
    width: 100%;
    margin-top: .266667rem;
}
.login-submit{
    background-color: #ff1268;
    background-image: linear-gradient(90deg,#ff4aae,#ff1268);
    border-color: #ff1268;
    font-size: .24rem;
    margin-top: 0;
    border: .013333rem solid #ff9000;
    border-radius: .04rem;
    font-size: .266667rem;
    height: .56rem;
    line-height: .56rem;
    outline: none;
    color: #fff;
    width: 100%;
    cursor: pointer;
}
.login-links{
    margin: .106667rem 0;
    text-align: right;
    zoom: 1;
}
.login-links-goto{
    width: 50%;
    text-align: left;
}
.login-links-reg{
    width: 50%;
    text-align: right;
}
.login-links a{
    font-size: .16rem;
    float: left;
    margin: 0;
    color: #999;
}
/* .login-tel {
  position: relative;
  margin-bottom: 0.133333rem;
  font-size: 0.186667rem;
}
.login-tel-cap {
  left: 0;
  z-index: 9;
  position: absolute;
}
.login-tel .login-tel-icon {
  margin-left: 0.04rem;
  font-size: 0.16rem;
}
.login-cap {
  border-bottom: 0;
  border-color: #e7e7e7;
  width: 0.933333rem;
  padding-left: 0.133333rem;
  height: 0.533333rem;
  line-height: 0.533333rem;
  border-right: 0.013333rem solid #ccc;
  position: relative;
  cursor: pointer;
}
.login-tel-main {
  position: relative;
  padding: 0;
}
.login-tel-main .login-tel {
  padding-left: 1.066667rem;
  height: 0.56rem;
  outline: none;
  font-size: 0.186667rem;
}
.login-test-main {
  border-color: #e7e7e7;
}
.login-test-main .login-test {
  height: 0.56rem;
  outline: none;
  font-size: 0.186667rem;
  padding-left: 0.133333rem;
} */
</style>
