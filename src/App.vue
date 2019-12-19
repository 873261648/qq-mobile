<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view/>
        </transition>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                transitionName: 'slide-right'
            }
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        async created () {
            if (sessionStorage.getItem('qq')) {
                let res = await this.$axios.get(`/api/user/info`)
                this.$store.commit('userInfo', res.data.result)
            }
        }
    }
</script>
<style>
    #app {
        width: 100vw;
    }
</style>
