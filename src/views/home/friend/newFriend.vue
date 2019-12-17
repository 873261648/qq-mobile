<template>
    <div class="new_friend">
        <app-header name="新朋友" back>
            <base-button type="text">添加</base-button>
        </app-header>
        <base-call-group title="好友通知">
            <new-friend-item v-for="item of addList" :key="item.id" :data="item"></new-friend-item>
        </base-call-group>
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
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .new_friend {
        padding-top 60px
    }
</style>
