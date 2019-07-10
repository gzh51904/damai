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
        <span>不支持选座</span>
        <span>快递票</span>
        <span>纸质发票</span>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
.box {
    width: 100%;
    background-color: rgba(0, 0, 0, .4);
    padding-bottom: .48rem;
    height: 5.152778rem;
    /* border: .027778rem solid red; */
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
}

.pic_l {
    height: 4.291667rem;
    width: 3.166667rem;
    /* height:100%;
    width:100%; */
}

.pic_l .pic_l1 {
    height: 4.291667rem;
    width: 3.166667rem;
}

.pic_l .pic_l2 {
    height: 1.75rem;
    width: .833333rem;
}

.text_r {
    margin-left:.377778rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.text_name,.text_price{
    color: white;
    font-size: .416667rem;
    font-weight:700;
}

</style>
