<template>
    <div id="login">
        <p class="logo">
            <img src="../assets/img/logo.jpg" alt="logo"/>
        </p>
        <label>
            <input v-model="qq" type="text" placeholder="QQ号/手机号/邮箱">
        </label>
        <label>
            <input v-model="password" type="password" placeholder="输入密码">
        </label>
        <button :class="{'login-btn':true,'ready':qq&&password}">
            <span class="icon-right"></span>
        </button>
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
        }
    }
</script>

<style lang="stylus" scoped>
    #login {
        padding-top 100px
        height 100vh

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
</style>
