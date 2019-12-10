<template>
    <div>
        <!--        <app-header back name="添加"/>-->
        <p @click="msg">chatroom</p>
        <base-picker :columns="columns" v-model="value"></base-picker>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";

    export default {
        name: "chatroom",
        components: {AppHeader},
        data() {
            return {
                value: "杭州",
                columns: ['北京', '上海', '江苏', '苏州', '南京', '杭州', '金华']
            }
        },
        watch: {
            value(val) {
                console.log(val)
            }
        },
        methods: {
            msg() {
                this.$message.loading({
                    message: '新消息'
                })
            },
            change(val) {
                console.log(val)
            }
        }
    }
</script>

<style scoped>

</style>