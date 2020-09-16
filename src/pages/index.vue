<template>
  <div class="container">
    <Head />
    <router-view></router-view>
  </div>
</template>
<script>

import Head from "@/components/Head";
export default {
  name: "",
  components: {
    Head
  },
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
  height: 100%;
  padding: 0px 50px;
}
</style>
