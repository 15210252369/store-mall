<template>
  <div class="outer">
    <div class="cart" @click="addCart">购物车</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}

</script>
<style  scoped>
.outer {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 44px;
  background: red;
}
.cart {
  line-height: 44px;
}
</style>