<template>
    <div class="box">
        <div class="left">
            <span :class="leftClassName"></span>
            <slot></slot>
        </div>
        <span :class="rightClassName"></span>
    </div>
</template>

<script>
    export default {
        name: 'userInfoItem',
        props: {
            leftIcon: {
                type: String,
                require: true
            },
            rightIcon: {
                type: String,
                default: 'icon-right'
            }
        },
        computed: {
            leftClassName () {
                let className = { icon: true }
                className[this.leftIcon] = true
                return className
            },
            rightClassName () {
                let className = { icon: true }
                className[this.rightIcon] = true
                return className
            }

        }
    }
</script>

<style lang="stylus" scoped>
    .box {
        display flex
        justify-content space-between
        padding 10px 20px

        .left {
            display flex

            .icon {
                margin-right 10px
            }
        }

        .icon {
            color #989eb4
        }
    }
</style>
