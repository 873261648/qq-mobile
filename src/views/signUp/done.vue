<template>
    <div class="done">
        <h1 class="title">注册成功！</h1>
        <p class="subtitle">您的QQ号是：</p>
        <h2 class="qq" v-html="qq"></h2>
        <button @touchstart="goLogin">去登录</button>
    </div>
</template>

<script>
    export default {
        name: "done",
        computed: {
            qq() {
                return this.$route.params.qq
            },
        },
        methods: {
            goLogin() {
                this.$router.push({
                    name: '登录',
                    params: {
                        qq: this.qq
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .done {
        width 100vw
        padding 0 20px

        .title {
            color #000
            line-height 1.5em
        }

        .subtitle {
            color #878a99

            span {
                font-size 12px
                color #3fa0ff
            }
        }
        .qq{
            text-align center
            line-height 3em
        }

        input[type=password] {
            width 100%
            color #000
            border none
            border-bottom 1px solid #dedfe1
            font-size 16px
            padding 10px 20px
            margin-bottom 20px

            &::placeholder {
                color #b0b2bf
            }
        }

        button {
            display block
            width 100%
            line-height 1
            padding 15px 20px
            border none
            border-radius 4px
            background-color: #00ceff
            color #fff
            font-size 16px

            &.disable {
                pointer-events none
                background-color: #9ff1ff
            }
        }

    }
</style>