<template>
  <div id="app">
    <Header :class="{scroll: scroll}"/>
    <router-view/>
  </div>
</template>

<script>
import Header from './views/Header'

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
    Header
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
.scroll
  box-shadow 0px 3px 5px #696D71
</style>
