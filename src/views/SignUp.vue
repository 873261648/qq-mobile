<template>
    <div id="sign_up">
        <base-progress :number="number" :width="5"></base-progress>
        <div class="icon icon-left" @touchstart="$router.back()"></div>
        <transition :name="transitionName">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import BaseProgress from '../components/base/progress'

    export default {
        name: 'SignUp',
        components: {BaseProgress},
        data() {
            return {
                transitionName: "slide-right"
            }
        },
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
        },
        watch: {
            $route(to, from) {
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = 'slide-left';
                } else {
                    this.transitionName = 'slide-right';
                }
            }
        },
        methods: {
            back() {
                this.$router.back()
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
