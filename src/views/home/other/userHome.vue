<template>
    <div class="user_home">
        <div class="header">
            <span class="icon icon-left" @click="$router.back()"></span>
            <div class="name" :style="{opacity:headerOpacity}">个人主页</div>
            <div class="right">设置</div>
        </div>
        <img class="home_bg" :src="homeBgUrl" alt="">
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>
        <p>加为好友</p>


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

        .bottom {
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
