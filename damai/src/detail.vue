<template>
<div id="app">
    <div class="box">
        <div class="bgimg">
            <div class="pic_l">
                <img src="./img/head2.png" class="pic_l1">
            </div>
            <div class="text_r">
                <div class="text_name">【北京】2019爱奇艺尖叫之夜演唱会北京站</div>
                <div class="text_price">¥380-¥2019</div>
            </div>
        </div>
    </div>
    <div class="notice">
        <!-- 给最大的盒子添加点击事件就可以 激活service-bar -->
        <span class="notice-one">不支持选座</span>
        <span>快递票</span>
        <span>纸质发票</span>
    </div>
    <div class="detail-service-info">
        <h4>服务说明 <span></span></h4>
        <dl class="info-item">
            <dt class="info-item-no">不支持选座</dt>
            <dd>本项目不支持选座，同一个订单优先连坐</dd>
        </dl>
        <dl class="info-item">
            <dt>快递票</dt>
            <dd>快递票：纸质票会在开票后快递到您留下的收货地址，需您承担邮寄费用。注：离开演时间仅剩4天时，不再寄送快递票，支持在指定取票地点取票（具体以下单后票夹信息点为准）</dd>
        </dl>
        <dl class="info-item">
            <dt>纸质发票</dt>
            <dd>该项目支持开具纸质发票，请您在开始演出前通过订单页补开，发票将在演出结束1个月后，统一由主办方提供</dd>
        </dl>
    </div>
    <!-- 时间信息 -->
    <div class="detail-time-info">
        <div class="left">
            <div class="time">
                <span class="time-str">2019.08.04 周日 19:00</span>
                <i class="j"></i>
            </div>
            <div class="time-desc single-line">演出时长约90分钟（以现场为准）</div>
        </div>
    </div>
    <!-- 点击时间信息栏弹出时间选项，并购买 -->
    <div class="time-buy-info">
        <p> <span></span></p>
        <div class="time-info">
            <h4>场次<span>场次时间均为演出当地时间</span></h4>
            <mt-button type="danger" size="large" style="background:pink; color:red">2019-08-04 周日 19：00</mt-button>
        </div>
        <div class="ticket-level">
            <h4>票档</h4>
            <div class="ticket-btn">
                <mt-button type="primary" style="background:#F5F5F5; margin-bottom:15px; margin-left:10px;">看&nbsp;台&nbsp;380</mt-button>&nbsp;&nbsp;&nbsp;
                <mt-button type="danger" style="background:#F5F5F5;">看&nbsp;台&nbsp;580</mt-button>&nbsp;&nbsp;&nbsp;
                <mt-button type="danger" style="background:#F5F5F5;">看&nbsp;台&nbsp;880</mt-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <mt-button type="danger" style="background:#F5F5F5; margin-left:10px;">看台1280</mt-button>&nbsp;&nbsp;&nbsp;
                <mt-button type="danger" style="background:#F5F5F5;">看台1680</mt-button>&nbsp;&nbsp;&nbsp;
                <mt-button type="danger" style="background:#F5F5F5;">场地2019</mt-button>
            </div>
        </div>

        <div class="sku-bottom">
            <!---->
            <div class="buy-number">
                <div class="buy-number-edit">
                    <div class="title">
                        购买数量
                    </div>
                    <div class="number-edit">
                        <div class="number-edit-bg unable disable">-</div>
                        <div class="number">1</div>
                        <div class="number-edit-bg enable">+</div>
                    </div>
                </div>
                <div class="buy-number-tips"><span class="left-tips"></span>
                    <div class="limit-info">
                        每笔订单限购4张
                    </div>
                </div>
            </div>
            <!---->
            <div class="price-button">
                <div class="price-container">
                    <div class="price-top"><span class="price-text">￥880</span>
                        <!---->
                        <!---->
                    </div>
                    <!---->
                </div>
                <div class="button button common normal">
                    确定
                </div>
            </div>
            <!---->
        </div>

    </div>

    <div class="detail-localtion-info">
        <div class="location-left">
            <p class="location-left-city single-line">北京市 | 凯迪拉克中心</p>
            <p class="location-left-address single-line">北京海淀区复兴路69号</p>
        </div>
        <div class="location-right">
            <div class="location-right-icon"></div>
        </div>
    </div>
    <div class="nav-info" style="background:#fff; margin-top:15px;">
        <mt-navbar v-model="selected" style="display:flex;
        justify-content: space-around;
        align-items:center;
        font-size: .47333rem;
        font-weight: 700; height:54px">
            <mt-tab-item id="1" style="color:#111;">详情</mt-tab-item>
            <mt-tab-item id="2" style="color:#111;">须知</mt-tab-item>
            <mt-tab-item id="3" style="color:#111;">推荐</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected" style="height:100%">
            <mt-tab-container-item id="1">

                <information></information>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                hafiuhfaighagsgsfd3423
                <attention></attention>
                <!-- <mt-cell v-for="n in 4" :title="'content ' + n" /> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                34546t45y hfaiubviasjubv
                <recommend></recommend>
                <!-- <mt-cell v-for="n in 6" :title="'content ' + n" /> -->
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
    <div data-v-5dfd96bd="" class="bottom">
        <div data-v-d0cc7b08="" data-v-5dfd96bd="" class="detail-bar">
            <!---->
            <div data-v-d0cc7b08="" class="button-outline">
                <div data-v-d0cc7b08="" class="left"><i data-v-d0cc7b08="" class="left__icon2 icon-home"></i>
                    <p data-v-d0cc7b08="" class="left__msg">大麦首页</p>
                </div>
                <div data-v-d0cc7b08="" class="left"><i data-v-d0cc7b08="" class="left__icon left__icon-disfavor"></i>
                    <p data-v-d0cc7b08="" class="left__msg">想看</p>
                </div>
                <!---->
                <div data-v-d0cc7b08="" class="detail-button">
                    <div data-v-3be445e2="" data-v-d0cc7b08="" class="button button-primary">
                        <div data-v-d0cc7b08="" data-v-3be445e2="" class="buy">
                            <!---->
                            <div data-v-d0cc7b08="" data-v-3be445e2="" class="buy__button">
                                <p data-v-d0cc7b08="" data-v-3be445e2="" class="buy__button__text">立即购买</p>
                                <!---->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
            <!---->
            <!---->
            <div data-v-d0cc7b08="" class="dm-dialog point-auth" style="display: none;">
                <div class="dm-dialog__box">
                    <!---->
                    <div class="dm-dialog__bd">
                        由于未获得您的支付宝积分授权，本次交易无法享受支付宝积分优惠。
                    </div>
                    <div class="dm-dialog__ft">
                        <!---->
                        <div class="dm-dialog__confirm"><span class="dm-dialog__ft__item dm-dialog__confirm_cancel">确定</span> <span class="dm-dialog__ft__item dm-dialog__confirm_true">重新授权</span></div>
                    </div>
                </div>
            </div>
            <div data-v-d0cc7b08="" class="dm-dialog point-auth" style="display: none;">
                <div class="dm-dialog__box">
                    <!---->
                    <div class="dm-dialog__bd">
                        抱歉，您当前剩余支付宝积分或等级暂不满足享受积分优惠的条件。
                    </div>
                    <div class="dm-dialog__ft"><span class="dm-dialog__ft__item">知道了</span>
                        <!---->
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
// 引入
import information from './components/information.vue';
import attention from './components/attention.vue';
import recommend from './components/recommend.vue';
export default {
    data() {
        return {

        }
    },
    // 注册
    components: {
        information,
        attention,
        recommend
    }
}
</script>

