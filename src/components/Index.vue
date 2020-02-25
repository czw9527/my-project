<template>
    <div class="index">
        <div class="index_fixedBanner" v-show="searchBarFixed">
            <div class="index_fixedBanner_link">
                    <div class="index_fixedBanner_link_as">
                        <a href="" class="index_fixedBanner_link_as_A">
                            <img src="../assets/icon_wyrz3@2x.png" alt="">
                            <span>我要入驻</span>
                        </a>
                        <a href="" class="index_fixedBanner_link_as_B">
                            <img src="../assets/icon_zxkf@2x (1).png" alt="">
                            <span>咨询客服</span>
                        </a>
                    </div>
                    <ul class="index_fixedBanner_link_list">
                        <li><img src="../assets/icon_tmrzrz2@2x.png" alt="">天猫入驻认证平台</li>
                        <li><img src="../assets/icon_10wqy2@2x.png" alt="">10万家企业都在用</li>
                        <li><img src="../assets/icon_xdsf2@2x.png" alt="">下店再收费</li>
                        <li><img src="../assets/icon_4txd2@2x.png" alt="">最快4天下店</li>
                    </ul>
            </div>
        </div>
        <div class="index_intr">
            <div class="index_intr_content">
                <div class="index_intr_content_item">
                    <img src="../assets/icon_home2@2x.png" alt="">
                    <ul class="index_intr_content_item_list">
                        <li><a href="javascript:;">首页</a></li>
                        <li><a href="javascript:;">入住解决方案</a></li>
                        <li><a href="javascript:;">珠宝配饰入驻解决方案</a></li>
                    </ul> 
                </div>
                <div class="index_intr_content_blank"></div>
                <p class="index_intr_content_bigText">天猫珠宝配饰入驻解决方案</p>
                <p class="index_intr_content_bigTextMenu">珠宝首饰的消费需求朝着个性化、多元化方向发展，珠宝企业深度挖掘特定 群体的消费偏好，在各自细分领域形成竞争优势。</p>
                <p class="index_intr_content_success">已经成功入驻天猫店铺<span>{{count}}</span>家</p>
                <div class="index_intr_content_new">
                    <ul :class="isActive == 1 ? 'water' : isActive == 2 ? 'node' : 'change'">
                        <li v-for="(item,index) of list" :key = index>10分钟前 {{item}} 成功下店</li>
                    </ul>
                </div>
                <div class="index_intr_content_link">
                    <div class="index_intr_content_link_as">
                        <a href="" class="index_intr_content_link_as_A">我要入驻</a>
                        <a href="" class="index_intr_content_link_as_B">咨询客服</a>
                    </div>
                    <ul class="index_intr_content_link_list">
                        <li><img src="../assets/icon_tmrzrz@2x.png" alt="">天猫入驻认证平台</li>
                        <li><img src="../assets/icon_10wqy@2x.png" alt="">10万家企业都在用</li>
                        <li><img src="../assets/icon_xdsf@2x.png" alt="">下店再收费</li>
                        <li><img src="../assets/icon_4txd@2x.png" alt="">最快4天下店</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="index_info">
            <div class="index_info_items local">
                <p class="index_info_items_short">精准数据定位</p>
                <p class="index_info_items_long">通过消费行为的量化，通过移动终端和各种设备形成大数据，由此进行数据抓取清洗、数据处理分析、数据建模评估应用等，以用户为中心，科学配置资源，为用户提供个性化的产品和服务。</p>
            </div>
            <div class="index_info_items masonry">
                <p class="index_info_items_short">深挖行业细分</p>
                <p class="index_info_items_long">江雀联合行业领头企业，在用户需求背景千变万化的背景下，深挖产业、技术、产品的变化趋势，可视化无所不在的信息，为企业运营谋划更多的真实可行的方向。</p>
            </div>
            <div class="index_info_items source">
                <p class="index_info_items_short">产业资源及生态</p>
                <p class="index_info_items_long">整合协同产业优质合作伙伴，优势互补，构建发展的命运共同体，为珠宝产业提供系统化深度解决方案。</p>
            </div>
            <div class="index_info_items technology">
                <p class="index_info_items_short">科技孵化平台</p>
                <p class="index_info_items_long">通过消费行为的量化，通用互联网的元素作支持，创造科技智能与传统的技术的科学结合。用技术手段让珠宝拥有更贴合当下，紧跟时代的功能与意义。过移动终端和各种设备形成大数据，由此进行数据抓取清洗、数据处理分析、数据建模评估应用等，以用户为中心，科学配置资源，为用户提供个性化的产品和服务。</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'index',
    data (){
        return {
            count : 1,
            list : ["食品矿泉水纯净水**山旗舰店","食品发方便面**山旗舰店","食品水果零食**山旗舰店"],
            isActive : 1,
            searchBarFixed : false
        }
    },
    mounted(){
        setInterval(()=>{
            if(this.count<1280){
                this.count++
            }
        },1);
        setInterval(()=> {
            this.isActive+=1;
            if (this.isActive > 3){
                this.isActive = 1;
            }
        },2000);
        window.addEventListener('scroll',this.handleSceoll)
    },
    methods: {
        handleSceoll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var offset = document.querySelector('.index_intr_content_link').getBoundingClientRect();
            var offsetTop = offset.y;
            console.log(offsetTop,scrollTop)
            if (offsetTop < scrollTop - 586) {
                this.searchBarFixed = true;
            }else {
                this.searchBarFixed = false
            }
        }
    },
    destroyed() {
        window.removeEventListener('scroll')
    }
}
</script>
<style lang="scss" scoped>
 .index {
     min-width: 1300px;
     &_fixedBanner {
            width: 100%;
            height:80px;
            background:rgba(255,255,255,1);
            box-shadow:0px 15px 30px 0px rgba(14,43,74,0.1);
            position: fixed;
            z-index: 999;
            top:0;
            &_link {    
                width: 1280px;
                margin: 20px auto;
                text-align: left;
                // color: #FFFFFF;
                display: flex;
                justify-content: space-between;
                &_as {
                    a {   
                        img {
                            height: 40px;
                            vertical-align: middle;
                        }
                        display: inline-block;
                        height: 40px;
                        width: 200px;
                        background-color: #DA0B00;
                        text-decoration: none;
                        color: white;
                        margin-right: 30px;
                        span {
                            font-size: 16px;
                            margin-left:48px;
                        }
                    }
                }
                    &_list {
                        display: flex;
                        justify-content: space-between;
                        flex-grow: 1;
                        margin-left: 120px;
                        li {
                            list-style: none;
                            font-size: 14px;
                            height: 50px;
                            align-items: center;
                            img {
                                height:50px;
                                width: 50px;
                                margin-right: 12px;
                                vertical-align: middle;
                            }
                        }
                    }
            }
     }
     &_intr {
         background-image: url("../assets/img_bannerbg@2x.png");
         background-position: center;
         background-size: cover;
         background-repeat: no-repeat;
         height: 580px;
         padding-top:23px; 
         &_content {
             width: 1280px;
             margin: 0 auto;
             text-align: left;
             color: #FFFFFF;
            &_item {
                display: flex;
                img {
                    width: 14px;
                    height: 14px;
                    margin-right: 8px;
                }
                &_list {
                    display: flex;
                    width: 249px;
                    justify-content: space-between;
                    list-style: none;
                    a {
                        color: #FFFFFF;
                        font-size: 12px;
                        text-decoration: none;
                    }
                    li+li::before {
                        content: ">";
                        color: white;
                        margin-right: 3px;
                    }
                }
            }
            &_blank {
                height: 1px;
                opacity: 0.3;
                margin-top: 24px;
                background-color: #FFFFFF;
            }
            &_bigText {
                font-size: 30px;
                margin-top: 60px;
                font-weight: bold;
            }
            &_bigTextMenu {
                width: 528px;
                font-size: 16px;
                margin-top: 30px;
                overflow: hidden;
                text-overflow: ellipsis; /* 文本溢出时显示省略号来代表被修剪的文本 */
                display: -webkit-box; /* 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 */
                -webkit-box-orient: vertical; /* 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 */
                -webkit-line-clamp: 2;
            }
            &_success {
                font-weight: bold;
                font-size: 22px;
                margin-top: 52px;
                span {
                    background-color: red;
                    margin: 0 2px;
                }
            }
            &_new {
                font-size: 14px;
                margin-top: 19px;
                height: 18px;
                overflow: hidden;
                ul {
                   &.water {margin-top: 0px;}
                   &.node {margin-top: -18px;}
                   &.change {margin-top: -36px;}
                    li {
                      height: 18px;
                      list-style: none;
                  }
                } 
            }
            &_link {
                margin-top: 150px;
                display: flex;
                justify-content: space-between;
                &_as {
                   width:  430px;
                   display: flex;
                   justify-content: space-between;
                   a {
                       display: inline-block;
                       background-color: white;
                       width: 110px;
                       height: 52px;
                       line-height: 52px;
                       font-size: 18px;
                       text-decoration: none;
                       color: #2B2B2B;
                       padding-left: 90px;
                   }
                   &_A {
                       background-image: url("../assets/icon_wyrz@2x.png");
                       background-repeat: no-repeat;
                       background-position: 0;
                       background-size: 52px 52px;
                       &:hover {
                            background-image: url("../assets/icon_wyrzh2@2x.png");
                            color: red;
                       }
                   }
                   &_B {
                       background-image: url("../assets/icon_zxkf@2x.png");
                       background-repeat: no-repeat;
                       background-position: 0;
                       background-size: 52px 52px;
                       &:hover {
                            background-image: url("../assets/icon_zxkfh2@2x.png");
                            color: red;
                       }
                   }
                }
                &_list {
                    display: flex;
                    justify-content: space-between;
                    flex-grow: 1;
                    margin-left: 120px;
                    li {
                        list-style: none;
                        font-size: 14px;
                        height: 50px;
                        align-items: center;
                        img {
                            height:50px;
                            width: 50px;
                            margin-right: 12px;
                            vertical-align: middle;
                        }
                    }
                }
            }
            
         }
     }
     &_info {
         height: 364px;
         width: 1280px;
         margin: 0 auto;
         display: flex;
         justify-content: space-between;
         & .local {background-image: url("../assets/online-tracking@2x.png");}
         & .masonry {background-image: url("../assets/sketch@2x.png");}
         & .source {background-image: url("../assets/radar chart@2x.png");}
         & .technology {background-image: url("../assets/online-tracking@2x.png");}
         &_items {
             width: 240px;
             background-position-x: 0;
             background-repeat: no-repeat;
             background-size: 50px 50px;
             text-align: left;
             margin-top: 60px;
             &_short {
                 color: #2A2A2A;
                 font-size: 16px;
                 margin-top: 96px;
             }
             &_long {
                 color: #888888;
                 font-size: 14px;
                 margin-top: 15px;
                 overflow : hidden;
                 text-overflow: ellipsis;
                 display: -webkit-box;
                 -webkit-line-clamp: 5;
                 -webkit-box-orient: vertical;
             }
         }
     }
}
</style>