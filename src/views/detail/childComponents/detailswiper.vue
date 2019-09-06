<template>
  <swiper class="detail">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  data() {
    return {
    }
  },
  props: {
    topImages: Array
  },
  components: {
    Swiper,
    SwiperItem
  }
}

</script>
<style  scoped>
.detail{
    height:300px;
}
</style>