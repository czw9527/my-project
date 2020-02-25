<template>
    <div class="index">
      <h1>个人中心</h1>
      <div class="index_ctx">
        <Echarts :title="title"/>
        <img :src="icon01" alt="">
      </div>
    </div>
</template>

<script>
import Echarts from '../components/Echarts'
import icon01 from '../assets/icon_dpsj@2x.png'

export default {
  data() {
    return {
      title:'手表',
      icon01
    }
  },
  components: {
    Echarts
  }
}
</script>

<style lang="scss" scoped>
.index {
    text-align: center;
    &_ctx {
      width: 800px;
      height: 500px;
    }
}
</style>