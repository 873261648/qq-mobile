<template>
    <div>编辑资料</div>
</template>

<script>
    export default {
        name: "editData",
        data() {
            return {
                userInfo: {}
            }
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            async getUserInfo() {
                let res = await this.$axios.get('/api/user/info');
                this.userInfo = res.data.result
            }
        }
    }
</script>

<style scoped>

</style>