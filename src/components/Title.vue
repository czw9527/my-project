<template>
  <div>
    <p class="title">{{title}}</p>
    <p class="detailTitle">{{detailTitle}}</p>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  props:['title','detailTitle']
}
</script>
<style lang="scss" scoped>
.title {
  color: #2B2B2B;
  font-size: 30px;
  margin-bottom: 14px;
  font-weight:bold;
}
.detailTitle {
  color: #888888;
  font-size: 14px;
}
</style>
