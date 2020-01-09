<template>
    <div id="dynamic">
        <app-header name="动态">
            <span class="set icon icon-unorderedlist"></span>
        </app-header>
        <search-bar/>
        <div class="item" @click="$router.push('home/friend_dynamic')">
            <div class="left">
                <span class="icon icon-star"></span>
                <span class="text">好友动态</span>
            </div>
            <span class="icon icon-right"></span>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../../components/AppHeader'
    import SearchBar from '../../components/base/searchBar'

    export default {
        name: 'dynamic',
        components: { SearchBar, AppHeader }
    }
</script>
<style lang="stylus" scoped>
    #dynamic {
        padding-top 50px
        background-color: #fff

        .set {
            font-size 24px
            color #fff
        }

        .item {
            display flex
            align-items center
            justify-content space-between
            padding 10px 20px

            &:active {
                background-color: #f5f6fa
            }

            .left {
                .icon {
                    margin-right 10px
                    background: linear-gradient(-225deg, #ffdd00, #feb60c)
                    border-radius 4px
                    padding 2px
                    font-size 16px
                    color #fff
                }

                .text {
                    color #000
                    font-size 16px
                }
            }

            .icon-right {
                color #b1b3c0
            }
        }
    }
</style>
