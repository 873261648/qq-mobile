<template>
    <div class="new_friend_item">
<!--        <img :src="item.avatar" alt="img">-->
<!--        <div class="info">-->
<!--            <div class="top">-->
<!--                <span class="nickname">{{item.nickname}}</span>-->
<!--                <span class="qq">（{{item.qq}}）</span>-->
<!--            </div>-->
<!--            <div class="bottom">-->

<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: 'newFriendItem',
        props: ['data']
    }
</script>

<style lang="stylus" scoped>
    .new_friend_item {

    }
</style>
