<template>
    <div class="index">
        <div class="index_map">
            <div class="index_map_content">
                <div class="index_map_content_items">
                    <p class="index_map_content_items_top">更全覆盖</p>
                    <p class="index_map_content_items_middle">业务覆盖已经覆盖全国<span>265</span>个城市，设立<span>9</span>家全资分公司</p>
                    <p class="index_map_content_items_bottom">9<span>家</span></p>
                </div>
                <div class="index_map_content_items">
                    <p class="index_map_content_items_top">专业客服</p>
                    <p class="index_map_content_items_middle">分公司所有客服人员达到<span>1682</span>人</p>
                    <p class="index_map_content_items_bottom">1682<span>人</span></p>
                </div>
                <div class="index_map_content_items">
                    <p class="index_map_content_items_top">客户群体</p>
                    <p class="index_map_content_items_middle">江雀成立至今已为<span>13000+</span>客户提供服务</p>
                    <p class="index_map_content_items_bottom">13000<span>+</span></p>
                </div>
            </div>
        </div>
        <div class="index_show">
            <div class="index_show_items">
                <img src="../assets/icon_zjbz@2x.png" alt="">
                <p class="index_show_items_big">资金保障</p>
                <p class="index_show_items_small">提供买卖双方资金担保交易更放心</p>
            </div>
            <div class="index_show_items">
                <img src="../assets/icon_zsdy@2x.png" alt="">
                <p class="index_show_items_big">真实店源</p>
                <p class="index_show_items_small">人工筛选确保店铺信息真实可靠无虚假</p>
            </div>
            <div class="index_show_items">
                <img src="../assets/icon_zyff@2x.png" alt="">
                <p class="index_show_items_big">资源丰富</p>
                <p class="index_show_items_small">同淘宝、天猫近30个平台合作买卖更便捷</p>
            </div>
            <div class="index_show_items">
                <img src="../assets/icon_fwyz@2x.png" alt="">
                <p class="index_show_items_big">服务优质</p>
                <p class="index_show_items_small">专业团队为您提供24小时1500客服待命</p>
            </div>
            <div class="index_show_items">
                <img src="../assets/icon_flzc@2x.png" alt="">
                <p class="index_show_items_big">法律支援</p>
                <p class="index_show_items_small">交易签订具有法律效益合同提供法律支持</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.index {
    margin-top: 50px;
    &_map {
        background-image: url("../assets/img_map@2x.png");
        height: 777px;
        background-size: cover;
        &_content {
            width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            &_items {
                width: 423px;
                height: 185px;
                background-color: #FFFFFF;
                margin-top: 14px;
                text-align: left;
                &_top {
                    width:72px;
                    height:18px;
                    font-size:18px;
                    font-family:MicrosoftYaHei-Bold,MicrosoftYaHei;
                    font-weight:bold;
                    color:rgba(43,43,43,1);
                    line-height:18px;
                    margin: 35px 60px 0;
                }
                &_middle {
                    width:271px;
                    height:33px;
                    font-size:14px;
                    font-family:MicrosoftYaHei;
                    color:rgba(62,62,62,1);
                    line-height:16px;
                    margin: 14px 60px 0;
                    span {
                        color: red;
                    }
                }
                &_bottom {
                    height:40px;
                    font-size:40px;
                    color:rgba(218,11,0,1);
                    line-height:40px;
                    margin: 10px 60px;
                    span {
                        font-size: 14px;
                    }
                }
            }
        }
    }
    &_show {
        width: 1280px;
        margin: 43px auto;
        display: flex;
        justify-content: space-between;
        &_items {
        position: relative;
        width: 256px;
            img {
                width: 34px;
                height: 34px;
                position: absolute;
                top: 0;
                left: 0;
            }
            &_big {
                position: absolute;
                top: 0;
                left: 48px;
                color: #2B2B2B;
                font-size: 16px;
                width: 100px;
                text-align: left;
            }
            &_small {
                position: absolute;
                top: 28px;
                left: 48px;
                color: #ABABAB;
                font-size: 12px;
                text-align: left;
                width: 132px;
            }
        }
        
    }
}
</style>