<template>
    <div>
        个人主页
        <button @click="editData">编辑资料</button>
    </div>
</template>

<script>
    export default {
        name: "userHome",
        data() {
            return {
                userInfo: {}
            }
        },
        computed: {
            qq() {
                return this.$route.query.qq
            }
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            async getUserInfo() {
                let res = await this.$axios.get(`/api/user/info?qq=${this.qq}`);
                this.userInfo = res.data.result;
            },
            editData() {
                this.$router.push({name: "编辑资料"})
            }
        }
    }
</script>

<style scoped>

</style>