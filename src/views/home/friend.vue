<template>
    <div id="friend">
        <app-header name="联系人">
            <span class="add icon icon-adduser" @click="$router.push('/home/add')"></span>
        </app-header>
        <search-bar/>
        <p>friend</p>
    </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import SearchBar from "../../components/base/searchBar";

    export default {
        name: "friend",
        components: {SearchBar, AppHeader},
    }
</script>

<style lang="stylus" scoped>
    #friend {
        background-color: #fff
        .add {
            font-size 24px
            color #fff
        }
    }
</style>
