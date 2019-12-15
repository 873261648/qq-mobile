<template>
    <div class="user_home">
        <div class="header">
            <span class="icon icon-left" @click="$router.back()"></span>
            <div class="name" :style="{opacity:headerOpacity}">个人主页</div>
            <div class="right">设置</div>
        </div>
        <img class="home_bg" :src="homeBgUrl" alt="">
        <div class="info">
            <img :src="hisInfo.avatar" alt="">
            <div class="text">
                <div class="top">
                    <p v-html="hisInfo.nickname"></p>
                </div>
                <div class="bottom">
                    <p>QQ：{{hisInfo.qq}}</p>
                    <p>
                        <span v-html="hisInfo.gender"></span>
                        <span v-html="hisInfo.hometown"></span>
                        <span v-html="constellation"></span>
                    </p>
                </div>
            </div>
        </div>
        <div class="introduction">
            <span class="icon icon-edit-fill"></span>
            <p v-html="hisInfo.introduction"></p>
            <span class="icon icon-right"></span>
        </div>
        <div class="introduction">
            <span class="icon icon-crown"></span>
            <p>{{relation === 'self' ? '你':'TA'}}还未开通任何特权服务</p>
            <span class="icon icon-right"></span>
        </div>

        <div class="bottom">
            <button v-if="relation === 'stranger'">加为好友</button>
            <button v-if="relation === 'friend'" class="primary">发送消息</button>
            <button v-if="relation === 'self'" @click="editData">编辑资料</button>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../../../components/AppHeader'

    export default {
        name: 'userHome',
        components: {
            AppHeader
        },
        data () {
            return {
                hisInfo: {},
                headerOpacity: window.scrollY < 200 ? '0' : '1'
            }
        },
        computed: {
            qq () {
                return this.$route.query.qq
            },
            userInfo () {
                return this.$store.getters.userInfo
            },
            relation () {
                return Number(this.qq) === this.userInfo.qq ? 'self' : 'friend'
            },
            homeBgUrl () {
                return this.hisInfo.home_bg || require('@/assets/img/defaule_home_bg.png')
            },
            constellation () {
                if (!this.hisInfo.birthday) {
                    return ''
                }

                let day = new Date(this.hisInfo.birthday).getDate()
                let month = new Date(this.hisInfo.birthday).getMonth() + 1

                let astro = ['摩羯座', '水瓶座', '双鱼座', '白羊座', '金牛座',
                    '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座']
                let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22]
                let index = month
                if (day < arr[month - 1]) {
                    index = index - 1
                }
                return astro[index]
            }
        },
        created () {
            this.getUserInfo()
            window.addEventListener('scroll', () => {
                this.headerOpacity = window.scrollY < 200 ? '0' : '1'
            })
        },
        methods: {
            async getUserInfo () {
                let res = await this.$axios.get(`/api/user/info?qq=${this.qq}`)
                this.hisInfo = res.data.result
            },
            editData () {
                this.$router.push({ name: '编辑资料' })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .user_home {
        background-color: #fff
        min-height 100vh

        .header {
            position fixed
            width 100vw
            top 0
            color #fff

            .name {
                text-align center
                background: linear-gradient(-45deg, #00a8ff, #00d9ff);
                padding 10px
                font-size 16px
                line-height 30px
                transition opacity .4s
            }

            .icon-left,
            .right {
                display flex
                align-items center
                height 30px
                position: absolute;
                top 10px
                z-index 98

                &.icon-left {
                    left 10px
                    font-size 24px
                }

                &.right {
                    right 10px
                    font-size 16px
                }
            }
        }

        .home_bg {
            width 100vw
            height 75vw
            object-fit cover
        }

        .info {
            display flex
            align-items center
            margin-top -41px
            padding 0 20px

            img {
                width 80px
                height 80px
                object-fit cover
                border-radius 80px
                border 2px solid #fff
                margin-right 10px
            }

            .text {
                .top {
                    height 42px
                    line-height 42px
                    color #fff
                    font-size 18px
                    font-weight bold
                }

                .bottom {
                    font-size 12px
                    line-height 21px

                    span + span {
                        margin-left 10px
                    }
                }
            }
        }

        > .bottom {
            position fixed
            bottom 0
            width 100vw
            background-color: #fff
            padding 10px 20px

            button {
                width 100%
                padding 15px 20px
                font-size 16px
                background-color: #ebedf6
                color #000

                &.primary {
                    background-color: #00ceff
                    color #fff
                }
            }

        }
    }
</style>