<style scoped>
#app {
    /* height: 100%; */
    /* overflow-y: scroll; */
}

/* -------最顶部  ---- */
.box {
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    padding-bottom: .48rem;
    height: 5.152778rem;
}

.bgimg {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-image: url(img/cover.jpg);
    background-color: rgba(0, 0, 0, .4);
    background-size: cover;
    background-repeat: no-repeat;
    padding: .5rem .388889rem .361111rem .361111rem;
    /* filter:blur(5px);
    z-index:-1; */
    /* filter: saturate(1) brightness(1.1) blur(.6rem) contrast(.8); */

}

/*---- 左边图片 ----*/
.pic_l {

    height: 4.291667rem;
    width: 3.166667rem;
}

.pic_l .pic_l1 {
    height: 4.291667rem;
    width: 3.166667rem;
    border-radius: .169444rem;

}

.text_r {

    margin-left: .377778rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.text_name,
.text_price {
    color: white;
    font-size: .416667rem;
    font-weight: 700;
}

.notice {
    display: flex;
    align-items: center;
    height: .972222rem;
    width: 100%;
    background-color: #F8F8F8;

}

.notice span {
    color: #000000;
    font-size: .416667rem;
    margin-left: .416667rem;
    padding-left: .516667rem;
    background: url(img/gou.png) no-repeat left center;
}

.notice .notice-one {
    background: url(img/cha.png) no-repeat left center;
}

/* 服务信息隐藏显示 */
.detail-service-info {
    background: #fff;
    padding: .208333rem;
    display: none;
}

.detail-service-info h4 {
    position: relative;
    height: .902778rem;
    line-height: .902778rem;
    text-align: center;
    font-weight: 700;
    border-bottom: .013889rem solid #ccc;
}

.detail-service-info h4 span {
    position: absolute;
    right: .138889rem;
    top: .238889rem;
    display: inline-block;
    height: .25rem;
    width: 2.319444rem;
    background: url(img/cha1.png) no-repeat right center;

}

.info-item {
    margin-top: .416667rem;
}

.info-item dt {
    color: #000000;
    font-size: .416667rem;
    margin-left: .416667rem;
    padding-left: .516667rem;
    background: url(img/gou.png) no-repeat left center;

}

.info-item .info-item-no {
    background: url(img/cha.png) no-repeat left center;
}

.info-item dd {
    padding-left: 1.016667rem;
    margin-top: .416667rem;
    font-size: .366667rem;
    color: #ccc;
}

/* 时间信息 */
.detail-time-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
    min-height: 1.73333rem;
    position: relative;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    flex-direction: row;
    background-color: #fff;
    padding-left: .4rem;
    padding-right: .4rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}

