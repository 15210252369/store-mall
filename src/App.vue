<template>
  <div id="app">
    <tabMain></tabMain>
    <router-view></router-view>
  </div>
</template>

<script>
import tabMain from 'components/content/main'
export default {
  name: 'app',
  components: {
    tabMain
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
