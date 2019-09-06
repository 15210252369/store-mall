<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    this.scroll.on('scroll', position => {
      this.$emit('getPosition', position)
    })
    this.scroll.scrollTo(0, 0)
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      this.scroll.finishPullUp()
    })
  },
  methods: {
    refresh() {
      this.scroll.refresh()
    }
  }
}

</script>
<style  scoped>
</style>