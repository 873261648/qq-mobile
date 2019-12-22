<template>
    <div id="friend">
        <app-header name="联系人">
            <span class="add icon icon-adduser" @click="$router.push('/home/add')"></span>
        </app-header>
        <search-bar/>
        <div class="new_friend" @click="$router.push('/home/new_friend')">
            <span>新朋友</span>
            <span class="icon icon-right"></span>
        </div>
        <div class="content">
            <ul class="tab" :style="{left:tabLeft+'px'}" ref="tab" @touchmove="touchMove" @touchstart="touchStart">
                <li class="bg" :style="style"></li>
                <li v-for="item of tab"
                    :class="{active:item.value === active}"
                    :key="item.value"
                    :ref="item.value"
                    v-html="item.label"
                    @click="switchTab(item)"></li>
            </ul>
            <keep-alive>
                <component :is="active" :friendList="friendList"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../../components/AppHeader'
    import SearchBar from '../../components/base/searchBar'

    import TheBuddy from '../../components/home/friend/theBuddy'
    import TheGroup from '../../components/home/friend/theGroup'
    import TheGroupChat from '../../components/home/friend/theGroupChat'
    import TheDevice from '../../components/home/friend/theDevice'
    import TheAddressBook from '../../components/home/friend/theAddressBook'
    import ThePublic from '../../components/home/friend/thePublic'

    export default {
        name: 'friend',
        components: { ThePublic, TheAddressBook, TheGroupChat, TheGroup, TheBuddy, TheDevice, SearchBar, AppHeader },
        data () {
            return {
                active: 'theBuddy',
                tab: [
                    { label: '好友', value: 'theBuddy' },
                    { label: '分组', value: 'theGroup' },
                    { label: '群聊', value: 'theGroupChat' },
                    { label: '设备', value: 'theDevice' },
                    { label: '通讯录', value: 'theAddressBook' },
                    { label: '公众号', value: 'thePublic' }
                ],
                friendList: [],
                startPosition: 0,
                tabLeft: 0,
            }
        },
        computed: {
            style () {
                let style = {}
                if (!this.$refs[this.active]) {
                    style.left = 20 + 'px'
                    return style
                }
                style.transition = 'all .2s'
                style.left = this.$refs[this.active][0].offsetLeft + 'px'
                return style
            }
        },
        created () {
            this.getFriend()
        },
        methods: {
            switchTab ({ value }) {
                this.active = value
            },
            touchStart (e) {
                this.startPosition = e.touches[0].clientX
            },
            touchMove (e) {
                // 规定一下滑动范围，如果已经在最左侧或最右侧就不再执行了
                let tabWidth = this.$refs.tab.clientWidth
                let screenWidth = window.innerWidth
                let tabLeft = this.tabLeft - (this.startPosition - e.touches[0].clientX)
                if (tabLeft <= 0 && tabLeft >= -(tabWidth - screenWidth)) {
                    this.tabLeft = tabLeft
                }
                this.startPosition = e.touches[0].clientX
            },
            async getFriend () {
                let res = await this.$axios.get('/api/friend/allfriend')
                this.friendList = res.data.result
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #friend {
        padding-top 50px
        background-color: #fff

        .add {
            font-size 24px
            color #fff
        }

        .new_friend {
            display flex
            justify-content space-between
            font-size 16px
            background-color: #fff
            padding 10px 20px
            transition background-color .2s

            &:active {
                background-color: #f1f1f9
            }

            .icon {
                color #888c98
                font-size 12px
            }
        }

        .content {
            overflow hidden

            .tab {
                display flex
                position relative
                left 0
                padding 10px 20px
                width 520px
                font-size 16px
                text-align center

                li {
                    color #888c98
                    width 80px
                    line-height 2em
                    border-radius 100px
                    z-index 1
                    flex 1

                    &.active {
                        color #00cafc
                    }

                    &.bg {
                        position absolute
                        top 10px
                        height 2em
                        background-color: #e7faff
                        z-index: 0;
                        transition all .2s ease
                        left: 20px
                    }
                }
            }

        }
    }
</style>
