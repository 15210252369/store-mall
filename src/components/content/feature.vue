<template>
  <div class="wrapper">
    <div class="wrap">
      <div
        class="wrap-item"
        v-for="(item,index) in title"
        :key="index"
        @click="handleChange(index)"
        :class="{active:currentIndex===index}"
      >
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: Array
  },
  methods: {
    handleChange(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}

</script>
<style  scoped>
.wrap {
  display: flex;
  text-align: center;
  height: 44px;
  line-height:44px;
}
.wrap-item {
  flex: 1;
}
.wrap-item span {
  padding: 5px;
}
.wrap-item.active span {
  border-bottom: 2px solid var(--color-high-text);
}
.wrapper {
  position: sticky;
  top: 44px;
  z-index: 2;
  background:#fff;
}
</style>