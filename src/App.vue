<template>
  <div id="app">
    <tabMain v-show="this.$route.meta.show"></tabMain>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabMain from 'components/content/main'
export default {
  name: 'app',
  data() {
    return {
      isShow: true
    }
  },
  components: {
    tabMain
  },
  watch: {
    $route(e) {
      if (e.name === 'detail') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
