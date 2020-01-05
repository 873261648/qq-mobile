<template>
    <div class="search" @click="">
        <span class="icon icon-search"></span>
        <i v-html="name"></i>
    </div>
</template>

<script>
    export default {
        name: "searchBar",
        props: {
            name: {
                type: String,
                default: "搜索"
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .search{
        margin 10px 20px
        background-color: #f5f6fa
        color #b2b1bf
        border-radius 100px
        text-align center
        font-size 16px
        padding 3px 0
        i{
            margin-left 5px
            font-style normal
        }
    }
</style>
