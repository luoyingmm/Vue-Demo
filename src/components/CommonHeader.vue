<template>
 <header>
   <div class="l-content">
     <el-button class="el-button" plain icon="el-icon-menu" size="mini" @click="changeMenuSize"/>
     <el-breadcrumb >
       <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
       <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }} </el-breadcrumb-item>
     </el-breadcrumb>
   </div>
   <div class="r-content">
     <el-dropdown trigger="click" size="mini" @command="handleCommand">
       <span class="el-dropdown-link">
         <img :src="userImg" class="user">
       </span>
       <el-dropdown-menu slot="dropdown">
         <el-dropdown-item>个人中心</el-dropdown-item>
         <el-dropdown-item command="exit">退出</el-dropdown-item>
       </el-dropdown-menu>
     </el-dropdown>
   </div>
 </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'CommonHeader',
  data(){
    return{
      userImg: require("../assets/images/user.jpg")
    }
  },
  methods:{
    changeMenuSize(){
      this.$store.commit('collapseMenu')
    },
    handleCommand(command) {
      if (command === 'exit'){
        this.$router.push({ path:'/'})
      }
    }
  },
  computed:{
    ...mapState({
      current: (state) => state.tab.currentMenu,
    })
  }
}
</script>

<style scoped lang="scss">
header{
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
}

.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

<style lang="scss">
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #666;
    font-weight: normal;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: white;
    }
  }
}
</style>

