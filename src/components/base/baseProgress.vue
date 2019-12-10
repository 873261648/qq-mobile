<template>
    <div class="progress-box" :style="boxStyle">
        <div class="progress" :style="progressStyle"></div>
    </div>
</template>

<script>
    export default {
        name: 'BaseProgress',
        props: {
            color: {
                type: String,
                default: '#10bffe'
            },
            background: {
                type: String,
                default: '#f2f2f2'
            },
            width: {
                type: Number,
                require: true,
                default: 10
            },
            number: {
                type: Number,
                require: true
            }
        },
        computed: {
            boxStyle() {
                return {
                    height: this.width + 'px',
                    background: this.background
                }
            },
            progressStyle() {
                return {
                    width: this.number + '%',
                    background: this.color
                }
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .progress-box {
        .progress {
            transition all .4s
            height 100%
        }
    }
</style>
