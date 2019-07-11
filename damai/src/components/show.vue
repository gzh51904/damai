<template>
    <div>
        <div class="show-head">
            近期演出
            <span class="show-more">
                演出日历
                <i class="show-more-icon mui-icon mui-icon-arrowright"></i>
            </span>
        </div>
        <ul class="show-week">
            <li v-for="(item,i) in showdate" :key="i" class="show-trueweek">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showdate:[1,2,3,4,5,6,7],
        }
    },
    created(){
        let time = new Date();
        let week = time.getDay()
        let weekarr = ["今天","明天"];
        for(let i = week + 2;i < week + 7;i++){
            let j = i % 7;
            switch(j){
                case 0:
                weekarr.push("周日");
                break;
                case 1:
                weekarr.push("周一");
                break;
                case 2:
                weekarr.push("周二");
                break;
                case 3:
                weekarr.push("周三");
                break;
                case 4:
                weekarr.push("周四");
                break;
                case 5:
                weekarr.push("周五");
                break;
                case 6:
                weekarr.push("周六");
                break;
            }
        }
        this.showdate = [];
        this.showdate.push(...weekarr);
    }
}
</script>

<style>
     .show-head{
        position: relative;
        height: 1.17rem;
        font-weight: 700;
        padding-left: .48rem;
        font-size: .45333rem;
        color: #111;
        margin-bottom: .42667rem;
        text-align: left;
    }
    .show-more{
        position: absolute;
        display: flex;
        align-items: center;
        font-size: .32rem;
        line-height: .32rem;
        color: #999;
        right: .48rem;
        bottom: 0;
        font-weight: 400;
    }
    .show-more .show-more-icon{
        font-size: .24rem;
        margin-top: .01333rem;
        margin-left: .08rem;
    }
    .show-week{
        display: flex;
        justify-content: space-between;
        margin: 0 .48rem .64rem;
        color: #999;
        font-size: .37333rem;
    }
</style>
