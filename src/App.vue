<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        async created () {
            if (sessionStorage.getItem('qq')) {
                let res = await this.$axios.get(`/api/user/info`)
                this.$store.commit('userInfo', res.data.result)
            }
        }
    }
</script>
