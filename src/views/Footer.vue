<template>
  <div class="footer">
    <hr>
    <div class="name">
      Q蛋工作室
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang='stylus'>
.footer
  // margin-top 50px
  padding 50px 0
  background linear-gradient(to bottom, #d3dce6, #99a9bf)
  opacity 0.7
  hr
    width 50%
    background #8FBAE7
    height 5px
  .name
    text-align center
    font-size 30px
    color #fff
    text-shadow 3px 3px 3px #000
</style>
