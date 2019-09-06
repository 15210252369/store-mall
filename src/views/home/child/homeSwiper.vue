<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="tabCon" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banner: Array,
    default() {
      return []
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    tabCon() {
      if (!this.isLoad) {
        this.$emit('tabCon')
      }
      this.isLoad = true
    }
  }
}

</script>
<style  scoped>
</style>