<template>
  <div ref='logo' id='logo' title='可讴工作室'></div>
</template>

<script>
import zrender from 'zrender'

export default {
  name: 'Logo',
  mounted () {
    let zr = zrender.init(this.$refs['logo'], { width: 50, height: 50 })
    let logo = new zrender.Star({
      shape: {
        cx: 25,
        cy: 25,
        n: 4,
        r: 25,
        r0: 10
      },
      style: {
        fill: '#fff',
        stroke: '#fff',
        shadowBlur: 8,
        shadowColor: '#000',
        shadowOffsetX: 5,
        shadowOffsetY: 5
      },
      origin: [25, 25],
      rotation: 1
    })
    logo.animateTo({
      rotation: 500
    }, 300000)
    zr.add(logo)
  }
}
</script>

<style lang='stylus' scoped>
#logo
  position fixed
  top 0
  left 10
  z-index 10
</style>
