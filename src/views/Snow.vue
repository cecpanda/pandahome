<template>
  <div ref='snow' id='snow'></div>
</template>

<script>
import zrender from 'zrender'
import '../common/common.js'

export default {
  name: 'Snow',
  data () {
    return {
      zr: undefined,
      width: window.innerWidth,
      height: window.innerHeight,
      num: 200,
      sfs: []
    }
  },
  methods: {
    init () {
      let r1 = Math.round(Math.random() * 8)
      let r2 = Math.round(Math.random() * 4)
      let sf = {
        cx: Math.round(Math.random() * this.width),
        // cy: Math.round(Math.random() * this.height),
        cy: 0,
        n: 6,
        r: Math.max(r1, r2),
        r0: Math.min(r1, r2),
        time: Math.round(Math.random() * 20000)
      }
      return sf
    },
    // update (sf) {
    //   // for (let i = 0; i < this.num; i++) {
    //   //   if (this.sfs[i].cx < 0 || this.sfs[i].cx > this.width || this.sfs[i].cy > this.height) {
    //   //     this.sfs[i] = this.init()
    //   //   } else {
    //   //     this.sfs[i].cy += 10
    //   //   }
    //   // }
    //   if (sf.cx < 0 || sf.cx > this.width || sf.cy > this.height) {
    //     sf = this.init()
    //   } else {
    //     sf.cy += 10
    //   }
    // },
    async start () {
      this.zr = zrender.init(this.$refs.snow, {
        width: this.width, height: this.height
      })
      for (let i = 0; i < this.num; i++) {
        let sf = await this.init()
        this.sfs.push(sf)
      }
      // let bg = new zrender.Image({
      //   style: {
      //     image: require('../assets/ludeng.jpg'),
      //     x: 0,
      //     y: 0,
      //     width: this.width,
      //     height: this.height,
      //     opacity: 0.6
      //   }
      // })
      // this.zr.add(bg)
      for (let sf of this.sfs) {
        let i = new zrender.Star({
          draggable: true,
          shape: {
            cx: sf.cx,
            cy: sf.cy,
            n: sf.n,
            r: sf.r,
            r0: sf.ro
          },
          style: {
            fill: '#BFD1E3',
            stroke: '#BFD1E3'
          },
          position: [sf.cx, sf.cy]
        })
        // i.animateTo({
        //   position: [sf.cx, this.height]
        // }, sf.time, 0, 'bounceInOut')
        i.animate('position', true)
          .when(sf.time, [sf.cx, this.height])
          .start()
        this.zr.add(i)
      }
      // this.loop()
    }
    // loop () {
    //   this.timer = window.requestAnimFrame(this.loop)
    //   let bg = new zrender.Image({
    //     style: {
    //       image: require('../assets/snow.jpg'),
    //       x: 0,
    //       y: 0,
    //       width: this.width,
    //       height: this.height
    //     }
    //   })
    //   this.zr.add(bg)
    //   for (let sf of this.sfs) {
    //     let i = new zrender.Star({
    //       shape: {
    //         cx: sf.cx,
    //         cy: sf.cy,
    //         n: sf.n,
    //         r: sf.r,
    //         r0: sf.ro
    //       },
    //       style: {
    //         fill: '#BFD1E3',
    //         stroke: '#BFD1E3'
    //       }
    //     })
    //     // i.animateTo({
    //     //   position: [sf.cx, this.height]
    //     // }, sf.time, 0, 'bounceInOut')
    //     // this.zr.add(i)
    //     i.animate('position', true)
    //       .when(sf.time, [sf.cx, this.height])
    //       .start()
    //     this.zr.add(i)
    //   }
    // }
  },
  mounted () {
    this.start()
  },
  destroyed () {
    this.zr.dispose()
    // cancelAnimationFrame(this.timer)
  }
}
</script>

<style lang='stylus'>

</style>
