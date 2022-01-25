<template>
  <header>
    <div class="banxin content">
      <img :src="logo" height="50" />
      <el-menu
      :default-active="active"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item :index="item.link" v-for="item in navArr" :key="item.id" :disabled="item.disable===1">{{item.title}}</el-menu-item>
    </el-menu>
    </div>
  </header>
</template>
    
<script>
import {NavApi} from '~/request/api'
const logo = require("~/static/images/logo.jpg");
export default {
  data() {
    return {
        logo:logo,
        navArr:[]
    };
  },
  created(){
      NavApi().then(res=>{
          if(res.errCode===0){
              this.navArr = res.data;
          }
      })
  },
  // watch:{
  //   "$route.path":{
  //     handler(newVal,oldVal){
  //       if(newVal!==oldVal){
  //         this.active=newVal
  //       }
  //     }
  //   }
  // },
  computed:{
    active(){
      return this.$route.path
    }
  },
  methods:{
      handleSelect(){}
  }
};
</script>

<style lang="less">
header {
  background: #545c64;
  .content {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>