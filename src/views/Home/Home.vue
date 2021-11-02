<template>
  <el-row class="home" :getter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg"/>
          <div class="userinfo">
            <p class="name">落樱</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间: <span>2021-11-1</span></p>
          <p>上次登录地点: <span>江苏</span></p>
        </div>
      </el-card>
      <el-card style="height: 550px;margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column show-overflow-tooltip  v-for="(item,key) in tableLabel" :key="key" :prop="key" :label="item">

          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{display: 'flex',padding: 0}">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
          <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">￥{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover" style="height: 280px"></el-card>
      <div class="graph">
        <el-card shadow="hover" style="height: 280px"></el-card>
        <el-card shadow="hover" style="height: 280px"></el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getHome} from '../../api/data'
import {getMenu} from '../../api/data'
export default {
  name: 'Home',
   data(){
    return{
      userImg: require("../../assets/images/user.jpg"),
      tableData:[],
      tableLabel:{
        name: '手机品牌',
        totalBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    }
   },
  mounted () {
    this.getTableData()
  },
  methods:{
    getTableData(){
      getHome().then((res)=>{
        this.tableData = res.data.tableData
      })
    }
  }
}
</script>

<style lang="scss" scoped >
@import "~@/assets/scss/home"
</style>
