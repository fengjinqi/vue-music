<template>
    <div class="slider">
        <scroll ref="scroll" class="recommend-content" :data="discList">
        <div>
            <el-row>
                <el-col :span="24">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in recommend">
                            <a :href="item.linkUrl">
                                <img @load="loadImage" :src="item.picUrl" alt=""style="width: 100%">
                            </a>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </el-col>
            </el-row>
            <el-row style="padding: 0 15px;">
                <el-col :span="24">
                    <span style="color: #ffcd32;height: 65px;line-height: 65px;display: block">热门歌单推荐</span>
                    <ul>
                        <li v-for="item in discList" class="dis">
                            <el-row>
                                <el-col :span="6">
                                    <div class="icon">
                                        <img v-lazy="item.imgurl" alt=""style="width: 100%">
                                    </div>
                                </el-col>
                                <el-col :span="18">
                                    <div class="text">
                                        <span v-html="item.creator.name"></span>
                                        <p v-html="item.dissname"></p>
                                    </div>
                                </el-col>
                            </el-row>


                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
            <div v-show="!discList.length">
                <loading></loading>
            </div>

        </scroll>

    </div>
</template>
<style >
    .swiper-pagination-bullet-active{
        width: 20px!important;
        border-radius: 5px!important;
        background: hsla(0,0%,100%,.8)!important;

    }
    .swiper-pagination-bullet{
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        opacity: 1;
        background: hsla(0,0%,100%,.5);
    }
    ul li{list-style: none}

</style>
<style scoped>
    .dis{
        margin: 10px 0;
    }
    .text span{color: #fff;   padding: 10px 0;}
    .text p{
        color: hsla(0,0%,100%,.5);
        padding: 10px 0;
    }
    .text{text-align: left;padding-left: 15px;}
    .recommend-content{
        height: 100%;
        overflow: hidden;
    }
    .slider{
        position: fixed;
        width: 100%;
        top: 88px;
        bottom: 0
    }
</style>
<script>
    import Slider from '../commoc/slider.vue'
    import Scroll from '../commoc/scroll.vue'
    import {getRecommend,getDiscList} from '../assets/js/recommend'
    import {ERR_OK} from '../assets/js/config'
    import Loading from '../commoc/loading.vue'
    export default{
        data(){
            return{
                recommend:[],
                swiperOption: {
                    loop : true,
                    autoplay:true,
                    speed:1000,
                    touchRatio:1,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                discList:[]
            }
        },
        created(){
            this._getRecommend();
            this._getDiscList();
        },
        methods:{
            _getRecommend(){
                getRecommend().then((res)=>{
                    console.log(res)
                    if(res.code===ERR_OK){
                        this.recommend=res.data.slider
                    }
                })
            },
            _getDiscList(){
                getDiscList().then((res)=>{
                    console.log(res)
                    if(res.code===ERR_OK){
                        this.discList=res.data.list
                    }
                })
            },
            loadImage(){
                if(!this.checkLoaded){
                    this.$refs.scroll.refresh();
                    this.checkLoaded=true;
                }
            }
        },
        components:{
            Slider,
            Scroll,
            Loading
        }
    }
</script>