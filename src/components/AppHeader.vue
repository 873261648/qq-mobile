<template>
    <div id="header">
        <div class="avatar">
            <img :src="userInfo.avatar" alt="avatar">
        </div>
        <div class="name" v-html="name"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TheHeader",
        props: {
            name: {
                type: String,
                require: true
            }
        },
        computed: {
            userInfo() {
                return this.$store.getters.userInfo
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #header {
        display flex
        align-items center
        justify-content space-between
        background: linear-gradient(-45deg, #00a8ff, #00d9ff);
        padding 10px

        .avatar {
            img {
                width 30px
                border-radius 100px
                object-fit cover
            }
        }

        .name {
            color #fff
            font-size 16px
        }
    }
</style>