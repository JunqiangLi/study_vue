<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/news_info/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time | dataFormat}}</span>
              <span>点击： {{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "newsList",
        data(){
            return{
                newsList:[],
            }
        },
        methods:{
            getNewsList(){
                this.axios.get("/api/getnewslist").then(result=>{
                    result = result.data;
                    if(result.status === 0){
                        // Toast("获取新闻资讯");
                        this.newsList = result.message;
                    }else{
                        Toast("获取新闻资讯失败");
                    }
                })
            }
        },
        created() {
            this.getNewsList();
        },
        filters:{
            'dateFormat':{

            }
        }
    }
</script>

<style lang="scss" scoped>
  .mui-table-view {
    li {
      h1 {
        font-size: 14px;
      }
      .mui-ellipsis {
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>