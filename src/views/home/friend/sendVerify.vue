<template>
    <div class="send_verify">
        <app-header name="添加好友" back>
            <base-button class="send" type="text" @click="send">发送</base-button>
        </app-header>
        <div class="info">
            <img :src="hisInfo.avatar" alt="">
            <div class="text">
                <div class="top">
                    <p v-html="hisInfo.nickname"></p>
                </div>
                <div class="bottom">
                    <span v-html="hisInfo.gender"></span>
                    <span v-html="age"></span>
                    <span v-html="hisInfo.hometown"></span>
                </div>
            </div>
        </div>
        <div class="verify_info">
            <span class="label">填写验证信息</span>
            <textarea v-model="request.message"/>
        </div>
        <base-call-group title="设置备注和分组">
            <base-call title="备注" edit v-model="request.remark"/>
            <base-call title="分组">
                <base-picker v-model="request.sort" :options="sorts"/>
            </base-call>
        </base-call-group>
    </div>
</template>

<script>
    export default {
        name: 'sendVerify',
        data () {
            return {
                request: {
                    message: '',
                    remark: '',
                    sort: '默认分组'
                },
                sorts: ['默认分组', '我最关心', '大学同学']
            }
        },
        computed: {
            userInfo () {
                return this.$store.getters.userInfo
            },
            hisInfo () {
                return this.$route.query
            },
            age () {
                if (!this.hisInfo.birthday || this.hisInfo.birthday === '保密') return ''
                let year = new Date(this.hisInfo.birthday - 0).getFullYear()
                return new Date().getFullYear() - year + '岁'
            }
        },
        watch: {
            userInfo (val) {
                this.request.message = `我是${val.nickname}`
            }
        },
        created () {
            if (this.userInfo.nickname) {
                this.request.message = `我是${this.userInfo.nickname}`
            }
        },
        methods: {
            async send () {
                let res = await this.$axios({
                    method: 'POST',
                    url: '/api/friend/add',
                    data: {
                        ...this.request,
                        id: this.hisInfo.qq
                    }
                })
                if (res.data.errno === -1) {
                    this.$message.error(res.data.message)
                } else {
                    this.$message.success('发送成功，等待好友验证！')
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .send_verify {
        padding-top 50px

        .info {
            display flex
            align-items center
            padding 0 20px
            margin 20px 0

            img {
                width 60px
                height 60px
                object-fit cover
                border-radius 60px
                margin-right 10px
            }

            .text {
                .top {
                    height 30px
                    line-height 30px
                    color #000
                    font-size 18px
                    font-weight bold
                }

                .bottom {
                    font-size 14px
                    line-height 30px
                    color #b1b3c0

                    span + span {
                        margin-left 10px
                    }
                }
            }
        }

        .verify_info {
            .label {
                display block
                color #b0b2bf
                font-size 12px
                padding 0 20px
            }

            textarea {
                box-sizing border-box
                resize none
                width 100%
                background-color: #fff
                border none
                height calc(6em + 20px)
                line-height 2em
                font-size 14px
                padding 10px 20px
            }
        }
    }

</style>
