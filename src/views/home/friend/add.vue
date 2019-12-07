<template>
    <div id="add">
        <app-header back name="添加"/>
        <ul class="find_by">
            <li class="bg" :style="style"></li>
            <li :class="{active:active==='people'}" ref="people" @click="active = 'people'">找人</li>
            <li :class="{active:active==='group'}" ref="group" @click="active = 'group'">找群</li>
        </ul>
        <component :is="active"></component>
    </div>
</template>

<script>
    import people from '../../../components/home/friend/add/thePeople'
    import group from '../../../components/home/friend/add/theGroup'

    import AppHeader from '../../../components/AppHeader'

    export default {
        name: 'add',
        components: {
            AppHeader,
            people,
            group
        },
        data() {
            return {
                active: ''
            }
        },
        computed: {
            style() {
                let style = {};
                if (!this.$refs[this.active]) {
                    style.left = 0 + 'px';
                    return 0 + 'px'
                }
                style.transition = 'all .2s';
                style.left = this.$refs[this.active].offsetLeft + 'px';
                return style
            }
        },
        mounted() {
            this.active = 'people'
        },
        methods: {
            con() {
                this.$router.push('/home/chatroom')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #add {
        .find_by {
            position relative
            display flex
            align-items center
            justify-content space-evenly
            border-bottom 1px solid #ccc
            padding 10px 0
            font-size 16px
            text-align center
            background-color: #fff

            li {
                color #888c98
                width 3.5em
                line-height 2em
                border-radius 100px
                z-index 1

                &.active {
                    color #03081b
                }

                &.bg {
                    position absolute
                    top 10px
                    height 2em
                    background-color: #e6e7e9
                    z-index: 0;
                }
            }
        }
    }
</style>
