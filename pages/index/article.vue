<template>
  <div class="article_page banxin">
      <el-breadcrumb separator="/" style="padding:20px 0;">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    </el-breadcrumb>
      <h2>{{title}}</h2>
      <h4>{{subTitle}}</h4>
      <section>
          <span>作者：{{author}}</span>
          <span>日期：{{date}}</span>
      </section>
      <hr>
      <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import {ArticleIdApi} from '~/request/api'
import moment from 'moment'
export default {
data() {
    return {
      title:"",
      subTitle:"",
      content:"",
      author:"",
      date:""
    }
  },
  async asyncData({query}){
    let res = await ArticleIdApi({id:query.id});
    return {...res.data}
  }
}
</script>

<style lang="less" scoped>
.article_page{
    h2{
        font-weight: bold;
        font-size: 25px;
        text-align: center;
    }
    h4{
        font-size: 16px;
        text-align: center;
    }
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
    .content{
        p{
            text-indent: 2em;
        }
        img{
            display: block;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
}
</style>