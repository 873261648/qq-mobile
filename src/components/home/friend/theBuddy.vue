<template>
    <div>
        <ul class="friend_list">
            <user-list-item v-for="item of friendList" :key="item.qq" :item="item" @click="enterUserHome(item.qq)">
                <template v-slot:top>
                    <p class="name" v-html="item.remark || item.nickname"></p>
                </template>
                <template v-slot:bottom>
                    <p class="dynamic">
                        <span>[手机在线]</span>
                        <span v-html="item.introduction"></span>
                    </p>
                </template>
            </user-list-item>
        </ul>
    </div>
</template>

<script>
    import UserListItem from '../../other/userListItem'

    export default {
        name: 'theBuddy',
        components: { UserListItem },
        props: {
            friendList: {
                type: Array,
                require: true
            }
        },
        methods: {
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
    .friend_list {
        .name {
            font-size 18px
        }

        .dynamic {
            color #888a96;
            white-space: nowrap
            overflow: hidden
            text-overflow ellipsis

            span + span {
                margin-left 10px
            }
        }
    }
</style>
