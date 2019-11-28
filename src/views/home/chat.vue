<template>
    <div id="chat">
        <app-header name="联系人">
            <span class="plus icon icon-plus"></span>
        </app-header>
        chat
    </div>
</template>

<script>
    import AppHeader from "../../components/AppHeader";

    export default {
        name: "chat",
        components: {AppHeader}
    }
</script>

<style lang="stylus" scoped>
    #chat {
        .plus {
            font-size 24px
            color #fff
        }
    }
</style>