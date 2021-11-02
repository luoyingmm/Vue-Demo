<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside'
import CommonHeader from '../components/CommonHeader'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader
  }
}
</script>

<style lang="scss" scoped>
.el-header{
  background-color: #333;
}

.el-main{
  padding-top: 0;
}

</style>
