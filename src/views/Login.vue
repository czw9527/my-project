<template>
    <div class="index">
        <button @click="loginSuccess()">登录/注册</button>
        <LoginChild @changeTitle="title = $event" :title="title">slot插槽{{title}}</LoginChild>
    </div>
</template>
<script>
import LoginChild from '../components/LoginChild'

export default {
    data() {
        return {
            name:'小明',
            title:'父组件传给子组件的值'
        }
    },
    methods: {
        consol() {
            console.log(this.$store.state.isLogin)
        },
        loginSuccess() {
            this.$store.commit('changeIsLogin',true);
            this.$router.push('/person');
        }
    },
    mounted() {
        this.consol();
    },
    //为实现-----------------------------------------------------------------------
    // beforeRouterLeave:(to, from, next) => {
    //     const answer = this.$confirm("确定离开此页嘛?")
    //     if (answer) {
    //         next();
    //     }else {
    //         next(false);
    //     }
    // },
    // beforeRouterEnter:(to, from, next) => {
    //     next(vm=> {
    //         alert('hello' + vm.name);
    //     })
    // }
    components: {
        LoginChild
    }
}
</script>
<style lang="scss" scoped>
.index {
    text-align: center;
}
</style>