<template>
    <div id="login">
        <div class="top">
            <p class="logo">
                <img src="../assets/img/logo.jpg" alt="logo"/>
            </p>
            <label>
                <input v-model="qq" type="text" placeholder="QQ号/手机号/邮箱">
            </label>
            <label>
                <input v-model="password" type="password" placeholder="输入密码">
            </label>
            <button :class="{'login-btn':true,'ready':qq&&password}" @touchstart="login">
                <span class="icon icon-arrowright"></span>
            </button>
        </div>
        <div class="bottom">
            <p class="sign_up">
                <span>忘记密码</span>
                <span @click="$router.push('/sign_up')">用户注册</span>
            </p>
            <p>登陆即代表同意并阅读<span>用户协议</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                qq: '',
                password: ''
            }
        },
        created () {
            if (this.$route.params.qq) {
                this.qq = this.$route.params.qq
            }
        },
        methods: {
            async login () {
                let res = await this.$axios({
                    method: 'POST',
                    url: '/api/user/login',
                    data: {
                        qq: this.qq,
                        password: this.password
                    }
                })
                if (res.data.errno !== 0) {
                    this.$message.error('账号或密码错误！')
                    return
                }
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.result))
                this.$router.push('/home')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #login {
        display flex
        flex-direction column
        justify-content space-between
        background-color: #fff
        padding-top 100px
        height 100vh

        .top {
            .logo {
                text-align center
                margin-bottom: 30px;

                img {
                    width 120px
                }
            }

            label {
                display flex
                justify-content center
                margin 0 auto 15px
                width 80%
                max-width 400px
                background-color: #f2f3f7
                line-height 1

                border-radius 100px

                input {
                    text-align center
                    font-size 18px
                    padding 15px 20px
                    border none
                    background-color: transparent
                    caret-color: #00cafc

                    &::placeholder {
                        color #b0b2bf
                    }
                }
            }

            .login-btn {
                display block
                margin 0 auto
                margin-top 50px
                width 70px
                height 70px
                border none
                border-radius 50px
                background-color: #e8ebf2
                color #fff
                font-size 24px
                transition background-color .2s

                &.ready {
                    background-color: #00cafc
                }
            }
        }

        .bottom {
            font-size 12px
            text-align center
            color #878a99
            padding-bottom 10px

            .sign_up {
                span:first-child {
                    padding-right 3em
                }

                span:last-child {
                    padding-left calc(3em - 2px)
                    border-left 2px solid #d3d4d9
                }
            }

            span {
                color: #000
            }
        }
    }
</style>
