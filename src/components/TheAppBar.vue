<template>
    <ul id="app_bar">
        <li v-for="item of barData" :key="item.id" :class="{active:active === item.id}" @touchstart="switchBar(item)">
            <span :class="className(item.icon)"></span>
            <i class="badge" v-show="item.badge">{{item.badge|maxNum}}</i>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "theAppBar",
        data() {
            return {
                active: "message",
                barData: [{
                    id: "message",
                    icon: "icon-comment",
                    target: "/home",
                    badge: 991
                }, {
                    id: "friend",
                    icon: "icon-user",
                    target: "/home/friend",
                    badge: 0
                }, {
                    id: "dynamic",
                    icon: "icon-star",
                    target: "/home/dynamic",
                    badge: 0
                }]
            }
        },
        filters: {
            maxNum(num) {
                return num < 100 ? num : "99+"
            }
        },
        methods: {
            className(icon) {
                let className = {icon: true};
                className[icon] = true;
                return className
            },
            switchBar(item) {
                let {id, target} = item;
                if (this.active === id) return;
                this.active = id;
                item.badge = 0;
                this.$router.replace(target)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #app_bar {
        display flex
        justify-content space-around
        align-items center
        position fixed
        bottom 0
        width 100vw
        background-color: rgba(255, 255, 255, .95)
        padding 10px 0

        li {
            padding 0 20px
            position relative

            span {
                color #b0b2bf
                line-height 1
                font-size 36px
            }

            &.active span {
                color #00ceff
            }

            .badge {
                position: absolute
                top 0
                left: 43px
                font-style normal
                padding 5px
                font-size 12px
                line-height 1
                min-width 1em
                text-align center
                border-radius 100px
                color #fff
                background-color: #f74c32
            }
        }
    }
</style>