<template>
  <div class="tabs">
    <el-tag v-for="(tag,index) in tags" :key="tag.name" size="small" :closable="tag.name !== 'home'" :effect="$route.name === tag.name ? 'dark' : 'plain'" @click="changeMenu(tag)" @close="handleClose(tag,index)" >
      {{tag.label}}
    </el-tag>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  name: 'CommonTag',
  computed:{
    ...mapState({
      tags:(state) => state.tab.tabList
    })
  },
  methods:{
    ...mapMutations({
      close: 'closeTag'
    }),
    changeMenu(item){
      this.$router.push({name:item.name})
      this.$store.commit('selectMenu',item)
    },
    handleClose(tag,index){
      let length = this.tags.length - 1
      this.close(tag)
      if (tag.name !== this.$route.name){
        return;
      }
      if (index === length){
        this.$router.push({
          name: this.tags[index-1].name
        })
      }else {
        this.$router.push({name:this.tags[index].name})
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs{
    padding: 20px;
    .el-tag{
      margin-right: 15px;
      cursor: pointer;
    }
  }
</style>
