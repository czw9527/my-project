<template>
    <div class="index">
        <button @click="postToLogin()">子传父</button>
        <div>{{title}}</div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        postToLogin () {
            this.$emit('changeTitle','子组件传给父组件的值')
        }
    },
    props: ['title']
}
</script>
<style lang="scss" scoped>
.index {
    text-align: center;
}
</style>