<template>
    <div class="new_friend_item" @click="$emit('click',data)">
        <div class="info">
            <img :src="data.friendInfo.avatar" alt="">
            <div class="text">
                <p class="nickname" v-html="data.friendInfo.nickname"></p>
                <p class="message" v-html="data.message"></p>
            </div>
        </div>
        <div class="status">
            <p v-if="data.status === 1">已同意</p>
            <p v-else-if="data.status === 0">已拒绝</p>
            <p v-else-if="this.userInfo.qq === data.user_id">等待验证</p>
            <button v-else-if="this.userInfo.qq === data.friend_id" @click="$emit('agree',data)">同意</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'newFriendItem',
        props: ['data'],
        computed: {
            userInfo() {
                return this.$store.getters.userInfo
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .new_friend_item {
        display flex
        justify-content space-between
        align-items center
        background-color: #fff
        padding 10px 20px

        .info {
            display flex
            justify-content space-between
            align-items center

            img {
                width 60px
                height 60px
                object-fit cover
                border-radius 50%
                margin-right 10px
            }

            .text {
                width 50vw

                .nickname {
                    font-size 18px
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                }

                .message {
                    color #b0b2be
                    white-space nowrap
                    overflow hidden
                    text-overflow ellipsis
                }
            }
        }

        .status {
            p {
                color #a6a6a6
            }

            button {
                background-color: #eeeff4
                padding 10px 20px
                border-radius 100px
            }
        }

    }
</style>
