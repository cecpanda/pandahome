<template>
  <div id="app">
    <Snow class='snow'/>
    <Header :class="{scroll: scroll}"/>
    <div class='main'>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './views/Header'
import Footer from './views/Footer'
import Snow from './views/Snow'

export default {
  name: 'App',
  data () {
    return {
      scrollTop: '',
      scroll: false
    }
  },
  methods: {
    handleScroll () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop > 1) {
        this.scroll = true
      } else {
        this.scroll = false
      }
    }
  },
  components: {
    Header,
    Footer,
    Snow
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus">
body
  padding 0
  margin 0
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // background url('./assets/ludeng.jpg')
  // background-size 100% 100%
  .main
    min-height 500px
    padding-top 58px
.scroll
  box-shadow 0px 3px 5px #696D71
  opacity 0.8
.snow
  z-index -1
  position fixed
</style>
