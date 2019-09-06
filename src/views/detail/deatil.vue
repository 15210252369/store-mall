<template>
  <div>
    <detail-item class="nav"></detail-item>
    <scroll class="wrap" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base :goods="goods"></detail-base>
      <detailshopinfo :shop="shop"></detailshopinfo>
      <detailgoodsinfo :detailInfo="detailInfo" @imageLoad="imageLoad"></detailgoodsinfo>
    </scroll>
  </div>
</template>

<script>
import detailItem from './childComponents/detailItem.vue'
import detailSwiper from './childComponents/detailswiper.vue'
import detailBase from './childComponents/detailBase'
import detailshopinfo from './childComponents/detailShopInfo'
import detailgoodsinfo from './childComponents/detailgoodsinfo'
import scroll from 'components/common/scroll/scroll'
import { getDetail, Goods, Shop, GoodsParam } from 'network/detail'
export default {
  name: 'detail',
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      let data = res.result
      console.log(res)
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      //   this.detailInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //   if (data.rate.list) {
      //     this.commentInfo = data.rate.list[0]
      //   }
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.scroll.refresh()
    }
  },
  components: {
    detailItem,
    detailSwiper,
    detailBase,
    detailshopinfo,
    scroll,
    detailgoodsinfo
  }
}

</script>
<style  scoped>
.nav {
  position: relative;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 40;
}
.wrap {
  position: absolute;
  top: 44px;
  bottom: 44px;
}
</style>