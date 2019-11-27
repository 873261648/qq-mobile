<template>
    <div>password</div>
</template>

<script>
    export default {
        name: "password",
        computed: {
            phone() {
                return this.this.$route.query.phone
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>