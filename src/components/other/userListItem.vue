<template>
    <li @click="$emit('click',item)">
        <img :src="item.avatar" alt="img">
        <div class="info">
            <div class="left">
                <div class="top">
                    <slot name="top">
                        <span class="qq">{{item.qq}}</span>
                    </slot>
                </div>
                <div class="bottom">
                    <slot name="bottom"></slot>
                </div>
            </div>
            <slot name="right"></slot>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'userListItem',
        props: ['item']
    }
</script>

<style lang="stylus" scoped>
    li {
        display flex
        justify-items center
        align-content center
        padding 10px 20px

        img {
            width 60px
            height 60px
            object-fit cover
            border-radius 100px
            flex-shrink 0
        }

        .info {
            display flex
            align-items center
            justify-content space-between
            width calc(100% - 60px)

            .left {
                display flex
                flex-direction column
                justify-content space-between
                padding-left 10px
                width calc(100vw - 160px)

            }

            .top {
                font-size 16px
            }
        }
    }
</style>
