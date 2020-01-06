<template>
    <div id="chat" ref="chat">
        <app-header back :name="name">
            <span class="icon icon-menu"></span>
        </app-header>
        <ul class="message_list">
            <app-message v-for="item of messageList" :key="item.id" :message="item"/>
        </ul>
        <div class="bottom">
            <div class="input">
                <input type="text" v-model="text">
                <button :disabled="disabledSend" @click="send" @mousedown="handlerMouseDown">发送</button>
            </div>
            <div class="icons">
                <span class="icon icon-audio-fill"></span>
                <span class="icon icon-image-fill"></span>
                <span class="icon icon-camera-fill"></span>
                <span class="icon icon-redenvelope-fill"></span>
                <span class="icon icon-smile-fill"></span>
                <span class="icon icon-plus-circle-fill"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import AppMessage from '../../../components/home/chat/chatRoom/appMessage'

    export default {
        name: 'chatroom',
        components: { AppMessage },
        data () {
            return {
                text: '',
                friendInfo: {},
                groupInfo: {},
                messageList: []
            }
        },
        computed: {
            userInfo () {
                return this.$store.getters.userInfo
            },
            friendOrGroup () {
                return Number(this.$route.query.target)
            },
            type () {
                return this.$route.query.type
            },
            name () {
                if (this.type === 'friend') {
                    return this.friendInfo.remark || this.friendInfo.nickname
                }
                return this.friendInfo.groupName
            },
            disabledSend () {
                return this.text.trim() === ''
            },
            message () {
                return this.$store.getters.message
            }
        },
        watch: {
            message (val) {
                this.newMessage(val)
            }
        },
        mounted () {
            this.getInfo()
            this.getChatRecord()
            window.addEventListener('resize', this.scrollBottom)
        },
        methods: {
            async getInfo () {
                let res
                if (this.type === 'friend') {
                    res = await this.$axios.get(`/api/user/info?qq=${this.friendOrGroup}`)
                    this.friendInfo = res.data.result
                }
            },
            async getChatRecord () {
                let res
                if (this.type === 'friend') {
                    res = await this.$axios({
                        url: '/api/record/list',
                        params: {
                            qq: this.friendOrGroup
                        }
                    })
                    this.messageList = res.data.result
                    this.$nextTick(this.scrollBottom)
                }
            },
            scrollBottom (smooth) {
                window.scrollTo({
                    top: document.body.offsetHeight - window.innerHeight,
                    behavior: smooth ? 'smooth' : 'instant'
                })
            },
            // 阻止点击按钮时表单失去焦点导致输入法隐藏
            handlerMouseDown (e) {
                e.preventDefault()
            },
            send () {
                let newMessage = {
                    cmd: 'message',
                    id: Date.now(),
                    sender: this.userInfo.qq,
                    target: this.friendOrGroup,
                    time: Date.now(),
                    message: this.text,
                }
                this.$socket.send(JSON.stringify(newMessage))
                this.messageList.push({
                    ...newMessage,
                    name: this.userInfo.remark || this.userInfo.nickname,
                    avatar: this.userInfo.avatar
                })
                this.text = ''
                this.$nextTick(() => {
                    this.scrollBottom(true)
                })
            },
            newMessage (val) {
                if (val.cmd !== 'message') return
                this.messageList.push(val)
                this.$nextTick(() => {
                    this.scrollBottom(true)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #chat {
        padding-top 50px
        background-color: #eaedf4
        padding-bottom 93px

        .bottom {
            position fixed
            width 100vw
            bottom 0
            background-color: #eaedf4

            .input {
                display flex
                align-items center
                padding 10px 10px 0

                input {
                    border-radius 100px
                    margin-right 5px
                    width 100%
                    padding 10px
                }

                button {
                    color #fff
                    border-radius 100px
                    background-color: #00cafc
                    transition all .2s
                    flex: 0 0 60px
                    width 60px
                    padding 10px

                    &:disabled {
                        background-color: #b1effe
                    }
                }
            }

            .icons {
                padding 10px 20px
                display flex
                justify-content space-between
                font-size 24px
                color #989eb4
            }
        }
    }
</style>
