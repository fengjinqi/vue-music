<template>
    <div class="singer">

        歌手
    </div>
</template>
<style scoped="">
    .slinger{
        position: fixed;
        top:88px;
        bottom: 0px;
        width: 100%;
    }
</style>
<script>
    import {getSingerList} from '../assets/js/singer'
    import {ERR_OK} from '../assets/js/config'
    export default{
        data(){
            return{
                singers:[]
            }
        },
        created(){
            this._getSingerList()
        },
        methods:{
            _getSingerList(){
                getSingerList().then((res)=>{
                    if(res.code===ERR_OK){
                        this.singers=res.data.list
                        console.log( this.singers)
                    }
                })
            }

        }
    }
</script>