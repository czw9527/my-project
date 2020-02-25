<template>
  <div class="home">
    <!-- 头部文件 -->
    <Header/>
    <!-- 最上面带大背景图的部分 -->
    <Index/>
    <Title :title="'入驻解决方案'" :detailTitle ="'根据市场现状以及数据分析，提供多种方案，满足电商行业特点'" />
    <Program/>
    <!-- 背景为灰色的两块内容 -->
    <div class="bgGrap">  
      <Title :title="'天猫卖场型旗舰店入驻资质细则'" :detailTitle ="'实时掌握入驻鞋类箱包类目规则动态，入驻更加准确便捷'"/>
      <Regulation/>
      <Title :title="'相关案例'" :detailTitle ="'江雀女装入驻解决方案是行业标杆客户的理想选择江雀女装入驻解决方案是行业标杆客户的理想选择'" />
      <Case/>
    </div> 
    <Title :title="'江雀优势'" :detailTitle ="'6年行业经验，成功率98.2%行业领先，超300人的团队位您服务！'" />
    <Advantage/>
    <Title :title="'江雀风采'" :detailTitle ="'我们的团队思维活跃，专业水准高，我们把青春浇注在电子商务这个网店转让平台上'" />
    <PhotoWall/>
    <Title :title="'江雀服务区域风采'" :detailTitle ="'公司分部覆盖电商主要城市公司总部设在成都，并在杭州、广州、深圳、上海、北京、武汉设立分公司更多分公司正在筹建中，敬请期待！'" />
    <Map/>
    <!-- 尾部 -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '../components/Header'
import Index from '../components/Index'
import Title from '../components/Title'
import Program from '../components/Program'
import Regulation from '../components/Regulation'
import Case from '../components/Case'
import Advantage from '../components/Advantage'
import PhotoWall from '../components/Photowall'
import Map from '../components/Map'

export default {
  name: 'Home',
  data(){
    return {
      // title:'主标题123',
      // detail:'副标题456'
    }
  },
  components: {
    Footer,
    Header,
    Index,
    Title,
    Program,
    Regulation,
    Case,
    Advantage,
    PhotoWall,
    Map
  }
}
</script>
<style lang="scss" scoped>
.bgGrap {
  background-color: #F1F2F3;
  padding-top: 60px;
  }
</style>
