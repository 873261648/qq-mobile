<template>
    <li :style="style" @click="handlerClick" @touchstart="handlerTouchStart"
        @touchend="handlerTouchEnd">
        <div class="main">
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
        </div>
        <div class="menu" ref="menu">
            <slot name="menu"></slot>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'userListItem',
        props: ['item'],
        data () {
            return {
                touchPosition: [0, 0],
                showMenu: false
            }
        },
        computed: {
            style () {
                let transform = this.showMenu ? `translateX(${-this.$refs.menu.offsetWidth}px)` : `translateX(0px)`
                let backgroundColor = this.item.sticky ? '#f5f6fa' : 'transparent'
                return {
                    transform,
                    backgroundColor
                }
            }
        },
        methods: {
            handlerClick () {
                if (this.showMenu) {
                    this.showMenu = false
                    return
                }
                this.$emit('click', this.item)
            },
            handlerTouchStart (e) {
                this.touchPosition = [e.touches[0].screenX, e.touches[0].screenY]
            },
            handlerTouchEnd (e) {
                let distanceX = this.touchPosition[0] - e.changedTouches[0].screenX
                // 右滑
                if (distanceX > 100) {
                    this.showMenu = true
                }
                //  左滑 distanceX < -100

            }
        }
    }
</script>

<style lang="stylus" scoped>
    li {
        position relative
        transition all 200ms

        .main {
            display flex
            justify-items center
            align-content center
            padding 10px 20px
            width 100%

            img {
                width 50px
                height 50px
                object-fit cover
                border-radius 100px
                flex-shrink 0
            }


            .info {
                display flex
                align-items center
                justify-content space-between
                width calc(100% - 50px)
                flex-shrink 0

                .left {
                    display flex
                    flex-direction column
                    justify-content space-between
                    padding-left 10px
                    width calc(100vw - 160px)

                }

                .top {
                    font-size 16px
                    line-height 30px
                }

                .bottom {
                    line-height 20px
                }
            }
        }

        .menu {
            position absolute
            top 0
            left 100vw
            width max-content
            height 70px
        }
    }
</style>
