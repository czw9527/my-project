<template>
    <div class="index">
        <div class="index_items" v-for="(item,index) of lists" :key="index">
            <a href="javasscript:;" class="index_items_link"></a>
            <p class="index_items_title">{{item.title}}</p>
            <img :src=item.img alt="" class="index_items_image">
            <div class="index_items_time">
                <span><img src="../assets/icon_fbsj@2x(6).png" alt="">9天下店铺</span>
                <span><img src="../assets/icon_xdsj@2x(1).png" alt="">下单时间</span>
                <span>2019-04-19</span>
            </div> 
            <p class="index_items_intr">下店5个月业绩</p>
            <ul class="index_items_achievement">
                <li class="index_items_achievement_items">
                    <p class="index_items_achievement_items_money">2050.04万</p>
                    <p class="index_items_achievement_items_month">6月</p>
                </li>
                <li class="index_items_achievement_items">
                    <p class="index_items_achievement_items_money">2200.04万</p>
                    <p class="index_items_achievement_items_month">7月</p>
                </li>
                <li class="index_items_achievement_items">
                    <p class="index_items_achievement_items_money">2825.04万</p>
                    <p class="index_items_achievement_items_month">8月</p>
                </li>
                <li class="index_items_achievement_items">
                    <p class="index_items_achievement_items_money">2600.04万</p>
                    <p class="index_items_achievement_items_month">9月</p>
                </li>
                <li class="index_items_achievement_items">
                    <p class="index_items_achievement_items_money">2090.04万</p>
                    <p class="index_items_achievement_items_month">10月</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import icon01 from '../assets/img_3c@2x.png'
import icon02 from '../assets/img_3c@2x(4).png'
import icon03 from '../assets/img_3c@2x(1).png'
import icon04 from '../assets/img_3c@2x(5).png'
import icon05 from '../assets/img_3c@2x(2).png'
import icon06 from '../assets/img_3c@2x(6).png'
import icon07 from '../assets/img_3c@2x(3).png'
import icon08 from '../assets/img_3c@2x(7).png'

export default {
    data() {
        return {
            lists: [
                {title:'喜***深圳专卖店', img:icon01},
                {title:'六***珠宝官旗舰店', img:icon02},
                {title:'周***福专营店', img:icon03}, 
                {title:'米***旗舰店', img:icon04}, 
                {title:'曼***珠宝旗舰店', img:icon05}, 
                {title:'金***福旗舰店', img:icon06}, 
                {title:'诗***珠宝旗舰店', img:icon07}, 
                {title:'六***福旗舰店', img:icon08}
                ]
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
    width: 1280px;
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 60px;
    &_items {
        width: 630px;
        height: 200px;
        background-color: #FFFFFF;
        margin-top: 20px;
        position: relative;
        &_link {
            width: 630px;
            height: 200px;
            z-index: 10;
            position: absolute;
            top: 0;
            left: 0;
        }
        &_image {
            width: 150px;
            height: 150px;
            position:absolute;
            top: 25px;
            left: 28px;
        }
        &_title {
            color: #2B2B2B;
            font-size: 16px;
            position: absolute;
            top: 43px;
            left: 210px;
        }
        &_time {
            color: #888888;
            font-size: 12px;
            position: absolute;
            top: 67px;
            left: 210px;
            span {
                margin-right:19px;
                img {
                width: 12px;
                vertical-align: middle;
                margin-right:5px;
            }
          } 
        }
        &_intr {
            color: #2B2B2B;
            font-size: 12px;
            position: absolute;
            top: 102px;
            left: 210px;
        }
        &_achievement {
            position: absolute;
            top: 126px;
            left: 210px;
            display: flex;
            &_items {
                list-style: none;
                margin-right: 16px;
                text-align: left;
                &_money {
                    color: #2B2B2B;
                    font-size: 14px;
                }
                &_month {
                    color: #ABABAB;
                    font-size:12px;
                    margin-top: 5px;
                }
            }
        }
    }
}
// hover 样式
.index_items_link:hover + .index_items_title{
    color: red;
}
.index_items_link:hover {
    box-shadow:0px 15px 30px 0px rgba(28,51,74,0.07);
}
</style>