.detail-time-info .left {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    border-bottom: 1px solid #eee;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
}

.time {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    font-size: .42667rem;
    line-height: .42667rem;
    color: #000;
    font-weight: 700;
    margin-top: .48rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.single-line {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    overflow: hidden;
    -webkit-box-orient: vertical;
}

.time-desc {
    height: .34667rem;
    font-size: .34667rem;
    color: #999;
    margin-top: .24rem;
    margin-bottom: .48rem;
    line-height: .34667rem;
}

.time i {
    display: inline-block;
    background: url(img/arror.png) no-repeat left center;
    height: .277778rem;
    width: 2.480556rem;
    font-size: .416667rem;
}

/* --------时间弹出购买信息 ----*/
.time-buy-info {
    padding: .208333rem;
    display: none;

    height: 13.361111rem;
    width: 100%;
    background-color: white;
}

.time-buy-info p {
    position: relative;
    display: flex;
    align-items: center;
    height: 1.15rem;

    width: 100%;

}

.time-buy-info p span {
    position: absolute;
    right: 0;
    /* border:.027778rem solid red; */
    text-align: right;
    display: inline-block;
    height: .25rem;
    width: 1.319444rem;
    background: url(img/cha1.png) no-repeat 15px center;

}

.time-info {
    margin-bottom: .48rem;

}

.time-info h4 span {
    margin-bottom: .48rem;
    margin-left: .277778rem;
    font-size: .25rem;
    color: #ccc;
}

.ticket-btn {
    height: 1.597222rem;
}

.ticket-level {
    /* height: 100%; */
    height: 3.597222rem;
    padding-bottom: 5.277778rem;
    border-bottom: .027778rem solid #ccc;

}

.ticket-level h4 {
    height: .833333rem;
    line-height: .877778rem;
    margin-top: .277778rem;
    margin-bottom: .277778rem;
}

.sku-bottom {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 -0.04rem 0.24rem 0 rgba(0, 0, 0, .06);
}

.sku-bottom,
.sku-content {
    position: relative;
    width: 100%;
}

.buy-number .buy-number-edit,
.buy-number {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
}

.buy-number {
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 100%;
    padding-top: .56rem;
    padding-bottom: .42667rem;
    border-bottom: 1px solid #eee;
}

.buy-number .buy-number-edit {
    position: relative;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    flex-direction: row;
    margin: 0 .48rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-bottom: .26667rem;
}

.buy-number .title {
    font-size: .42667rem;
    color: #000;
    line-height: .42667rem;
    font-weight: 700;
}

.buy-number .number-edit {
    position: absolute;
    right: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.buy-number .number-edit .disable {
    color: #ccc;
}

.buy-number .number-edit .number-edit-bg {
    background-color: #f5f5f5;
    width: .66667rem;
}

.buy-number .number-edit .number-edit-bg,
.buy-number .number-edit .number {
    height: .66667rem;
    font-size: .42667rem;
    text-align: center;
    line-height: .66667rem;
}

.buy-number .number-edit .number {
    width: 1.33333rem;
    color: #000;
}

.buy-number .number-edit .enable {
    color: #666;
}

.buy-number .buy-number-tips {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    margin-left: .48rem;
    margin-right: .48rem;
}

.buy-number .buy-number-tips .left-tips,
.buy-number .buy-number-tips .limit-info {
    font-size: .34667rem;
    color: #999;
    line-height: .34667rem;
}

.price-button {
    width: 100%;
    height: 1.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.price-container,
.price-top {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
}

.price-container {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    margin-left: .32rem;
    margin-right: .26667rem;
}

.price-container {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
}

.button {
    width: 4.26667rem;
}

.normal {
    opacity: 1;
}

.common {
    background-image: -webkit-linear-gradient(left, #ff7f81, #ff2d79);
    background-image: linear-gradient(90deg, #ff7f81, #ff2d79);
}

.button {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    height: 1.17333rem;
    border-radius: .58667rem;
    font-size: .42667rem;
    color: #fff;
    line-height: 1.17333rem;
    text-align: center;
    margin-left: .4rem;
    margin-right: .4rem;
    opacity: 1;
}

.ticket-buy {
    height: 1.597222rem;
    width: 5.152778rem;
    border-bottom: .027778rem solid red;

}

/*----- 地理位置信息------ */
.detail-localtion-info {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding-top: .48rem;
    padding-bottom: .48rem;
    padding-left: .4rem;
    padding-right: .4rem;
    background: white;
}

.location-left {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-right: 1px solid #eee;
}

.location-left-city {
    font-size: .42667rem;
    color: #000;
    font-weight: 700;
}

.single-line {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.location-left-address {
    font-size: .34667rem;
    color: #999;
    margin-top: .24rem;
}

.location-right {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
    padding-left: .4rem;
}

.location-right-icon {
    width: .53333rem;
    height: .53333rem;
    background: url(img/location.jpg) no-repeat right;
    background-size: contain;
    border-radius: 1.138889rem;

}
</style>
