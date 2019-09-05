<template>
  <div>
    <navbar class="title">
      <div slot="center">购物车</div>
    </navbar>
    <scroll class="wrap" ref="scroll" @getPosition="getPosition" @pullingUp="loadMore">
      <home-swiper class="swiper" :banner="banner"></home-swiper>
      <recommend :recommend="recommend"></recommend>
      <tab-control></tab-control>
      <feature :title="['流行','新款','精选']" @tabClick="tabClick"></feature>
      <good-list :goods="goods[currentType].list"></good-list>
    </scroll>
    <back-top @click.native="backTo" v-show="isShow"></back-top>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import homeSwiper from 'views/home/child/homeSwiper'
import tabControl from 'components/content/tabControl'
import recommend from 'views/home/child/recommend'
import feature from 'components/content/feature.vue'
import goodList from 'components/content/goodlist/goodlist'
import scroll from 'components/common/scroll/scroll'
import backTop from 'components/content/backTop'
import { getMultidata, getGoods } from 'network/home'
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: false
    }
  },
  created() {
    this.getMultidata()
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTo() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    getPosition(position) {
      this.isShow = (-position.y > 1000) ? true : false
    },
    loadMore(pullingUp) {
      this.getGoods(this.currentType)

    },
    /*
      网络请求
    * */
    getMultidata() {
      getMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getGoods(type) {
      let page = this.goods[type].page + 1
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
      this.goods[type].page + 1
    }
  },
  components: {
    navbar,
    homeSwiper,
    recommend,
    tabControl,
    feature,
    goodList,
    scroll,
    backTop
  }
}

</script>
<style  scoped>
.title {
  position: relative;
  left: 0;
  top: 0;
  z-index: 90;
  right: 0;
  text-align: center;
  background: var(--color-tint);
  line-height: 44px;
  color: #fff;
}

.wrap {
  position: absolute;
  top: 44px;
  bottom: 49px;
  z-index: 20;
  overflow: hidden;
}
</style>