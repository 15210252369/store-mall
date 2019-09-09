<template>
  <div>
    <detail-item class="nav" @titleTab="titleTab" ref="nav"></detail-item>
    <scroll class="wrap" ref="scroll" @getPosition="getPosition">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base :goods="goods"></detail-base>
      <detailshopinfo :shop="shop"></detailshopinfo>
      <detailgoodsinfo :detailInfo="detailInfo" @imageLoad="imageLoad" ref="goodinfo"></detailgoodsinfo>
      <good-list :goods="getRecommend" ref="recommend"></good-list>
    </scroll>
    <detail-bottom @addCart="addCart"></detail-bottom>
  </div>
</template>

<script>
import detailItem from './childComponents/detailItem.vue'
import detailSwiper from './childComponents/detailswiper.vue'
import detailBase from './childComponents/detailBase'
import detailshopinfo from './childComponents/detailShopInfo'
import detailgoodsinfo from './childComponents/detailgoodsinfo'
import scroll from 'components/common/scroll/scroll'
import detailBottom from './childComponents/detailbottom'
import goodList from 'components/content/goodlist/goodlist'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from 'network/detail'
export default {
  name: 'detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      getRecommend: [],
      themeTop: [],
      currentIndex: 0
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      let data = res.result
      this.topImages = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      //   this.detailInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //   if (data.rate.list) {
      //     this.commentInfo = data.rate.list[0]
      //   }
    })
    getRecommend().then((res) => {
      this.getRecommend = res.data.list
      this.$refs.scroll.scroll.refresh()
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.scroll.refresh()
      this.$nextTick(() => {
        this.themeTop.push(0)
        this.themeTop.push(this.$refs.goodinfo.$el.offsetTop)
        this.themeTop.push(this.$refs.recommend.$el.offsetTop)
        this.themeTop.push(Number.MAX_VALUE)
      })
    },
    titleTab(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTop[index], 100)
    },
    getPosition(position) {
      let getY = -position.y
      let len = this.themeTop.length
      for (let i = 0; i < len; i++) {
        // if ((this.currentIndex !== i) && (i < len - 1 && getY >= this.themeTop[i] && getY < this.themeTop[i + 1]) || (i === len - 1 && getY >= this.themeTop[i])) {
        //   this.currentIndex = i
        //   this.$refs.nav.currentIndex = this.currentIndex
        // }
        if ((this.currentIndex !== i) && (getY > this.themeTop[i] && getY < this.themeTop[i + 1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    addCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      this.$store.dispatch('addCart', product)
    }
  },
  // updated() {
  //   this.themeTop = []
  //   this.themeTop.push(0)
  //   this.themeTop.push(this.$refs.goodinfo.$el.offsetTop)
  //   this.themeTop.push(this.$refs.recommend.$el.offsetTop)
  //   console.log(this.themeTop)
  // },
  components: {
    detailItem,
    detailSwiper,
    detailBase,
    detailshopinfo,
    scroll,
    detailgoodsinfo,
    goodList,
    detailBottom
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