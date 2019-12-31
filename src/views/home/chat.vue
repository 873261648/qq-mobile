<template>
    <div id="chat">
        <app-header name="消息">
            <span class="plus icon icon-plus"></span>
        </app-header>
        <search-bar/>
        <ul class="session_list">
            <user-list-item v-for="item of sessionList" :key="item.id" :item="item" @click="enterChatRoom(item.qq)">
                <template v-slot:top>
                    <p class="name" v-html="item.remark || item.nickname"></p>
                </template>
                <template v-slot:bottom>
                    <p class="message" v-html="item.lastmessage"></p>
                </template>
                <template v-slot:right>
                    <div class="right">
                        <span class="time">{{item.time|timeFormat}}</span>
                        <span class="num">{{item.num|maxNum}}</span>
                    </div>
                </template>
            </user-list-item>
        </ul>
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
                sessionList: [{
                    id:1,
                    qq: 100001,
                    remark: '大白菜',
                    avatar: '\\upload\\upload_4386dee279e3c797b079cc8a35c08252.jpg',
                    lastmessage: '打鸟贝去不去？',
                    time: 1577803453000,
                    num: 3
                },{
                    id:2,
                    qq: 100001,
                    remark: '大白菜',
                    avatar: '\\upload\\upload_4386dee279e3c797b079cc8a35c08252.jpg',
                    lastmessage: '打鸟贝去不去？',
                    time: 1577717052000,
                    num: 33
                },{
                    id:3,
                    qq: 100001,
                    remark: '大白菜',
                    avatar: '\\upload\\upload_4386dee279e3c797b079cc8a35c08252.jpg',
                    lastmessage: '打鸟贝去不去？',
                    time: 1577630652000,
                    num: 333
                },{
                    id:4,
                    qq: 100001,
                    remark: '大白菜',
                    avatar: '\\upload\\upload_4386dee279e3c797b079cc8a35c08252.jpg',
                    lastmessage: '打鸟贝去不去？',
                    time: 1575989052000,
                    num: 333
                }]
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
        methods: {
            enterChatRoom (qq) {
                this.$router.push({
                    name: '聊天室',
                    query: {
                        target: qq,
                        type: 'friend'
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #chat {
        padding-top 50px
        background-color: #fff

        .plus {
            font-size 24px
            color #fff
        }

        .session_list {
            .message {
                color #878a99
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
    }
</style>
