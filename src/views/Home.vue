<template>
  <div class="home">
    <el-carousel :interval="0" type="card" height="480px">
      <el-carousel-item v-for="item in 5" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <h2 class='title'>
      用心锻造每一环节 提供我们最优质的服务
    </h2>
    <transition
      name='icon-desc'
      enter-active-class='animated bounceInLeft'
      leave-active-class='animated bounceOutRight'
    >
      <h5 class='icon-desc' v-show='show'>
        {{ iconDesc }}
      </h5>
    </transition>

    <el-row>
      <el-col :span='4' :offset='2' class='icon-wrapper' @mouseenter.native='handleSj'
      >
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sheji1"></use>
        </svg>
        <h5 class='icon-text'>设计</h5>
      </el-col>
      <el-col :span='4' class='icon-wrapper' @mouseenter.native='handleKf'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daima"></use>
        </svg>
        <h5 class='icon-text'>开发</h5>
      </el-col>
      <el-col :span='4' class='icon-wrapper' @mouseenter.native='handleFb'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fabu"></use>
        </svg>
        <h5 class='icon-text'>发布</h5>
      </el-col>
      <el-col :span='4' class='icon-wrapper' @mouseenter.native='handleJk'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiankong"></use>
        </svg>
        <h5 class='icon-text'>监控</h5>
      </el-col>
      <el-col :span='4' class='icon-wrapper' @mouseenter.native='handleWh'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weihu"></use>
        </svg>
        <h5 class='icon-text'>维护</h5>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      iconDesc: '我们伴您成功',
      show: true
    }
  },
  methods: {
    handleSj () {
      this.show = false
      setTimeout(() => {
        this.iconDesc = '设计有品位的网站，与您优质的产品相得益彰，第一印象脱颖而出。'
        this.show = true
      }, 300)
    },
    handleKf () {
      this.show = false
      setTimeout(() => {
        this.iconDesc = '编写高质量的代码，即使在用户看不到的地方，我们同样精益求精。'
        this.show = true
      }, 300)
    },
    handleFb () {
      this.show = false
      setTimeout(() => {
        this.iconDesc = '发布稳健测试版本，域名空间备案一条龙服务，免去所有后顾之忧。'
        this.show = true
      }, 300)
    },
    handleJk () {
      this.show = false
      setTimeout(() => {
        this.iconDesc = '监测网站访问流量，每月寄送详细的数据报表，倾力挖掘潜在商机。'
        this.show = true
      }, 300)
    },
    handleWh () {
      this.show = false
      setTimeout(() => {
        this.iconDesc = '提供后续维护服务，让您既安心又放心。'
        this.show = true
      }, 300)
    }
  },
  mounted () {
    // this.$refs.sheji.addEventListener('mouseover', this.handleMouseover)
  }
}
</script>

<style lang='stylus'>
.home
  width 100%
  // background linear-gradient(to bottom, #99a9bf, #d3dce6)
  // background #99a9bf
.el-carousel
  background #99a9bf
  margin-bottom 80px
  padding-bottom 20px
  box-shadow 0px 5px 5px #696D71
  opacity 0.8
.el-carousel__item
  box-shadow 3px 3px 5px #696D71
  h3
    text-align center
.el-carousel__item:nth-child(2n)
  background-color: #d3dce6
.el-carousel__item:nth-child(2n+1)
  background-color: #99a9bf
.el-carousel__button
  height 8px
  box-shadow 3px 3px 5px #696D71
.content
.title
  font-size 2em
  text-align center
  color #C9CC0F
  text-shadow 0px 2px 2px #fff
.icon-desc
  text-align center
  color #BFD1E3
  font-size 1.1em
.icon
  width 5em
  height 5em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
.icon:hover
  transform scale(1.5, 1.5)
.icon-wrapper
  // border 1px  solid #ccc
  svg
    display block
    margin 1.5em auto
  .icon-text
    font-size 1.2em
    text-align center
    color #000
</style>
