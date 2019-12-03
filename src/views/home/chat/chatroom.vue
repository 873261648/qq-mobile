<template>
    <div>
        <!--        <app-header back name="添加"/>-->
        <p @click="msg">chatroom</p>
        <div id="div" ref="div">
            <p></p>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import AppHeader from "../../../components/AppHeader";

    export default {
        name: "chatroom",
        components: {AppHeader},
        methods: {
            msg() {
                this.$message.loading('新消息')
            }
        }
    }
</script>

<style scoped>

</style>