<template>
  <div class="home">
    <el-carousel :interval="0" type="card" height="480px">
      <el-carousel-item v-for="item in 5" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <h2 class='title'>
      全过程的优质服务，每一环的用心打造。
    </h2>
    <el-row class='icon-wrapper'>
      <el-col :span='4' :offset='2'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sheji1"></use>
        </svg>
        <h5 class='icon-text'>设计</h5>
      </el-col>
      <el-col :span='4'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daima"></use>
        </svg>
        <h5 class='icon-text'>开发</h5>
      </el-col>
      <el-col :span='4'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fabu"></use>
        </svg>
        <h5 class='icon-text'>发布</h5>
      </el-col>
      <el-col :span='4'>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jiankong"></use>
        </svg>
        <h5 class='icon-text'>监控</h5>
      </el-col>
      <el-col :span='4'>
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
  components: {
  }
}
</script>

<style lang='stylus'>
.home
  width 100%
  padding-top 55px
  // background linear-gradient(to bottom, #99a9bf, #d3dce6)
  // background #99a9bf
.el-carousel
  background #99a9bf
  margin-bottom 80px
  padding-bottom 20px
  box-shadow 0px 5px 5px #696D71
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
.title
  text-align center
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
    font-size 1.5em
    text-align center
</style>
