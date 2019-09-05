<template>
  <div>
    <tabbar class="tab">
      <tabitem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />

        <div slot="item-text">首页</div>
      </tabitem>
      <tabitem path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">分类</div>
      </tabitem>
      <tabitem path="/shop">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />

        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />

        <div slot="item-text">购物车</div>
      </tabitem>
      <tabitem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt />

        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />

        <div slot="item-text">我的</div>
      </tabitem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabitem from 'components/common/tabbar/tabitem'
export default {
  data() {
    return {
    }
  },
  components: {
    tabbar,
    tabitem
  }
}

</script>
<style  scoped>
.tab{
  background:#fff;
  z-index: 90;
}
</style>