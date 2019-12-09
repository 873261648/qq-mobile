<!--基础列组件-->
<template>
    <div class="call" @click="$emit('click')">
        <div class="left">
            <p class="title" v-html="title" :style="{color:titleColor}"></p>
            <slot>
                <input v-if="edit" type="text" :value="content" @input="change" :placeholder="placeholder">
                <p v-else class="content" v-html="content"></p>
            </slot>
        </div>
        <span :class="rightIconClassName"></span>
    </div>
</template>

<script>
    export default {
        name: 'baseCall',
        props: {
            title: String,
            content: String,
            rightIcon: String,
            titleColor: String,
            edit: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String
            }
        },
        computed: {
            rightIconClassName () {
                let className = { icon: true }
                if (this.rightIcon) {
                    className[this.rightIcon] = true
                }
                return className
            }
        },
        methods: {
            change (val) {
                this.$emit('change', val)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .call {
        display flex
        justify-content space-between
        background-color: #fff
        padding 10px 20px

        .left {
            display flex
            justify-content left
            align-items center
            width 100%

            .title {
                min-width 4em
                margin-right 10px
            }

            input {
                width 100%
                border none
            }

            .content {
                width 100%
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
            }
        }
    }
</style>
