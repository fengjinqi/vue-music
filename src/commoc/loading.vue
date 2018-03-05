<template>
    <div class="loading">
        <img :src="url" alt="">
        <p class="title">{{title}}</p>
    </div>
</template>
<style scoped="">
    .loading{
        position: fixed;
        top:50%;
        left:50%;
        margin-top: -50px;
        margin-left: -50px;
        z-index: 99;
    }
    .title{
        line-height: 20px;
        color: aliceblue;
    }
</style>
<script>
    export default{
        data(){
            return{
                url:require('../assets/loading.gif')
            }
        },
        props:{
            title:{
                type:String,
                default:'正在载入。。。'
            }
        }
    }
</script>