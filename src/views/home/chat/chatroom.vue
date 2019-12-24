<template>
    <div id="chat">
        <app-header back :name="name">
            <span class="icon icon-menu"></span>
        </app-header>
        <ul class="message_list">
            <app-message v-for="item of messageList" :key="item.id" :message="item"/>
        </ul>
        <div class="bottom">
            <div class="input">
                <input type="text" v-model="newMessage">
                <button :disabled="disabledSend" @click="send">发送</button>
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
                newMessage: '',
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
                return this.newMessage === ''
            }
        },
        created () {
            this.getInfo()
        },
        methods: {
            async getInfo () {
                let res
                if (this.type === 'friend') {
                    res = await this.$axios.get(`/api/user/info?qq=${this.friendOrGroup}`)
                    this.friendInfo = res.data.result
                }
            },
            send () {
                let newMessage = {
                    id: Date.now(),
                    sender: this.userInfo.qq,
                    target: this.friendOrGroup,
                    time: Date.now(),
                    message: this.newMessage,
                    avatar: this.userInfo.avatar,
                }
                this.$socket.send(JSON.stringify(newMessage))
                this.messageList.push(newMessage)
                this.newMessage = ''
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #chat {
        padding-top 50px
        background-color: #eaedf4
        min-height 100vh
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
