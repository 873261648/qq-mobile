<template>
    <div id="dynamic">
        <app-header name="动态">
            <span class="set icon icon-unorderedlist"></span>
        </app-header>
        <search-bar/>
        dynamic
    </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import SearchBar from "../../components/base/searchBar";

    export default {
        name: "dynamic",
        components: {SearchBar, AppHeader}
    }
</script>
<style lang="stylus" scoped>
    #dynamic {
        background-color: #fff
        .set {
            font-size 24px
            color #fff
        }
    }
</style>
