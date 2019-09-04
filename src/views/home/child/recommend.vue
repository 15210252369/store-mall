<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
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
    recommend: Array,
    default() {
      return []
    }
  }
}

</script>
<style  scoped>
.recommend {
  display: flex;
  font-size:12px;
  text-align: center;
  padding: 20px 0 30px;
  border-bottom: 5px solid #ccc;
}
.item {
  flex: 1;
}
.item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
  margin-top:10px;
}
</style>