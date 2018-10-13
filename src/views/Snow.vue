<template>
  <div ref='snow' id='snow'></div>
</template>

<script>
import zrender from 'zrender'

export default {
  name: 'Snow',
  data () {
    return {
      zr: undefined,
      width: window.innerWidth,
      height: window.innerHeight,
      num: 500,
      sfs: []
    }
  },
  methods: {
    init () {
      for (let i = 0; i < this.num; i++) {
        let r1 = Math.round(Math.random() * 8)
        let r2 = Math.round(Math.random() * 4)
        let sf = {
          cx: Math.round(Math.random() * this.width),
          cy: Math.round(Math.random() * this.height),
          n: 6,
          r: Math.max(r1, r2),
          r0: Math.min(r1, r2)
        }
        this.sfs.push(sf)
      }
    },
    draw () {
      let zr = zrender.init(this.$refs.snow, {
        width: this.width, height: this.height
      })
      let bg = new zrender.Image({
        style: {
          image: require('../assets/snow.jpg'),
          x: 0,
          y: 0,
          width: this.width,
          height: this.height
        }
      })
      zr.add(bg)

      for (let sf of this.sfs) {
        let i = new zrender.Star({
          shape: {
            cx: sf.cx,
            cy: sf.cy,
            n: sf.n,
            r: sf.r,
            r0: sf.r0
          },
          style: {
            fill: '#fff',
            stroke: '#fff'
          }
        })
        zr.add(i)
      }
    }
  },
  mounted () {
    this.init()
    this.draw()
  }
}
</script>

<style lang='stylus' scoped>
.snow
  margin 20px 0
  border 1px solid #000
  // background url('../assets/snow.jpg')
  // background-size 100% 100%
</style>
