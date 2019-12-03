<template>
    <li @click="$emit('click',item)">
        <img :src="item.avatar" alt="img">
        <div class="info">
            <div class="top">
                <span class="nickname">{{item.nickname}}</span>
                <span class="qq">（{{item.qq}}）</span>
            </div>
            <div class="bottom"></div>
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

        & + li {
            border-top 1px solid #dee0df
        }

        img {
            width 60px
            height 60px
            border-radius 100px
        }

        .info {
            padding-left 10px

            .top {
                font-size 16px

                .qq {
                    color #808080
                }

                .nickname {
                    color #00a5df
                }
            }
        }
    }
</style>
