<template>
  <div ref='logo' id='logo'></div>
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
        stroke: '#fff'
      },
      origin: [25, 25],
      rotation: 0
    })
    // logo.animate('rotation', true)
    //   .when(2000, 100)
    //   .start()
    logo.animateTo({
      rotation: 10
    }, 10000)
    zr.add(logo)
  }
}
</script>

<style lang='stylus' scoped>
#logo
  position fixed
  top 0
  left 0
  z-index 10
</style>
