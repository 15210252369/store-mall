<template>
  <div>
    <navbar class="title">
      <div slot="center">购物车</div>
    </navbar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend :recommend="recommend"></recommend>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import homeSwiper from 'views/home/child/homeSwiper'
import recommend from 'views/home/child/recommend'
import { getMultidata } from 'network/home'
export default {
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    getMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },
  components: {
    navbar,
    homeSwiper,
    recommend
  }
}

</script>
<style  scoped>
.title {
  text-align: center;
  background: var(--color-tint);
  line-height: 44px;
  color: #fff;
}
</style>