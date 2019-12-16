<template>
    <div class="cell_group">
        <p class="label" v-html="title"></p>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "baseCallGroup",
        props: {
            title: String
        }
    }
</script>

<style lang="stylus" scoped>
    .cell_group {
        .label {
            padding 0 20px
            color #8d919f
            margin-bottom 5px
            font-size 12px
        }
        >div+div{
            border-top 1px solid #ebedf6
        }
    }
</style>
