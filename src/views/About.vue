<template>
  <div class="about">
    <h1>Panda 开发组</h1>
    <el-row>
      <el-col :span='4' :offset='6' class='member'>
        <img src="../assets/about/a.jpeg" alt="" class='avatar'>
        <div class="name">熊大</div>
      </el-col>
      <el-col :span='4' class='member'>
        <img src="../assets/about/a.jpeg" alt="" class='avatar'>
        <div class="name">熊二</div>
      </el-col>
      <el-col :span='4' class='member'>
        <img src="../assets/about/a.jpeg" alt="" class='avatar'>
        <div class="name">熊三</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='4' :offset='6' class='member'>
        <img src="../assets/about/a.jpeg" alt="" class='avatar'>
        <div class="name">熊四</div>
      </el-col>
      <el-col :span='4' class='member'>
        <img src="../assets/about/a.jpeg" alt="" class='avatar'>
        <div class="name">熊五</div>
      </el-col>
      <el-col :span='4' class='member'>
        <img src="../assets/about/a.jpeg" alt="" class='avatar'>
        <div class="name">熊六</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang='stylus' scoped>
h1
  text-align center
  color #fff
.member
  .avatar
    display block
    width 150px
    height 150px
    margin 0 auto
  .name
    margin 10px 0 50px 0
    font-size 25px
    text-align center
    color #000
</style>
