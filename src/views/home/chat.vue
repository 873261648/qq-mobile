<template>
    <div id="chat">
        <app-header name="消息">
            <span class="plus icon icon-plus"></span>
        </app-header>
        <search-bar/>
        <ul class="session_list" v-if="conversationList.length">
            <user-list-item v-for="(item,index) of conversationList" :key="item.id" :item="item"
                            @click="enterChatRoom(item)">
                <template v-slot:top>
                    <p class="name" v-html="item.name"></p>
                </template>
                <template v-slot:bottom>
                    <p class="message" v-html="item.last_message"></p>
                </template>
                <template v-slot:right>
                    <div class="right">
                        <span class="time">{{item.time|timeFormat}}</span>
                        <span class="num" v-show="item.num">{{item.num|maxNum}}</span>
                    </div>
                </template>
                <template v-slot:menu>
                    <button
                        class="gray"
                        v-html="item.sticky?'取消置顶':'置顶'"
                        @click="sticky(item.id,!item.sticky)"
                    ></button>
                    <button
                        class="yellow"
                        v-html="item.num?'标记已读':'标记未读'"
                        @click="isRead(item.id,!item.num)"
                    ></button>
                    <button class="red" @click="remove(item.id,index)">删除</button>
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
            },
            total () {
                let total = 0
                this.conversationList.map(item => {
                    total += item.num
                })
                return total
            }
        },
        watch: {
            message (newMessage) {
                this.newMessage(newMessage)
            },
            total () {
                this.$store.commit('badge', {
                    chat: this.total
                })
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
            enterChatRoom ({ target, id }) {
                this.$router.push({
                    name: '聊天室',
                    query: {
                        target,
                        type: 'friend',
                        conversationID: id
                    }
                })
            },
            newMessage (newMessage) {
                if (newMessage.cmd === 'message') {
                    this.getConversationList()
                }
            },
            remove (id, index) {
                this.$axios({
                    method: 'POST',
                    url: '/api/conversation/remove',
                    data: { id }
                })
                this.conversationList.splice(index, 1)
            },
            sticky (id, sticky) {
                this.$axios({
                    method: 'POST',
                    url: '/api/conversation/sticky',
                    data: { id, sticky }
                })
                this.getConversationList()
            },
            // 标记未读已读功能也用清除未读这个方法，
            // 本质上都是操作未读条数
            isRead (id, isRead) {
                this.$axios({
                    method: 'POST',
                    url: '/api/conversation/clear_unread',
                    data: { id, isRead }
                })
                this.getConversationList()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #chat {
        width 100vw
        overflow hidden
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
                    text-align right
                    width 80px
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

            .gray {
                background-color: #c8c7cd
            }

            .yellow {
                background-color: #ff9c00
            }

            .red {
                background-color: #ff3a31
            }

            .gray, .yellow, .red {
                color #fff
                border-radius 0
                height 100%
                padding 0 20px
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
