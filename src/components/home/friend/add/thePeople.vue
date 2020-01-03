<template>
    <div class="people">
        <p class="search"><span class="icon icon-search"></span>QQ号/手机号/群/公众号</p>

        <p class="title">你可能感兴趣的人</p>
        <ul class="people-list">
            <user-list-item v-for="item of strangerList"
                            :key="item.qq"
                            :item="item"
                            @click="enterUserHome(item.qq)">
                <template v-slot:top>
                    <span class="nickname">{{item.nickname}}</span>
                    <span class="qq">（{{item.qq}}）</span>
                </template>
            </user-list-item>
        </ul>
    </div>
</template>

<script>
    import UserListItem from '../../../other/userListItem'

    export default {
        name: 'thePeople',
        components: { UserListItem },
        data () {
            return {
                strangerList: []
            }
        },
        created () {
            this.getStranger()
        },
        methods: {
            async getStranger () {
                let res = await this.$axios.get('/api/friend/stranger')
                this.strangerList = res.data.result
            },
            enterUserHome (qq) {
                this.$router.push({
                    name: '个人主页',
                    query: { qq }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .people {
        .search {
            margin 10px 0
            color #b0b2bf
            background-color: #fff
            padding 10px
            user-select none

            .icon {
                margin-right 5px
            }
        }

        .title {
            padding 0 20px
            font-size 12px
            color #808080
        }

        .people-list {
            background-color: #fff

            .qq {
                color #808080
            }

            .nickname {
                color #00a5df
            }
        }
    }
</style>
7777uu
