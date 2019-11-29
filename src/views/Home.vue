<template>
    <div class="home">
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <the-app-bar @select="selectBar"/>
    </div>
</template>

<script>
    import Chat from "./home/chat";
    import Friend from "./home/friend";
    import Dynamic from "./home/dynamic";

    import BaseMessage from "../components/base/message/Main";
    import TheAppBar from "../components/TheAppBar";

    export default {
        name: 'home',
        components: {
            Chat,
            Friend,
            Dynamic,
            TheAppBar,
            BaseMessage
        },
        data() {
            return {
                componentName: "Chat",
                aaa: false
            }
        },
        methods: {
            alert() {
                this.aaa = !this.aaa;
                this.$message({
                    type: "loading",
                    message: "aaa"
                });
            },
            selectBar(componentName) {
                this.componentName = componentName
            }
        }
    }
</script>
<style>

</style>