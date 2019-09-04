<template>
  <div class="tab-item" @click="changePath">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="isColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    path: String,
    isStyle: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isColor() {
      return this.isActive ? { color: this.isStyle } : ""
    }
  },
  methods: {
    changePath() {
      this.$router.replace(this.path)
    }
  }
}

</script>
<style  scoped>
.tab-item {
  flex: 1;
  text-align: center;
}
.tab-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>