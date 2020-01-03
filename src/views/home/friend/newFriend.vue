<template>
    <div class="new_friend">
        <app-header name="新朋友" back>
            <base-button type="text" @click="$router.push('/home/add')">添加</base-button>
        </app-header>
        <base-call-group title="好友通知" v-if="addList.length">
            <new-friend-item v-for="item of addList" :key="item.id" :data="item" @agree="agree"></new-friend-item>
        </base-call-group>
        <p class="empty" v-else>暂时没有好友申请哦</p>
    </div>
</template>

<script>
    import NewFriendItem from '../../../components/home/friend/newFriend/newFriendItem'

    export default {
        name: 'newFriend',
        components: { NewFriendItem },
        data () {
            return {
                addList: []
            }
        },
        created () {
            this.getAddList()
        },
        methods: {
            async getAddList () {
                let res = await this.$axios.get('/api/friend/addlist')
                this.addList = res.data.result
            },
            async agree (data) {
                let res = await this.$axios({
                    method: 'POST',
                    url: '/api/friend/agree',
                    data: {
                        id: data.id
                    }
                })
                this.addList.map(item => {
                    if (item.id === data.id) {
                        item.status = 1
                    }
                })
                // 转到好友设置界面
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .new_friend {
        padding-top 60px

        .empty {
            line-height 100px
            text-align center
            color #8d919f
        }
    }
</style>
