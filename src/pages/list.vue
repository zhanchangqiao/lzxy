<template>
  <div class='container'>
    <el-tabs v-model="activeName" tab-position="left" style="height: 200px;" v-if="id === '1'">
    <el-tab-pane label="文言文" name="1">
      <el-button @click="push(1)" class="btn">郑伯克段于鄢</el-button>
      <el-button @click="push(2)" class="btn">庖丁解牛</el-button>
      <el-button @click="push(3)" class="btn">子产不毁乡校</el-button>
      <el-button @click="push(4)" class="btn">赵威后问齐使</el-button>
      <el-button @click="push(5)" class="btn">管晏列传</el-button>
    </el-tab-pane>
    <el-tab-pane label="文学常识" name="2">配置管理</el-tab-pane>
    <el-tab-pane label="诗词鉴赏" name="3">角色管理</el-tab-pane>
    <el-tab-pane label="阅读理解" name="4">定时任务补偿</el-tab-pane>
    <el-tab-pane label="写作" name="5">定时任务补偿</el-tab-pane>
  </el-tabs>
    <el-tabs tab-position="left" style="height: 200px;" v-if="id === '2'">
    <el-tab-pane label="数学">用户管理</el-tab-pane>
    <el-tab-pane label="文学常识">配置管理</el-tab-pane>
    <el-tab-pane label="诗词鉴赏">角色管理</el-tab-pane>
    <el-tab-pane label="阅读理解">定时任务补偿</el-tab-pane>
    <el-tab-pane label="写作">定时任务补偿</el-tab-pane>
  </el-tabs>
    <el-tabs tab-position="left" style="height: 200px;" v-if="id === '3'">
    <el-tab-pane label="英语">用户管理</el-tab-pane>
    <el-tab-pane label="文学常识">配置管理</el-tab-pane>
    <el-tab-pane label="诗词鉴赏">角色管理</el-tab-pane>
    <el-tab-pane label="阅读理解">定时任务补偿</el-tab-pane>
    <el-tab-pane label="写作">定时任务补偿</el-tab-pane>
  </el-tabs>
    <el-tabs tab-position="left" style="height: 200px;" v-if="id === '4'">
    <el-tab-pane label="计算机">用户管理</el-tab-pane>
    <el-tab-pane label="文学常识">配置管理</el-tab-pane>
    <el-tab-pane label="诗词鉴赏">角色管理</el-tab-pane>
    <el-tab-pane label="阅读理解">定时任务补偿</el-tab-pane>
    <el-tab-pane label="写作">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      id: null,
      activeName: "1"
    }
  },
  created () {},
  computed: {
  },
  methods: {
    push (id) {
      this.$router.push({name: 'detail', params: { id: id }})
    }
  },
  mounted () {
    // console.log(id,this)
    this.id = this.$route.query.id
    
  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped lang="css">
.container {
  width: 100%;
  display: flex;
  padding-top: 20px;
}
.left {
  flex: 2;
}
.btn{
  margin: 0px 10px;
}
</style>
