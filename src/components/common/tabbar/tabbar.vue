<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}

</script>
<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #f6f6f6;
  z-index: 3;
}
</style>