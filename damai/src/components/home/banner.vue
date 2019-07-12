<template>
    <div class="banner-main">
        <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
            banner:[

            ]
        }
    },
    beforeUpdated(){
        this.$axios.get("")
    }
};
</script>

<style>
.banner-main{
    display: block;
    width: 100%;
    height: 3.76rem;
    margin-top: 1.333333rem;
}
</style>
