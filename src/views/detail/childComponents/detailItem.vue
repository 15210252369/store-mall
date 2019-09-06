<template>
  <div>
    <nav-bar>
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt class="back" @click="$router.back()" />
      </div>
      <div slot="center" class="title">
        <div
          class="item"
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:currentIndex===index}"
          @click="change(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/navbar'
export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    change(index) {
      this.currentIndex = index
    }
  },
  components: {
    navBar
  }
}

</script>
<style  scoped>
.title {
  display: flex;
  font-size: 15px;
}
.item {
  flex: 1;
  text-align: center;
  margin-top: 15px;
}
.back {
  margin: 15px 0 0 10px;
}
.active {
  color: var(--color-tint);
}
</style>