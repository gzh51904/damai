<template>
    <div class="reg">
        <div class="reg-show">
            <div class="reg-list">
                <div class="reg-addresschose">
                    <div class="reg-adresscap">国家地区</div>
                    <div class="reg-addressmiddle">{{regcap}}</div>
                    <i class="mui-icon mui-icon-arrowright reg-addressicon"></i>
                </div>
                <div class="login-cap-pick" v-show="choseadress">
                    <div class="login-pick-mask">
                    </div>
                    <div class="login-pick-model">
                        <div class="login-model-head">
                            <span class="login-model-btn">取消</span>
                            <span class="login-model-btn login-model-rbtn">确定</span>
                        </div>
                        <div class="login-model-content">
                            <div class="login-model-bigbox">
                            <ul class="login-model-listbox"> 
                                <li class="login-model-list" v-for="(item,i) in regadress" :key="i">{{item.cap}} {{item.title}}</li>
                            </ul>
                            <div class="login-model-highlight"></div>
                            </div>                        
                        </div>
                    </div>
                </div>
                <div class="reg-tel reg-item">
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="reg-test reg-item">
                    <input type="text" placeholder="请输入验证码">
                    <span class="reg-test-extra">
                        <a href="#">获取验证码</a>
                    </span>
                </div>
            </div>
            <a role="button" class="regbtn" aria-disabled="true">同意协议并注册</a>
            <div class="reg-agreement">
                <span>
                    我已阅读接受
                    <a href="https://sale.damai.cn/contents/4677/13574.html">《大麦网会员服务协议》</a>
                    及
                    <a href="https://sale.damai.cn/contents/4677/13572.html">《隐私专项条款》</a>
                    并同意自动注册成为会员
                </span>
            </div>        
        </div>
        <!-- <div class="reg-hidden">
            <div class="reg-check">
                <div class="reg-check-no" @click="regcheck('no')">取消</div>
                <div class="reg-check-yes" @click="regcheck('yes')">确定</div>
            </div>
            <ul>
                <li v-for="(item,index) in adress" :key="index">{{item.title}} {{item.cap}}</li>
            </ul>
        </div> -->
    </div>
</template>

<script>
import Vue from "vue";
import {Cell,Button} from "mint-ui";
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

export default {
  data() {
    return {
        regadress:[
            {title:"中国大陆",cap:"+86"},
            {title:"中国香港",cap:"+852"},
            {title:"中国澳门",cap:"+853"},
            {title:"中国台湾",cap:"+886"},
        ],
        regcap:"+86",
        regtel: "",
        regtest: "",
    };
  },
  methods:{
      regcheck(val){
        if(val == "yes"){
        }
      },
  }
};
</script>

<style>
.reg {
  background-color: #fff;
  font-size: 14px;
}
.reg-adresschose{
    position: relative;
    display: flex;
    padding-left: 15px;
    min-height: 55px;
    background-color: #fff;
    vertical-align: middle;
    overflow: hidden;
    transition: background-color .2s;
    align-items: center;
}
.reg-addresscap, .reg-addressmiddle{
    line-height: 1.5;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 7px;
    padding-bottom: 7px;
    flex: 1;
    color: #222;
    text-align: left;
}
.reg-addressmiddle{
    flex-basis: 36%;
    color: #888;
    text-align: right;
}
.reg-adresschose .reg-addressicon{
    display: block;
    width: 15px;
    height: 15px;
    line-height: 15px;
    margin-left: 8px;
}
.reg-tel{
    
}
.reg-item {
  position: relative;
  display: flex;
  padding-left: 0.2rem;
  min-height: 0.733333rem;
  background-color: #fff;
  vertical-align: middle;
  overflow: hidden;
  transition: background-color 0.2s;
  align-items: center; 
 }
 .regbtn{
    position: relative;
    border: none;
    color: hsla(0,0%,100%,.6);
    opacity: .4;
 }
</style>
