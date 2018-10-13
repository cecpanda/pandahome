<template>
  <div id='star'>
    <!-- <canvas id="canvas">您的浏览器不支持canvas</canvas> -->
  </div>
</template>

<script>
import zrender from 'zrender'

export default {
  name: 'Star',
  data () {
    return {
      num: 500,
      stars: [],
      index: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  methods: {
    async draw () {
      await this.initStar()

      let zr = zrender.init(document.getElementById('star'), {
        renderer: 'canvas',
        width: this.width,
        height: this.height
      })
      let bg = new zrender.Rect({
        shape: {
          x: 0,
          y: 0,
          width: this.width,
          height: this.height
        },
        style: {
          fill: '#000',
          stroke: '#000'
        }
      })
      zr.add(bg)

      for (let i = 0; i < this.num; i++) {
        let star = this.stars[i]
        // 透明度判断，从0到1
        if (star.alpha <= 0) {
          star.alpha = 0
          star.ra = -star.ra
          star.vx = Math.random() * 0.2 - 0.1
          star.vy = Math.random() * 0.2 - 0.1
        } else if (star.alpha > 1) {
          star.alpha = 1
          star.ra = -star.ra
        }
        star.x += star.vx
        // x轴坐标判断
        if (star.x >= this.width) {
          star.x = 0
        } else if (star.x < 0) {
          star.x = this.width
          star.vx = Math.random() * 0.2 - 0.1
          star.vy = Math.random() * 0.2 - 0.1
        }
        star.y += star.vy
        // y轴坐标判断
        if (star.y >= this.height) {
          star.y = 0
          star.vy = Math.random() * 0.2 - 0.1
          star.vx = Math.random() * 0.2 - 0.1
        } else if (star.y < 0) {
          star.y = this.height
        }

        let s = new zrender.Circle({
          shape: {
            cx: star.x,
            cy: star.y,
            r: star.r
          },
          style: {
            fill: '#fff',
            stroke: '#fff'
          }
        })
        zr.add(s)
      }
    },
    initStar () {
      for (let i = 0; i < this.num; i++) {
        let star = {
          x: Math.round(Math.random() * this.width),
          y: Math.round(Math.random() * this.height),
          r: Math.random() * 3,
          ra: Math.random() * 0.05,
          alpha: Math.random(),
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1
        }
        this.stars.push(star)
      }
    }
  },
  mounted () {
    this.draw()
  },
  destroyed () {
  }
}
</script>

<style lang='stylus' scoped>

</style>
