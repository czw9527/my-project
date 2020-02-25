<template>
    <div>
        <div class="tabs">
            <div class="tabs_logo">
               <img src="../assets/img_logo@2x.png" alt="" class="tabs_logo_image">
               <span class="tabs_logo_text">
                   <p class="tabs_logo_text_big">电商新店服务平台</p>
                   <p class="tabs_logo_text_small">MALL NEW STORE</p>
               </span>
            </div>
            <ul class="tabs_nav">
                <li class="tabs_nav_item" :class="isActive=='入住解决方案'? 'active' : ''"  @click="toggle('入住解决方案')"><a href="#">入住解决方案</a><div></div></li>
                <li class="tabs_nav_item" :class="isActive=='天猫新店'? 'active' : ''"  @click="toggle('天猫新店')"><a href="javascript:;">天猫新店</a><div></div></li>
                <li class="tabs_nav_item" :class="isActive=='京东辛店'? 'active' : ''"  @click="toggle('京东辛店')"><a href="javascript:;">京东辛店</a><div></div></li>
                <li class="tabs_nav_item" :class="isActive=='大牌授权'? 'active' : ''"  @click="toggle('大牌授权')"><a href="javascript:;">大牌授权</a><div></div></li>
                <li class="tabs_nav_item" :class="isActive=='江雀研究所'? 'active' : ''"  @click="toggle('江雀研究所')"><a href="javascript:;">江雀研究所</a><div></div></li>
                <li class="tabs_nav_item" :class="isActive=='微江雀'? 'active' : ''"  @click="toggle('微江雀')"><a href="javascript:;">微江雀</a><div></div></li>
                <li class="tabs_nav_item" :class="isActive=='我要卖店'? 'active' : ''"  @click="toggle('我要卖店')"><a href="javascript:;">我要卖店</a><div></div></li>
            </ul>
            <div class="tabs_login">
                <a href="" class="tabs_login_commit" @click="toLogin()">登陆</a>
                <a href="" @click="toPerson()">个人中心</a>
            </div>
        </div>
        <div class="main"></div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            isActive:'入住解决方案'
        }
    },
    methods: {
        toggle(msg) {
            this.isActive=msg;
        },
        toLogin() {
            this.$router.push('/login');
        },
        toPerson() {
            this.$router.push('/person');
        }
    }
}
</script>
<style lang="scss" scoped>

 .tabs {
     min-width: 1300px;
     height: 80px;
     position: relative;
     top: 0;
     display: flex;
     align-items: center;
     justify-content: space-between;
     &_logo {
         margin-left: 60px;
         height: 100%;
         display: flex;
         align-items: center;
          &_image {
            width: 101px;
            height: 42px;
            vertical-align: middle;
         }
         &_text {
             display: inline-block;
             width: 134px;
             height: 42px;
             border:1px solid rgba(219,219,219,1);
             margin-left: 25px;
             &_big {
                 color: #888888;
                 font-size: 14px;
                 margin-top: 4px;
             }
             &_small {
                 color: #888888;
                 font-size: 8px;
             }
         }
     }
     &_nav {
         display: flex;
         justify-content: space-around;
         width: 765px;
         &_item {
             list-style: none;
             height: 20px;
             line-height: 20px;
             a {
                 color: #2B2B2B;
                 font-size: 16px;
                 text-decoration: none;
             }
         }
         .active {
             a {
                 color: red;
             }
             div {
                 background-color: red;
                 height: 2px;
                 width: 24px;
                 opacity: 0.5;
                 border-radius: 2px;
                 margin: 5px auto;
             }
         }
     }
     &_login {
         margin-right: 60px;
         a {
             text-decoration: none;
             color: #888888;
             font-size: 14px;
         }
         &_commit {
             margin-right: 48px;
         }
     }
 }
</style>