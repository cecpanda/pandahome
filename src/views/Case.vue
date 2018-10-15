<template>
  <div>
    <el-row v-for='item in items' :key='item.id'>
      <el-col :span='4' class='label'>{{ item.label }}</el-col>
      <el-col
        :span='4'
        class='content'
        v-for='content in item.contents'
        :key='content.id'
        @mouseenter.native='handleMouseenter(content.id)'
        @mouseleave.native='handleMouseleave'
      >
        <img :src="content.qr" alt="" v-if='content.id === active'>
        <img :src="content.img" alt="" v-else>
        <span class='case-name'>{{ content.name }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Case',
  data () {
    return {
      active: 0,
      items: [
        {
          id: 1,
          label: '公众号',
          contents: [
            {
              id: 1.1,
              name: '醉心客',
              img: require('../assets/cases/zxk.jpeg'),
              qr: require('../assets/cases/zxk.png'),
              active: 'img'
            },
            {
              id: 1.2,
              name: '重大人在徐州',
              img: require('../assets/cases/cqu.jpeg'),
              qr: require('../assets/cases/cqu.png'),
              active: 'img'
            }
          ]
        },
        {
          id: 2,
          label: '小程序',
          contents: [
          ]
        },
        {
          id: 3,
          label: '其 他',
          contents: [
            {
              id: 3.1,
              name: '中电熊猫停机管理系统',
              img: require('../assets/cases/panda.jpeg'),
              qr: require('../assets/cases/panda.jpeg'),
              active: 'img'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleMouseenter (id) {
      this.active = id
    },
    handleMouseleave () {
      this.active = 0
    }
  }
}
</script>

<style lang='stylus' scoped>
.el-row
  margin 50px 0
.label
  font-size 30px
  font-weight bold
  color #fff
  text-align right
.content
  img
    display block
    width 100px
    height 100px
    margin 0 auto
  .case-name
    font-size 20px
    text-align center
    color #000
    text-shadow none
</style>
