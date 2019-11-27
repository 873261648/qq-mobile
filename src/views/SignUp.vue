<template>
    <div id="sign_up">
        <base-progress :number="number" :width="5"></base-progress>
        <div class="icon icon-left"></div>
        <transition name="left">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import BaseProgress from '../components/base/progress'

    export default {
        name: 'SignUp',
        components: {BaseProgress},
        computed: {
            number() {
                let routerName = this.$route.name;
                let num = 0;
                if (routerName === '输入手机号') {
                    num = 33;
                }
                if (routerName === '输入密码') {
                    num = 66;
                }
                return num;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #sign_up {
        .icon-left {
            color #777
            font-size 24px
            margin 20px 10px 10px
        }
    }
</style>
