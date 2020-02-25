<template>
    <div class="index">
        <!-- 左边导航部分 -->
        <div class="index_bars">
            <p class="index_bars_title">珠宝配饰分类</p>
            <ul class="index_bars_content"> 
                <li><a href="javascript:;" :class="isActive == '珠宝/砖石/翡翠/黄金' ? 'active' : ''"  @click = "toggle('珠宝/砖石/翡翠/黄金')">珠宝/砖石/翡翠/黄金</a></li>
                <li><a href="javascript:;" :class="isActive == 'ZIPPO/瑞士军刀/眼镜' ? 'active' : ''"  @click = "toggle('ZIPPO/瑞士军刀/眼镜')">ZIPPO/瑞士军刀/眼镜</a></li>
                <li><a href="javascript:;" :class="isActive == '饰品/流行首饰/时尚首饰' ? 'active' : ''"  @click = "toggle('饰品/流行首饰/时尚首饰')">饰品/流行首饰/时尚首饰</a></li>
                <li><a href="javascript:;" :class="isActive == '手表' ? 'active' : ''"  @click = "toggle('手表')">手表</a></li>
            </ul>
        </div>
        <!-- 右边部分 -->
        <div class="index_changes">
            <p class="index_changes_title">{{isActive}}</p>
            <div class="index_changes_condition">
                <div class="index_changes_condition_links">
                    <a href="javascript:;"  :class="store == '旗舰店' ? 'activeStore' : ''"  @click = "toggleStore('旗舰店')">旗舰店</a>
                    <a href="javascript:;"  :class="store == '专卖店' ? 'activeStore' : ''"  @click = "toggleStore('专卖店')">专卖店</a>
                    <a href="javascript:;"  :class="store == '专营店' ? 'activeStore' : ''"  @click = "toggleStore('专营店')">专营店</a>
                </div>
                <div class="index_changes_condition_radius">
                    <span class="index_changes_condition_radius_info">商家权人类型：</span>
                    <a href="javascript:;" @click="chooseR()">
                        <span v-if="!isR"></span>
                        <img src="../assets/icon_dxxz@2x.png" alt="" v-else>
                        R标</a>
                    <a href="javascript:;" @click="chooseTM()">
                        <span v-if="!isTM"></span>
                        <img src="../assets/icon_dxxz@2x.png" alt="" v-else>
                        TM标</a>
                </div>
                <div class="index_changes_condition_result">
                    <div class="index_changes_condition_result_A"  v-if="isR">
                       <span>下载专卖店-R标-资质清单</span>
                       <img src="../assets/icon_dxxz@2x.png" alt="">
                    </div>
                    <div class="index_changes_condition_result_A"  v-if="isTM">
                        <span>下载专卖店-TM标-资质清单</span>
                        <img src="../assets/icon_dxxz@2x.png" alt="">
                    </div>   
                </div>
            </div>
            <p class="index_changes_nide">您所需资费</p>
            <p class="index_changes_tip">查询结果仅供参考，详细内容请下载说明文档</p>
            <ul class="index_changes_money">
                <li class="index_changes_money_item">
                    <p class="index_changes_money_item_top">
                        <img src="../assets/icon_dpsj@2x(2).png" alt="">
                        <span class="index_changes_money_item_top_count">5000</span>
                        <span class="index_changes_money_item_top_company">元</span>
                    </p>
                    <p class="index_changes_money_item_middle">保证金</p>
                    <p class="index_changes_money_item_bottom">当经营多个类目时按照保证金最高的类目缴纳</p>
                </li>
                <li class="index_changes_money_item">
                    <p class="index_changes_money_item_top">
                        <img src="../assets/icon_dpsj@2x(2).png" alt="">
                        <span class="index_changes_money_item_top_count">3000</span>
                        <span class="index_changes_money_item_top_company">元</span>
                    </p>
                    <p class="index_changes_money_item_middle">软件服务年费</p>
                </li>
                <li class="index_changes_money_item">
                    <p class="index_changes_money_item_top">
                        <img src="../assets/icon_dpsj@2x(2).png" alt="">
                        <span class="index_changes_money_item_top_count">0.5~3%</span>
                    </p>
                    <p class="index_changes_money_item_middle">软件服务费费率</p>
                    <p class="index_changes_money_item_bottom">具体以下部规则说明内容为准</p>
                </li>
            </ul>
            <p class="index_changes_ruleDiscript">规则说明：</p>
            <ul class="index_changes_A">
                <li class="index_changes_A_item">
                    <p class="index_changes_A_item_small">数码相机/单反相机/摄像机</p>
                    <p class="index_changes_A_item_big">一级类目</p>
                </li>
                <li class="index_changes_A_item">
                    <p class="index_changes_A_item_small">5%</p>
                    <p class="index_changes_A_item_big">软件服务费费率</p>
                </li>
                <li class="index_changes_A_item">
                    <p class="index_changes_A_item_small">6万</p>
                    <p class="index_changes_A_item_big">软件服务费年费</p>
                </li>
                <li class="index_changes_A_item longest">
                    <p class="index_changes_A_item_small">18万</p>
                    <p class="index_changes_A_item_big">享受50%年费折扣优惠对应年销售额</p>
                </li>
                <li class="index_changes_A_item">
                    <p class="index_changes_A_item_small">60万</p>
                    <p class="index_changes_A_item_big">享受100%年费折扣优惠对应年销售额</p>
                </li>
            </ul>
            <ul class="index_changes_companyInfo">
                <li class="index_changes_companyInfo_items">
                    <p class="index_changes_companyInfo_items_title">公司证照资质</p>
                    <p class="index_changes_companyInfo_items_text">开店公司注册资本不低于人民币100万元，开店公司需具备一般纳税人资格</p>
                    <div class="index_changes_companyInfo_items_string"></div>
                </li>
                <li class="index_changes_companyInfo_items">
                    <p class="index_changes_companyInfo_items_title">服务类型品牌及授权要求</p>
                    <p class="index_changes_companyInfo_items_text">接受自荐品牌入驻；自荐品牌需提供商标注册证；开店公司需为35类服务类型商标的商标权人或其关联公司。</p>
                    <div class="index_changes_companyInfo_items_string"></div>
                </li>
                <li class="index_changes_companyInfo_items">
                    <p class="index_changes_companyInfo_items_title">店铺内经营品牌及授权要求</p>
                    <p class="index_changes_companyInfo_items_text">店铺内经营的商品品牌与服饰大类下招商的品牌入驻要求一致。</p>
                    <ul class="index_changes_companyInfo_items_itemA">
                        <li>接受自荐品牌入驻</li>
                        <li>自荐品牌需提供商标注册证</li>
                        <li>店铺内经营的品牌需提供以商标持有人为源头的二级内完整授权，若授权中的授权方为自然人，则需同时提供其亲笔签名的身份证复印件。</li>
                    </ul>
                    <div class="index_changes_companyInfo_items_string"></div>
                </li>
                <li class="index_changes_companyInfo_items">
                    <p class="index_changes_companyInfo_items_title">入驻优势</p>
                    <p class="index_changes_companyInfo_items_text">申请服饰的卖场型旗舰店，商家可通过自荐品牌提交申请，自荐评估内容包括但不限于企业实力图文介绍、品牌/商品详细介绍及规划、天猫店铺运营计划，满足以下任一条件，将有更高入驻机会：</p>
                    <ul class="index_changes_companyInfo_items_itemB">
                        <li>线下开设以服务类型商标命名的实体门店。需提供至少3张实体门店照片,照片内容需体现门店地址、店铺内经营的品牌商品(至少2个及以上,商品 图片上带有品牌</li>
                        <li>线上开设以服务类型商标命名的官方网店或独立APP,并提供以下任一资料</li>
                        <li> 在线商品有售卖记录 /li>
                        <li>提供后台销售记录并加盖官方网店或独立APP公司主体公章</li>
                        <li>提供已开设半年及以上的信息资料</li>
                    </ul>
                    <div class="index_changes_companyInfo_items_string"></div>
                </li>
            </ul>
            <p class="index_changes_method">入驻方式：</p>
            <p class="index_changes_invitation"><img src="../assets/icon_qlmrz@2x.png" alt="">邀约入驻</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            // 导航栏的条件判定
            isActive:"珠宝/砖石/翡翠/黄金",
            // 店面的条件呢判定
            store:'旗舰店',
            // 是否选中R标
            isR:true,
            // 是否选中TM
            isTM:false
        }
    },
    methods:{
        toggle(msg) {
            this.isActive = msg
        },
        toggleStore(msg) {
            this.store = msg
        },
        chooseR() {
            if(this.isTM == true){
                this.isTM = false
                this.isR = true
            }else {
                if(this.isR == true){
                    this.isR = false
                }else {
                    this.isR = true
                }
            }
        },
        chooseTM() {
            if(this.isR == true){
                this.isR = false
                this.isTM = true
            }else {
                if(this.isTM == true){
                    this.isTM = false
                }else {
                    this.isTM = true
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.index {
    height: 1551px;
    width: 1280px;
    margin: 50px auto;
    display: flex;
    color: #2A2A2A;
    background-color: #FFFFFF;
    &_bars {
        width: 260px;
        border-right: 1px solid rgba(238,238,238,1);
        &_title {
            display: inline-block;
            width: 180px;
            height: 69px;
            line-height: 69px;
            text-align: left;
            font-size: 16px;
            color: #2A2A2A;
            font-weight: bold;
            border-bottom: 1px solid rgba(231,231,231,1);
        }
        &_content {
            margin-top: 22px;
            li {
                height: 36px;
                list-style: none;
                line-height: 36px;
                text-align: left;
                
                a {
                    display: inline-block;
                    width: 220px;
                    text-decoration: none;
                    color: #2A2A2A;
                    padding-left: 40px;
                }
                .active {
                    background-color: #DA0B00;
                    color:white;
                }
                &:hover {
                    a{
                        color: #DA0B00
                    }
                    .active {
                        color: white;
                    }
                }
            }
        }
    }
    &_changes {
        width: 1020px;
        &_title {
            width: 940px;
            height: 70px;
            line-height: 70px;
            border-bottom: 1px solid rgba(231,231,231,1);
            text-align: left;
            font-size: 16px;
            margin: 0 auto;
        }
        &_condition {
            display: flex;
            justify-content: space-between;
            width: 940px;
            margin: 20px auto;
            align-items: center;
            &_links {
                a {
                    display: inline-block;
                    height: 36px;
                    line-height: 36px;
                    width: 90px;
                    border:1px solid rgba(236,236,236,1);
                    text-decoration: none;
                    color: #2A2A2A;
                    font-size: 14px;
                    &:hover {
                        color: #DA0B00;
                    }
                }
                .activeStore {
                        color: #DA0B00;
                        border-color: #DA0B00;
                    }
            }
            &_radius {
                font-size: 14px;
                width:300px;
                a {
                    color:#2A2A2A;
                    text-decoration: none;
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    margin-right: 18px;
                    span {
                        display: inline-block;
                        height: 17px;
                        width: 17px;
                        border-radius: 50%;
                        border:1px solid rgba(218,218,218,1);
                        vertical-align: middle;
                    }
                    img {
                        height: 18px;
                        vertical-align: middle;
                    }
                }
            }
            &_result {
                color: red;
                width: 240px;
                text-align: right;
                height: 30px;
                align-items: center;
                &_A{
                    img {
                        height: 19px;
                        width: 19px;
                        vertical-align: middle;
                        margin-left: 10px;
                    }
                }
            }
        }
        &_nide {
            font-size: 26px;
            margin: 55px 40px 0;
            text-align: left;
        }
        &_tip {
            font-size: 14px;
            color: #888888;
            margin: 12px 40px 0;
            text-align: left;
        }
        &_money {
            display: flex;
            margin-top: 28px;
            margin-left: 40px;
            &_item {
                list-style:none;
                width: 311px;
                height: 140px;
                background-color: #FFF5F2;
                text-align: left;
                margin-left: 4px;
                &_top {
                    color: #DA0B00;
                    margin: 30px 50px 0;
                    img {
                        height: 20px;
                    }
                    &_count {
                        font-size: 24px;
                    }
                    &_company {
                        font-size: 12px;
                    }
                }
                &_middle {
                    font-size: 14px;
                    color: #2A2A2A;
                    margin-top: 5px;
                    margin-left: 50px;
                }
                &_bottom {
                    color: #888888;
                    font-size: 5px;
                    margin-top: 5px;
                    margin-left: 50px;
                    width: 180px;
                }
            }
        }
        &_ruleDiscript {
            color: #2A2A2A;
            font-size: 14px;
            margin: 48px 40px 0;
            text-align: left;
        }
        &_A {
            display: flex;
            width: 940px;
            margin: 20px auto 0;
            border-bottom: 1px solid rgba(238,238,238,1);
            border-top: 1px solid rgba(238,238,238,1);
            height: 86px;
            text-align: left;
            &_item {
                list-style: none;
                width: 153px;
                &_small {
                    color: #888888;
                    font-size: 12px;
                    margin-top: 15px;
                }
                &_big {
                    color: #2B2B2B;
                    font-size: 14px;
                    margin-top: 10px;
                    width: 141px;
                }
            }
            .longest {
                width: 197px;
            }
        }
        &_companyInfo {
            width: 909px;
            margin: 48px 70px 0;
            text-align: left;
            color: red;
            &_items {
                list-style: decimal-leading-zero;
                &_title {
                    color: #2A2A2A;
                    font-size: 18px;
                    margin-top: 28px;
                }
                &_text {
                    color: #707070;
                    font-size: 14px;
                    margin-top: 15px;
                } 
                &_string {
                    width: 20px;
                    height: 2px;
                    background:rgba(222,43,34,1);
                    margin-top: 25px;
                }
                &_itemA,&_itemB{
                    color: #707070;
                    font-size: 14px;
                    width: 893px;
                    margin: 20px auto 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                &_itemA {
                    height: 104px;
                    li {
                        list-style: decimal;
                    }
                }
                &_itemB {
                    height: 208px;
                    li {
                        list-style: hebrew;
                    }
                }
            }
        }
        &_method {
            font-size: 14px;
            text-align: left;
            margin-left: 40px;
            color: #2A2A2A;
            margin-top: 10px;
        }
        &_invitation {
           color: #2A2A2A;
           font-size:18px;
           margin: 19px 40px 0;
           text-align: left;
           img {
               height: 26px;
               vertical-align: middle;
               margin-right: 6px;
           } 
        }
    }
}
</style>