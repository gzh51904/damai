<template>
    <div :style="{'background-image':'url(' + url + ')'}" class="join-now"></div>
</template>

<script>
export default {
    data(){
        return {
            url:"",
        }
    },
    mounted(){
        this.url = require('../assets/join-now.jpg');
    }
}
</script>

<style>
    .join-now{
        display: block;
        width: 100%;
        height: 6.4rem;
        background-size: 100% 100%;
        background-position: top center;
        background-repeat: no-repeat;
        margin-bottom: .666667rem;
    }
</style>
