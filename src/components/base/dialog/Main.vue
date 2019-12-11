<template>
    <div class="dialog">
        <base-overlay :show.sync="show"/>
        <transition name="bounce">
            <div class="window" v-if="show">
                <div class="title" v-html="title"></div>
                <div class="content">{{message}}</div>
                <button @click="close">确定</button>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name: "Main",
        data() {
            return {
                show: false,
                title: "",
                message: ""
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .window {
        position fixed
        top 100px
        left 10vw
        width 80vw
        background-color: #fff
        border-radius 8px
        z-index 100
        text-align center
        padding-top 20px
        overflow hidden

        .title {
            font-size 16px
        }

        .content {
            padding 10px 20px
        }

        button {
            width 100%
            border none
            background-color: transparent
            border-top 1px solid #dfe3e4
            padding 10px 20px
            font-size 16px
        }
    }
</style>