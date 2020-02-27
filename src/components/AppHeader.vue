<template>
    <div id="header">
        <div class="bg" :style="style"></div>
        <div class="left" v-if="back" @click="$router.goBack()">
            <span class="icon icon-left"></span>
        </div>
        <div class="left avatar" v-else @click="enterUserHome">
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
        name: 'TheHeader',
        props: {
            name: {
                type: String,
                require: true
            },
            back: {
                type: Boolean,
                default: false
            },
            backgroundOpacity: {
                type: Number,
                default: 1
            }
        },
        computed: {
            userInfo () {
                return this.$store.getters.userInfo
            },
            style () {
                let opacity = this.backgroundOpacity === undefined ? 1 : this.backgroundOpacity

                return {
                    opacity: opacity + ''
                }
            }
        },
        methods: {
            enterUserHome () {
                this.$router.push({
                    name: '个人主页',
                    query: {
                        qq: this.userInfo.qq
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #header {
        position fixed
        width 100vw
        top 0
        padding 10px
        z-index 98

        .bg{
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            background: linear-gradient(-45deg, #00a8ff, #00d9ff);
            transition all .4s
            z-index: -1;
        }

        .left
        .right {
            display flex
            align-items center
            height 30px
            position: absolute;
            top 10px

            .icon {
                font-size 24px
                color #fff
            }
        }

        .left {
            left 10px
        }

        .right {
            right 10px
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
