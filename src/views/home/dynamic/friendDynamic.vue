<template>
    <div>
        <app-header name="个人主页" :backgroundOpacity="headerOpacity" back>
            <div class="setup">设置</div>
        </app-header>
        <img class="home_bg" :src="homeBgUrl" alt="">
    </div>
</template>

<script>
    export default {
        name: 'friendDynamic',
        data () {
            return {
                userInfo: {},
                headerOpacity: window.scrollY < 200 ? 0 : 1
            }
        },
        computed: {
            homeBgUrl () {
                return this.userInfo.home_bg || require('@/assets/img/defaule_home_bg.png')
            }
        },
        created () {
            this.getUserInfo()
            window.addEventListener('scroll', this.opacityChange)
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.opacityChange)
        },
        methods: {
            opacityChange () {
                this.headerOpacity = window.scrollY < 200 ? 0 : 1
            },
            async getUserInfo () {
                let res = await this.$axios.get(`/api/user/info`)
                this.friendInfo = res.data.result
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .setup {
        font-size 16px
        color #fff
    }
    .home_bg{
        width 100%
        height 75vw
        object-fit cover
    }
</style>
