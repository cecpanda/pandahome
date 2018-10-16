<template>
  <div class="footer">
    <div class="name">
      Panda 开发组
    </div>
    <hr>
    <div class='address'>
      南京市栖霞区熊猫大厦 B 幢 101 厕所第三坑位
    </div>
    <div class="phone">
      025-89617777-0000
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang='stylus' scoped>
.footer
  margin-top 80px
  padding 50px 0 80px 0
  background linear-gradient(to bottom, #d3dce6, #99a9bf)
  opacity 0.7
  hr
    width 50%
    background #000
    height 8px
  .name
    text-align center
    font-size 30px
    color #000
    text-shadow 3px 3px 3px #fff
  .address
  .phone
    margin 10px auto
    text-align center
</style>
