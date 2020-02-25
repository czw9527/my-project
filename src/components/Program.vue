<template>
    <div class="index">
        <div class="index_banner">
            <ul class="index_banner_items">
                <li class="index_banner_items_item" :class="isActive=='珠宝首饰'? 'active' : ''"  @click="toggle('珠宝首饰')"><a href="javascript:;">珠宝首饰</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='钻石'? 'active' : ''"  @click="toggle('钻石')"><a href="javascript:;">钻石</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='黄金'? 'active' : ''"  @click="toggle('黄金')"><a href="javascript:;">黄金</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='翡翠'? 'active' : ''"  @click="toggle('翡翠')"><a href="javascript:;">翡翠</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='打火机'? 'active' : ''"  @click="toggle('打火机')"><a href="javascript:;">打火机</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='眼镜'? 'active' : ''"  @click="toggle('眼镜')"><a href="javascript:;">眼镜</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='手表'? 'active' : ''"  @click="toggle('手表')"><a href="javascript:;">手表</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='智能手表'? 'active' : ''"  @click="toggle('智能手表')"><a href="javascript:;">智能手表</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='儿童手表'? 'active' : ''"  @click="toggle('儿童手表')"><a href="javascript:;">儿童手表</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='饰品'? 'active' : ''"  @click="toggle('饰品')"><a href="javascript:;">饰品</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='隐形眼镜'? 'active' : ''"  @click="toggle('隐形眼镜')"><a href="javascript:;">隐形眼镜</a><div></div></li>
                <li class="index_banner_items_item" :class="isActive=='卡通饰品'? 'active' : ''"  @click="toggle('卡通饰品')"><a href="javascript:;">卡通饰品</a><div></div></li>
            </ul>
            <a href="" class="index_banner_more">更多方案</a>
        </div>
        <div class="index_content">
            <div class="index_content_echarts">
                <div id="main" class="index_content_echarts_main"></div>
                <div class="index_content_echarts_source">
                    <div class="index_content_echarts_source_store">商家源头</div>
                    <ul class="index_content_echarts_source_intr">
                        <li>批发商</li>
                        <li>工厂</li>
                        <li>代工厂</li>
                        <li>线下门店</li>
                        <li>零售商</li>
                        <li>网店经营者</li>
                        <li>创业者</li>
                    </ul>
                </div>
            </div>
            <div class="index_content_situtation">
                <p class="index_content_situtation_title">家装家居家纺解决方案</p>
                <div class="index_content_situtation_content">
                    <p class="index_content_situtation_content_title">行业现状</p>
                    <ul class="index_content_situtation_content_text">
                        <li>珠宝首饰的消费需求朝着个性化、多元化方向发展，珠宝企业深度挖掘特定群体的消费偏好，在各自细分领域形成竞争优势。</li>
                        <li>中国珠宝首饰行业已经呈现差异化竞争局面，相同类型的企业之间具有较强的竞争性，不同类型的企业之间互补性大于竞争性。</li>
                        <li>市场竞争还是以低层次的价格竞争为主，由此导致了虚假打折、以次充好、以假充真等现象的发生。</li>
                    </ul>
                </div>
                <div class="index_content_situtation_content">
                    <p class="index_content_situtation_content_title">对应方案</p>
                    <ul class="index_content_situtation_content_text">
                        <li>鼓励企业开展个性化定制、柔软化生产，培育精益求精的工匠精神，为产品注入独特的价值，为执着注入极致的追求，倡导品牌价值，重塑匠心精神</li>
                        <li>促进并购、置换、联盟等等企业发展方式，搭建行业交流平台，促进优势企业的强强联合，实现产业资源整合。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name :'Program',
    data (){
        return {
            isActive:'珠宝首饰'
        }
    },
    methods: {
        toggle(msg) {
            var data = [];
            //生成随机的7000到9000的数据文件
            for (let i = 0; i<9 ; i++){
                var num = Math.floor(Math.random()*2000 + 7000)
                data.push(num);
                data = data.sort((a,b)=> {return b-a});
            }
            var dataAxis = '';
            this.isActive = msg;
            if(msg == '珠宝首饰') {
                data = [8674, 8509, 8321, 8152, 8123,8011,7954,7852,7561];//珠宝销量柱形图，数据固定
                dataAxis = ['周大福', '周生生', '六福珠宝', '老凤祥', '周大生', '潮宏基CHJ', 'BAI菜百首饰BAI菜百首饰','老庙','明牌珠宝']
            }else if (msg == '钻石') {
                dataAxis = ['DR', '周大福', '乐维斯', '周生生', '老凤祥', '金伯利', '戴梦得','谢瑞麟','六福']
            }else if (msg == '黄金') {
                dataAxis = ['周大福', '老凤祥', '周生生', '六福', '莱百首饰', '老庙黄金', '明牌珠宝','百泰首饰','中国黄金']
            }else if (msg == '翡翠') {
                dataAxis = ['七彩云南', '东方金钰', '传世翡翠', '建兴利', '莱百首饰', '老凤祥', '张铁军','玉翠山庄','翡翠纪']
            }else if (msg == '打火机') {
                dataAxis = ['ZIPPO', 'S.T.Dupont', '佐罗', '百诚', '新海', '虎牌', '草蜢','中邦','可利福']
            }else if (msg == '眼镜') {
                dataAxis = ['博士', '亮视点', '大明眼镜', '吴良材', '大光明', '精工眼睛', '茂昌','睛姿','宝岛']
            }else if (msg == '手表') {
                dataAxis = ['浪琴', '欧米茄', '天梭', '依波表', '卡西欧', '精工', '西铁城','梅花镖','上海牌']
            }else if (msg == '智能手表') {
                dataAxis = ['苹果', '华为', '佳明', '颂拓', '三星', '索尼', '乐活','荣耀','宜准']
            }else if (msg == '儿童手表') {
                dataAxis = ['小天才', '360儿童', '华为', '搜狗糖猫', 'MI小米', '科大讯飞', '乐视','读书郎','XUN小寻']
            }else if (msg == '饰品') {
                dataAxis = ['哎呀呀', '新光', '美爆', '威妮华', '明辉七色花', '西子', '流行美','头彩','石头记']
            }else if (msg == '隐形眼镜') {
                dataAxis = ['安市优', '博士伦', '海昌', '视康', '卫康', '库博', '海妮恩','科莱博','菲士康']
            }else if (msg == '卡通饰品') {
                dataAxis = ['欧衣格', '罗伊斯', '果奇', '卡美斯', '帝图', '易瑞车品', 'Napolex','KOOK','唐诗']
            }
            this.$chart.line1('main', this.isActive, data, dataAxis);//加载echarts柱形图
        }
    },
    mounted() {
        this.$chart.line1('main',this.isActive,[8674, 8509, 8321, 8152, 8123,8011,7954,7852,7561],['周大福', '周生生', '六福珠宝', '老凤祥', '周大生', '潮宏基CHJ', 'BAI菜百首饰','老庙','明牌珠宝']);
    }
}
</script>
<style lang="scss" scoped>
.index {
    width: 1280px;
    margin: 60px auto;
    &_banner {
        display: flex;
        justify-content: space-between;
        &_items {
          display: flex;
          justify-content: space-between;
          width: 960px;
            &_item {
                list-style: none;
                height: 14px;
                width: 56px;
                a {
                    color: #2B2B2B;
                    font-size: 14px;
                    text-decoration: none;
                    font-weight: bold;
                }
            }
            .active {
             a {
                 color: red;
             }
             div {
                 background-color: red;
                 height: 2px;
                 width: 56px;
                 opacity: 0.5;
                 border-radius: 2px;
                 margin: 10px auto;
             }
           }
        }
        &_more {
            text-decoration: none;
            color: #2E2E2E;
            font-size: 14px;
            &:active {
                color: red;
            }
        }
    }
    &_content {
        display: flex;
        justify-content: space-between;
        &_echarts {
            &_main {
                width: 800px;
                height: 400px;
                margin-top: 51px;
            }
            &_source {
                width:790px;
                height:65px;
                background:rgba(241,242,243,1);
                margin-top: 43px;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                align-items: center;
                color: #2B2B2B;
                &_store {
                  height: 20px;
                  background-image: url("../assets/icon_sjyt@2x.png");
                  background-position: 0;
                  background-repeat: no-repeat;
                  background-size: 20px 20px;
                  padding-left: 27px;
                  margin-left: 34px;
                }
                &_intr {
                    display: flex;
                    justify-content: space-around;
                    width: 636px;
                    height: 20px;
                    border-left: 2px solid rgba(214,214,214,1);
                    li {
                        list-style: none;
                    }
                    li+li:before {
                      content: "/";
                      margin-right:22px;
                    }
                }
            }
        }
        &_situtation {
            color: #2B2B2B;
            text-align: left;
            flex-grow: 1;
            margin-left:80px; 
            &_title {
                font-weight: bold;
                font-size: 18px;
                margin-top: 73px;
            }
            &_content {
                margin-top: 40px;
                &_title {
                    font-size:16px;
                }
                &_text {
                    font-size:14px;
                    li {
                        margin-top:21px;
                        list-style: disc;
                    }
                }
            }
        }
    }
}
</style>