<template>
  <div class="header">
    <Logo/>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color='#667186'
      text-color='#BFD1E3'
      active-text-color='#fff'
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="2">案例</el-menu-item>
      <el-menu-item index="3">关于</el-menu-item>
      <el-menu-item index="/star">星空</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect () {
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang='stylus'>
.header
  z-index 10
  width 100%
  position fixed
  // background linear-gradient(to bottom right, #8BBDEF, #2475C6)
  opacity 0.5
  .el-menu
    border none
    padding-left 70%
    .el-menu-item
      text-shadow 0px 1px 1px #fff
      font-weight bold
</style>
