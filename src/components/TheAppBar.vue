<template>
    <ul id="app_bar">
        <li v-for="item of barData" :key="item.componentName" :class="{active:active === item.componentName}"
            @touchstart="switchBar(item.componentName)">
            <span :class="className(item.icon)"></span>
            <span class="name" v-html="item.name"></span>
            <i class="badge" v-show="item.badge">{{item.badge|maxNum}}</i>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'theAppBar',
        data () {
            return {
                active: 'Chat',
                barData: [{
                    name: '消息',
                    componentName: 'Chat',
                    icon: 'icon-comment',
                    badge: 0
                }, {
                    name: '联系人',
                    componentName: 'Friend',
                    icon: 'icon-user',
                    badge: 0
                }, {
                    name: '动态',
                    componentName: 'Dynamic',
                    icon: 'icon-star',
                    badge: 0
                }]
            }
        },
        computed: {
            message () {
                return this.$store.getters.message
            }
        },
        watch: {
            message (newMessage) {
                this.newMessage(newMessage)
            }
        },
        filters: {
            maxNum (num) {
                return num < 100 ? num : '99+'
            }
        },
        created () {
            let homeActive = sessionStorage.getItem('homeActive')
            if (homeActive) {
                this.switchBar(homeActive)
            }
        },
        methods: {
            className (icon) {
                let className = { icon: true }
                className[icon] = true
                return className
            },
            switchBar (componentName) {
                if (this.active === componentName) return
                this.active = componentName
                this.$emit('select', componentName)
                sessionStorage.setItem('homeActive', componentName)
            },
            newMessage (newMessage) {
                switch (newMessage.cmd) {
                    case 'message':
                        this.barData[0].badge++
                        break
                }
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
            color #b0b2bf

            .icon {
                line-height 1
                font-size 36px
            }

            .name {
                display block
                text-align center
                font-size 12px
                line-height 1
            }

            &.active {
                color #00ceff

                .name {
                    color #000
                }
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
