<template>
  <div class="header">
    <Logo/>
    <el-menu
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color='#99a9bf'
      text-color='#fff'
      active-text-color='#fff'
      router
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/case">案例</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <!-- <el-menu-item index="/snow">下雪</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Header',
  data () {
    return {
      // activeIndex: '/'
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
  opacity 0.8
  .el-menu
    border none
    padding-left 78%
    .el-menu-item
      text-shadow 0px 1px 1px #fff
      font-size 20px
      font-weight bold
</style>
