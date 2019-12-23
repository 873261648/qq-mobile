<template>
    <div id="chat">
        <app-header back :name="this.friendInfo.nickname">
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
                messageList: [{
                    id: 1,
                    target: 100000,
                    sender: 100001,
                    time: Date.now(),
                    message: '卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？卢克去吗？',
                    avatar: '\\upload\\upload_9c32b175e69fe2556f7f733f59985a4b.jpg',
                }, {
                    id: 2,
                    target: 100001,
                    sender: 100000,
                    time: Date.now(),
                    message: '去',
                    avatar: '\\upload\\upload_5b5bf26ef887dfc8e762d650d7647e51.jpg',
                }, {
                    id: 3,
                    target: 100000,
                    sender: 100001,
                    time: Date.now(),
                    message: '你上啥',
                    avatar: '\\upload\\upload_9c32b175e69fe2556f7f733f59985a4b.jpg',
                }, {
                    id: 4,
                    target: 100001,
                    sender: 100000,
                    time: Date.now(),
                    message: '我上我的黑铁奶爸',
                    avatar: '\\upload\\upload_5b5bf26ef887dfc8e762d650d7647e51.jpg',
                }]
            }
        },
        computed: {
            friendInfo () {
                return this.$route.query
            },
            disabledSend () {
                return this.newMessage === ''
            }
        },
        methods: {
            send () {

            }
        }
    }
</script>

<style lang="stylus" scoped>
    #chat {
        padding-top 50px
        background-color: #eaedf4
        min-height 100vh

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
