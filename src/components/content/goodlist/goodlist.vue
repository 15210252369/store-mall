<template>
  <div class="goods">
    <good-item v-for="(item,index) in goods" :key="index" :good="item"></good-item>
  </div>
</template>

<script>
import goodItem from './gooditem'
export default {
  data() {
    return {
    }
  },
  props: {
    goods: Array
  },
  components: {
    goodItem
  }
}

</script>
<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3px;
  position: sticky;
}
</style>