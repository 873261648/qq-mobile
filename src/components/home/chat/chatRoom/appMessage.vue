<template>
    <li :class="className">
        <img :src="message.avatar" alt="">
        <div class="message" v-html="message.message"></div>
    </li>
</template>

<script>
    export default {
        name: 'appMessage',
        props: ['message'],
        computed: {
            userInfo () {
                return this.$store.getters.userInfo
            },
            className () {
                if (this.message.sender === this.userInfo.qq) {
                    return { me: true }
                }
                return { you: true }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    li {
        display flex
        align-items flex-start
        padding 0 20px
        margin-top 20px

        img {
            width 40px
            height 40px
            object-fit cover
            border-radius 100px
        }

        .message {
            position relative
            max-width calc(80vw - 50px)
            background-color: #fff
            border-radius 4px
            padding 10px
            line-height 1.5em

            &:after {
                content ''
                position absolute
                border 6px solid transparent
                border-left-color: #1fbafc;
                top 14px
                right -12px
            }
        }

        &.you {
            .message {
                margin-left 10px
                &:after {
                    border 6px solid transparent
                    border-right-color: #fff;
                    right auto
                    left -12px
                }
            }
        }
        &.me {
            flex-direction row-reverse

            .message {
                margin-right 10px
                background-color: #1fbafc
                color #fff
            }
        }

    }
</style>
