<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
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
<style  scoped>
.navbar {
  display: flex;
  height: 44px;
  box-shadow: 1px 1px 1px rgba(100, 100, 100, 0.1);
}

.center {
  flex: 1;
}
</style>
