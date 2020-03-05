<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
  import comment from "../subcomponents/comment.vue";
  import {Toast} from 'mint-ui'
    export default {
        name: "NewsInfo",
        data(){
            return{
                id: this.$route.params.id,
                newsinfo: [],
            }
        },
        methods:{
            getNewsDetails(){
                this.axios.get('/api/getnew/'+this.id).then(result=>{
                    result = result.data;
                    if(result.status === 0){
                        this.newsinfo = result.message[0];
                        // console.log(this.newsinfo)
                    }else{
                        Toast("获取失败！！！")
                    }
                })
            }
        },
        created() {
            this.getNewsDetails();
        },
        components: {
            // 用来注册子组件的节点
            "comment-box": comment,
        }

    }
</script>

<style lang="scss">
  .newsinfo-container {
    padding: 0 4px;
    .title {
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      color: red;
    }
    .subtitle {
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
    .content {
      img {
        width: 100%;
      }
    }
  }
</style>