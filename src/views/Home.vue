<template>
    <div class="home">
        <router-view/>
        <the-app-bar/>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'
    import BaseMessage from "../components/base/message/Main";
    import TheAppBar from "../components/TheAppBar";

    export default {
        name: 'home',
        components: {
            TheAppBar,
            BaseMessage,
            HelloWorld
        },
        data() {
            return {
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
            }
        }
    }
</script>
<style>

</style>