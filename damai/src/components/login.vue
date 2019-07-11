<template>
    <div>
      <div class="login-logo">
        <img src="../assets/login-logo.png" alt="">
      </div>
      <form class="mui-input-group">
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
        </form>
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
.login-tel {
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
}
</style>
