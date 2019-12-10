<template>
    <div id="chat">
        <app-header name="消息">
            <span class="plus icon icon-plus"></span>
        </app-header>
        <search-bar/>
        <button @click="$router.push({name:'聊天室'})">chat</button>
    </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";
    import SearchBar from "../../components/base/searchBar";

    export default {
        name: "chat",
        components: {SearchBar, AppHeader},
    }
</script>

<style lang="stylus" scoped>
    #chat {
        background-color: #fff
        .plus {
            font-size 24px
            color #fff
        }
    }
</style>
