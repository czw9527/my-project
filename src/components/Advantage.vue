<template>
    <div class="index">
        <a href="javascript:;" class="index_items">
            <div class="index_items_bg">
                <img src="../assets/icon_fwzy@2x.png" alt="">  
            </div>
            <p class="index_items_big">服务专业</p>
            <p class="index_items_small">1对1专业顾问24小时及时解决入驻疑难</p>
        </a>
        <a href="javascript:;" class="index_items red">
            <div class="index_items_bg">
                <img src="../assets/icon_ppzz@2x.png" alt="">  
            </div>
            <p class="index_items_big">品牌专注</p>
            <p class="index_items_small">专注天猫入驻近8年,受数十万家好评</p>
        </a>
        <a href="javascript:;" class="index_items orange">
            <div class="index_items_bg">
                <img src="../assets/icon_flbz@2x.png" alt="">  
            </div>
            <p class="index_items_big">法律保障</p>
            <p class="index_items_small">签订正规有效法律合同，保障权益</p>
        </a>
        <a href="javascript:;" class="index_items blue">
            <div class="index_items_bg">
                <img src="../assets/icon_fwzy2@2x.png" alt="">  
            </div>
            <p class="index_items_big">服务专业</p>
            <p class="index_items_small">强大的渠道资源，绿色通道入驻s成功率达98.8%</p>
        </a>
    </div>
</template>
<style lang="scss" scoped>
.index {
    width: 1280px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    .red {background-image: url("../assets/img_ppzz@2x.png");}
    .orange {background-image: url("../assets/img_flbz@2x.png");}s
    .blue {background-image: url("../assets/img_fwzy2@2x.png");}
    &_items {
        width: 305px;
        height: 350px;
        background-image: url("../assets/img_fwzy@2x.png");
        background-repeat: no-repeat;
        background-position-Y: 0;
        background-size: contain;
        text-decoration: none;
        &:hover {
        box-shadow: #F1F2F3 5px 5px 5px;
        }
        &_bg {
            height: 82px;
            width: 82px;
            border-radius: 50%;
            margin: 98px auto 0;
            background-color: #FFFFFF;
            img {
                width: 44px;
                height: 44px;
                margin: 19px auto;
            }
        }
            &_big {
                color: #2B2B2B;
                font-size: 20px;
                width: 80px;
                margin: 55px auto 0;
            }
            &_small {
                color: #888888;
                font-size: 14px;
                text-align: center;
                width: 187px;
                margin: 20px auto;
        }
    }
}
</style>