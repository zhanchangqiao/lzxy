<template>
  <div>
    <div class="container">
      <div class="left">
        <img src="../assets/image/1.png" alt class="image" />
        <div class="title">
          <p class="big">浪子学院</p>
          <p class="small">更懂学生的专升本</p>
        </div>
      </div>
      <div class="btnlist">
        <router-link :to="{path:'/list',query:{id:1}}" class="btn">语文</router-link>
        <router-link :to="{path:'/list',query:{id:2}}" class="btn">数学</router-link>
        <router-link :to="{path:'/list',query:{id:3}}" class="btn">英语</router-link>
        <router-link :to="{path:'/list',query:{id:4}}" class="btn">计算机</router-link>
      </div>
      <div class="gy">关于我们</div>
      <span class="sp">鲁ICP备2020033889号</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.image {
  width: 100px;
  height: 120px;
}
.btnlist {
  padding: 0px 10px;
  border-right: 1px solid #000;
  display: flex;
  flex: 4;
}
.btn {
  padding: 20px;
}
.left {
  flex: 4;
  display: flex;
}
.left .title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}
.title p {
  font-size: 40px;
  font-weight: bold;
}
.title .small {
  font-weight: 400;
  font-size: 10px;
  padding-top: 10px;
}
.gy {
  flex: 2;
  padding-left: 20px;
}
.sp {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 10px;
  color: #ccc;
}
</style>
