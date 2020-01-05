<template>
    <div id="chat">
        <app-header name="消息">
            <span class="plus icon icon-plus"></span>
        </app-header>
        <search-bar/>
        <ul class="session_list" v-if="conversationList.length">
            <user-list-item v-for="item of conversationList" :key="item.id" :item="item"
                            @click="enterChatRoom(item.target)">
                <template v-slot:top>
                    <p class="name" v-html="item.name"></p>
                </template>
                <template v-slot:bottom>
                    <p class="message" v-html="item.last_message"></p>
                </template>
                <template v-slot:right>
                    <div class="right">
                        <span class="time">{{item.time|timeFormat}}</span>
                        <span class="num">{{item.num|maxNum}}</span>
                    </div>
                </template>
            </user-list-item>
        </ul>
        <div class="empty" v-else>
            <img src="@/assets/img/empty_chat.jpg">
            <p>暂时没有新消息</p>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../../components/AppHeader'
    import SearchBar from '../../components/base/searchBar'
    import UserListItem from '../../components/other/userListItem'
    import { timeFormat } from '../../units/unit'

    export default {
        name: 'chat',
        components: { UserListItem, SearchBar, AppHeader },
        data () {
            return {
                conversationList: []
            }
        },
        computed: {
            message () {
                return this.$store.getters.message
            }
        },
        watch: {
            message (newMessage) {
                this.newMessage(newMessage)
            }
        },
        filters: {
            timeFormat (date) {
                return timeFormat(date)
            },
            maxNum (num) {
                return num < 100 ? num : '99+'
            }
        },
        created () {
            this.getConversationList()
        },
        methods: {
            async getConversationList () {
                let res = await this.$axios.get('/api/conversation/list')
                this.conversationList = res.data.result
            },
            enterChatRoom (target) {
                this.$router.push({
                    name: '聊天室',
                    query: {
                        target,
                        type: 'friend'
                    }
                })
            },
            newMessage (newMessage) {
                if (newMessage.cmd !== 'message') return
                if (newMessage.conversationID) {
                    this.conversationList.unshift({
                        ...newMessage,
                        num: 1,
                        id: newMessage.conversationID,
                        last_message: newMessage.message
                    })
                    return
                }
                let current = this.conversationList.find(item => item.target === newMessage.sender || newMessage.target)
                current = {
                    ...current,
                    num: current.num + 1,
                    last_message: newMessage.message
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #chat {
        padding 50px 0 0.1px
        background-color: #fff

        .plus {
            font-size 24px
            color #fff
        }

        .session_list {
            .message {
                color #878a99
                white-space: nowrap
                overflow: hidden
                text-overflow ellipsis
            }

            .right {
                display flex
                flex-direction column
                align-items flex-end

                .time {
                    display block
                    color #878a99
                }

                .num {
                    display inline-block
                    padding 5px
                    font-size 12px
                    line-height 1
                    min-width 1em
                    text-align center
                    border-radius 100px
                    color #fff
                    background-color: #f74c32
                    flex-shrink 0
                }
            }
        }

        .empty {
            height calc(100vh - 200px)
            text-align center
            color #a6a6a6
            display flex
            flex-direction column
            justify-content center
            align-items center
            background-color: #f5f6fa

            img {
                width 100px
                margin-bottom 20px
            }
        }
    }
</style>
