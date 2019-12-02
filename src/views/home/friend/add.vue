<template>
    <div id="add">
        <app-header back name="添加"/>
        <ul class="find_by">
            <li class="active">找人</li>
            <li>找群</li>
        </ul>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";

    export default {
        name: "add",
        components: {AppHeader},
        computed: {
            left() {

                return 0 + 'px'
            }
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

            &::after {
                content ''
                position absolute
                top 10px
                left 0
                width 3em
                height 2em
                border-radius 100px
                background-color: #e6e7e9
            }

            li {
                color #888c98
                width 3em
                line-height 2em
                border-radius 100px

                &.active {
                    color #03081b
                }
            }
        }
    }
</style>