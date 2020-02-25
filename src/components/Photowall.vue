<template>
    <div class="index">
        <div class="index_inve">
            <img src="../assets/img_jqqt@2x.png" alt="公司办公环境">
            <div class="index_inve_text">江雀前台</div>
        </div>
        <div class="index_inve">
            <img src="../assets/img_bghj@2x.png" alt="公司办公环境">
            <div class="index_inve_text">办公环境</div>
        </div>
        <div class="index_inve">
            <img src="../assets/img_bghj2@2x.png" alt="公司办公环境">
            <div class="index_inve_text">办公环境</div>
        </div>
        <div class="index_bigImg">
            <img src="../assets/1@2x.png" alt="">
        </div>
        <div class="index_moreImg">
            <img src="../assets/2@2x.png" alt="公司办公环境">
            <img src="../assets/3@2x.png" alt="公司办公环境">
            <img src="../assets/4@2x.png" alt="公司办公环境">
            <img src="../assets/5@2x.png" alt="公司办公环境">
        </div>
        <div class="index_bigImg">
            <img src="../assets/6@2x.png" alt="公司办公环境">  
        </div>
    </div>
</template>
<style lang="scss" scoped>
.index {
    width: 1280px;
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 70px;
    &_inve {
        width: 413px;
        height: 230px;
        position: relative;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        &_text {
            width: 100px;
            height: 32px;
            line-height: 32px;
            background-color: #FA7040;
            color: white;
            font-size: 14px;
            font-weight: bold;
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
    &_bigImg {
        width: 413px;
        height: 332px;
        margin-top: 20px;
        img {
            height: 100%;
            width: 100%;
        }
    }
    &_moreImg {
        width: 413px;
        height: 332px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img {
            height: 163px;
            width: 205px;
        }
    }
}
</style>