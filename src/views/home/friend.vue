<template>
    <div id="friend">
        <app-header name="联系人">
            <span class="add icon icon-adduser" @click="goAdd"></span>
        </app-header>
        <search-bar/>
        friend
    </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import SearchBar from "../../components/base/searchBar";

    export default {
        name: "friend",
        components: {SearchBar, AppHeader},
        methods: {
            goAdd() {
                this.$router.push('/home/add')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #friend {
        .add {
            font-size 24px
            color #fff
        }
    }
</style>