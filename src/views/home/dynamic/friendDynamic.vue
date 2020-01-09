<template>
    <div>
        <app-header name="个人主页" :backgroundOpacity="headerOpacity" back>
            <div class="setup">设置</div>
        </app-header>
    </div>
</template>

<script>
    export default {
        name: 'friendDynamic',
        data () {
            return {
                headerOpacity: window.scrollY < 200 ? 0 : 1
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
            }
        }
    }
</script>

<style scoped>

</style>
