<template>
    <div class="group">
        <p class="search"><span class="icon icon-search"></span>QQ号/手机号/群/公众号</p>
        <p class="title">你可能感兴趣的群</p>
    </div>
</template>

<script>
    export default {
        name: 'theGroup'
    }
</script>

<style lang="stylus" scoped>
    .group {
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

        .stranger {
            background-color: #fff
        }
    }
</style>
