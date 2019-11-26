<template>
    <div class="home">
<!--        <base-message v-if="aaa"/>-->
        <img alt="Vue logo" src="../assets/logo.png" @click="alert">
        <HelloWorld msg="welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import BaseMessage from "../components/base/message/Main";

    export default {
        name: 'home',
        components: {
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
                    type:"loading",
                    message:"aaa"
                });
            }
        }
    }
</script>
<style>

</style>