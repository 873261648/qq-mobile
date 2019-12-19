<template>
    <div id="friend">
        <app-header name="联系人">
            <span class="add icon icon-adduser" @click="$router.push('/home/add')"></span>
        </app-header>
        <search-bar/>
        <div class="new_friend" @click="$router.push('/home/new_friend')"><span>新朋友</span><span class="icon icon-right"></span></div>
        <p>friend</p>
    </div>
</template>

<script>
    import AppHeader from '../../components/AppHeader'
    import SearchBar from '../../components/base/searchBar'

    export default {
        name: 'friend',
        components: { SearchBar, AppHeader },
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
        }
    }
</style>
