<template>
    <div class="user_home">
        <app-header name="个人主页" :backgroundOpacity="headerOpacity" back>
            <div class="setup">设置</div>
        </app-header>
        <input v-show="false" type="file" accept="image/*" :multiple="false" ref="inputFile" @change="updateHomeBG">
        <img class="home_bg" :src="homeBgUrl" alt="" @click="openFileWindow">
        <div class="info">
            <img :src="friendInfo.avatar" alt="">
            <div class="text">
                <div class="top">
                    <p v-html="friendInfo.nickname"></p>
                </div>
                <div class="bottom">
                    <p>QQ：{{friendInfo.qq}}</p>
                    <p>
                        <span v-html="friendInfo.gender"></span>
                        <span v-html="friendInfo.hometown"></span>
                        <span v-html="constellation"></span>
                    </p>
                </div>
            </div>
        </div>
        <user-info-item v-if="friendInfo.introduction" left-icon="icon-edit-fill">
            <p v-html="friendInfo.introduction"></p>
        </user-info-item>
        <user-info-item v-if="friendInfo.birthday" left-icon="icon-smile">
            <p v-html="age"></p>
        </user-info-item>
        <user-info-item left-icon="icon-crown">
            <p>{{relation === 'self' ? '你':'TA'}}还未开通任何特权服务</p>
        </user-info-item>
        <div class="bottom">
            <button v-if="relation === 'stranger'" @click="goSendVerify">加为好友</button>
            <button v-if="relation === 'friend'" class="primary" @click="goChartRoom">发送消息</button>
            <button v-if="relation === 'self'" @click="editData">编辑资料</button>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../../../components/AppHeader'
    import UserInfoItem from '../../../components/other/userInfoItem'

    export default {
        name: 'userHome',
        components: {
            UserInfoItem,
            AppHeader
        },
        data () {
            return {
                friendInfo: {},
                headerOpacity: window.scrollY < 200 ? 0 : 1
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
                if (Number(this.qq) === this.userInfo.qq) return 'self'
                if (this.friendInfo.areYouFriends) return 'friend'
                return 'stranger'
            },
            homeBgUrl () {
                return this.friendInfo.home_bg || require('@/assets/img/defaule_home_bg.png')
            },
            age () {
                if (!this.friendInfo.birthday || this.friendInfo.birthday === '保密') return ''
                let year = new Date(this.friendInfo.birthday).getFullYear()
                return new Date().getFullYear() - year + '岁'
            },
            constellation () {
                if (!this.friendInfo.birthday) {
                    return ''
                }

                let day = new Date(this.friendInfo.birthday).getDate()
                let month = new Date(this.friendInfo.birthday).getMonth() + 1

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
            window.addEventListener('scroll', this.opacityChange)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.opacityChange)
        },
        methods: {
            async getUserInfo () {
                let res = await this.$axios.get(`/api/user/info?qq=${this.qq}`)
                this.friendInfo = res.data.result
            },
            goSendVerify () {
                this.$router.push({
                    name: '发送验证',
                    query: this.friendInfo
                })
            },
            goChartRoom () {
                this.$router.push({
                    name: '聊天室',
                    query: {
                        target: this.friendInfo.qq,
                        type: 'friend'
                    }
                })
            },
            editData () {
                this.$router.push({ name: '编辑资料' })
            },
            openFileWindow () {
                if (this.relation !== 'self') return
                this.$refs['inputFile'].click()
            },
            async updateHomeBG (e) {
                let file = e.target.files[0]
                if (!file) return
                let form = new FormData()
                form.append('file', file)
                let res = await this.$axios({
                    method: 'POST',
                    url: '/api/upload/home_bg',
                    headers: { 'content-Type': 'multipart/form-data;charset=UTF-8' },
                    data: form
                })
                this.friendInfo.home_bg = res.data.result.home_bg
            },
            opacityChange () {
                this.headerOpacity = window.scrollY < 200 ? 0 : 1
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .user_home {
        background-color: #fff
        min-height 100vh

        .setup {
            color #fff
            font-size 16px
        }

        .home_bg {
            width 100vw
            height 200px
            object-fit cover
        }

        .info {
            display flex
            align-items center
            margin-top -41px
            padding 0 20px
            margin-bottom 20px

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
                    text-shadow 0 0 2px rgba(0, 0, 0, .8)
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
