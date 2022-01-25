<template>
  <div class="banner banxin">
      <el-carousel height="600px">
      <el-carousel-item v-for="item in banner" :key="item.index">
        <img :src="'http://localhost:3001/images/web/'+item.imgSrc" alt="" width="100%">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {BannerApi} from '~/request/api'
export default {
  data(){
    return{
      banner:[]
    }
  },
  async asyncData(){
    let res = await BannerApi();
    return{
        banner:res.data
    }
  }
}
</script>

<style>

</style>