<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item @click="toHome" index="1">首页</el-menu-item>
    <el-menu-item @click="toVerify" index="2">用戶中心</el-menu-item>
    <el-menu-item @click="toUser" index="3">登录注册</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toHome() {
      this.$router.push({ name: "HomePage" });
    },
    toVerify() {
      this.$router.push({ name: "UserPage" });
    },
    toUser() {
      this.$router.push({ name: "VerifyPage" });
    }
  }
};
</script>
