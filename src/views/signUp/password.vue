<template>
    <div class="password">
        <h1 class="title">设置你的密码</h1>
        <p class="subtitle">注册即代表阅读并同意<span>服务协议</span>和<span>隐私政策</span></p>
        <input type="password" v-model="password" placeholder="输入密码">
        <input type="password" v-model="repeatPassword" placeholder="重复密码">
        <button :class="{disable}" @touchstart="signUp">注 册</button>

    </div>
</template>

<script>
    export default {
        name: "password",
        data() {
            return {
                password: "",
                repeatPassword: ""
            }
        },
        computed: {
            phone() {
                return this.$route.params.phone
            },
            disable() {
                return !this.password || !this.repeatPassword
            }
        },
        methods: {
            async signUp() {
                if (this.password !== this.repeatPassword) {
                    alert('两次密码输入不一致！');
                    return
                }
                let res = await this.$axios({
                    method: "POST",
                    url: "/api/user/signup",
                    data: {
                        phone: this.phone,
                        password: this.password
                    }
                });
                if (res.data.errno !== 0) {
                    alert(res.data.message);
                    return;
                }
                this.$router.push({
                    name: '注册成功',
                    params: {
                        qq: res.data.result
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .password {
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