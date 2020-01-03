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
                let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
                if(isBack) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }
                this.$router.isBack = false
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
