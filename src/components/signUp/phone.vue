<template>
    <div class="phone">
        <h1 class="title">用手机号码注册</h1>
        <p class="subtitle">注册即代表阅读并同意<span>服务协议</span>和<span>隐私政策</span></p>
        <label class="input">
            <span>
                +86<i class="icon icon-down"></i>
            </span>
            <input type="text" v-model="phone">
        </label>
        <button :class="{disable:disable}" @click="next">下一步</button>
        <p class="tips">仅用于找回密码</p>
    </div>
</template>

<script>
    export default {
        name: "phone",
        data() {
            return {
                phone: ""
            }
        },
        computed: {
            disable() {
                return this.phone.length !== 11
            }
        },
        methods: {
            next() {
                if (this.disable) return;
                this.$router.push(`/sign_up/password?phone=${this.phone}`)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .phone {
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

        .input {
            display flex
            justify-content center
            align-items center
            font-size 24px
            border-bottom 1px solid #dedfe1
            padding 20px 0
            margin-bottom 20px

            span {
                width 4em
                color #878a99

                i {
                    margin-left 10px
                    color #c1c0bb
                }
            }

            input {
                width calc(100% - 4em)
                color #000
                border none
                font-size 24px
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
                background-color: #9ff1ff
            }
        }

        .tips {
            color #878a99
            margin-top 5px
        }
    }
</style>