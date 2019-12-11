<template>
    <div>
        <!--        <app-header back name="添加"/>-->
        <p>选择器</p>
        <base-date-picker v-model="value"/>
        <!--        <base-picker v-model="value2" :options="['北京','上海','深圳']"/>-->
        <base-city-picker v-model="value3"/>
        <button @click="dialog">dialog</button>
    </div>
</template>

<script>
    export default {
        name: "chatroom",
        data() {
            return {
                value: 1576031291167,
                value2: "上海",
                value3: '河南省-洛阳市',
            }
        },
        methods: {
            dialog() {
                this.$dialog({
                    title:"登录失败",
                    message:"账号或密码错误，请重新输入。"
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