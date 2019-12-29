<template>
    <div id="header">
        <div class="left" v-if="back" @click="$router.goBack()">
            <span class="icon icon-left"></span>
        </div>
        <div class="left avatar" v-else>
            <img :src="userInfo.avatar" alt="">
        </div>
        <div class="name" v-html="name"></div>
        <div class="right">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheHeader",
        props: {
            name: {
                type: String,
                require: true
            },
            back: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.userInfo
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #header {
        position fixed
        width 100vw
        top 0
        background: linear-gradient(-45deg, #00a8ff, #00d9ff);
        padding 10px
        z-index 98

        .left
        .right {
            display flex
            align-items center
            height 30px
            position: absolute;
            top 10px

            &.left {
                left 10px
            }

            &.right {
                right 10px
            }

            .icon {
                font-size 24px
                color #fff
            }
        }


        .avatar {
            img {
                width 30px
                height 30px
                object-fit cover
                border-radius 100px
                object-fit cover
            }
        }

        .name {
            text-align center
            color #fff
            font-size 16px
            line-height 30px
        }
    }
</style>
