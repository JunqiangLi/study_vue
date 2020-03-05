<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList" :key="item.id">
                <img :src="item.img" alt=""/>
            </mt-swipe-item>

        </mt-swipe>

        <!--<swiper-box :lunbotuList="lunboList" :isfull="false"></swiper-box>-->
        <!--九宫格-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news_list">
                <img src="../../images/menu1.png" alt=""/>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo_list">
                <img src="../../images/menu2.png" alt="" />
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goods_list">
                <img src="../../images/menu3.png" alt=""/>
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/tome">
                <img src="../../images/menu4.png" alt=""/>
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/videos">
                <img src="../../images/menu5.png" alt=""/>
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/tellme">
                <img src="../../images/menu6.png" alt=""/>
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import swiper from '../subcomponents/swiper'
    export default {
        name: "HomeContainer",
        data(){
            return{
                lunboList:[],
            }
        },
        methods:{
            getSwipe(){
                this.axios.get("/api/getlunbo")
                    .then(result=>{
                        if(result.data.status === 0){
                            // Toast("加载轮播图")
                            // console.log(result.data.message);
                            this.lunboList = result.data.message;
                        }else{
                            Toast("加载轮播图失败")
                        }
                })
            }
        },
        created() {
            this.getSwipe();
        },
        components:{
            'swiper-box': swiper,
        }
    }
</script>

<style lang="scss" scoped>

    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            /*&:nth-child(1){*/
                /*background-color: red;*/
            /*}*/
            /*&:nth-child(2){*/
                /*background-color: blue;*/
            /*}*/
            /*&:nth-child(3){*/
                /*background-color: cyan;*/
            /*}*/
            background-color: cyan;

        }
        img{
            width: 100%;
            height: 100%;
        }
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        img {
            width: 60px;
            height: 60px;
        }

        .mui-media-body{
            font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }

</style>