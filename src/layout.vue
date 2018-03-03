<template>
    <div id="app">
        <my-head></my-head>
        <tab></tab>
        <router-view></router-view>
    </div>
</template>
<style>
    *{margin: 0;padding: 0;}
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background: #222;
    }
</style>
<script>
    import MyHead from './layout/my-head.vue'
    import Tab from './layout/tab.vue'
    export default{
        components:{
            MyHead,
            Tab
        }
    }
</script>