<template>
    <div class="tab">
        <el-row>
            <el-col :span="6"><router-link tag="div" :to="{name:'recommend'}"><span>推荐</span></router-link></el-col>
            <el-col :span="6"><router-link tag="div":to="{name:'singer'}"><span>歌手</span></router-link></el-col>
            <el-col :span="6"><router-link tag="div" to="/ranking"><span>排行</span></router-link></el-col>
            <el-col :span="6"><router-link tag="div" to="/search"><span>搜索</span></router-link></el-col>
        </el-row>
    </div>
</template>
<style scoped="">
.el-col{
    height:44px;
    line-height:44px;
    cursor: pointer;
}
span{
    color: hsla(0,0%,100%,.5);
}
    .router-link-active span{
        color: #ffcd32;

        border-bottom: 2px solid #ffcd32;
        padding-bottom: 5px;
    }
</style>
<script>
    export default{

    }
</script>