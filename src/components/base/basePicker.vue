<template>
    <div class="picker">
        <p class="input" v-html="value" @click="show=true"></p>
        <transition name="fade">
            <div class="overlay" v-if="show" @click="show=false"></div>
        </transition>

        <transition name="slide-in-down">
            <div v-if="show" class="picker_main">
                <div class="title">
                    <span @click="show = false">取消</span>
                    <span v-html="title"></span>
                    <span @click="change">确定</span>
                </div>
                <div class="body">
                    <div class="before"></div>
                    <div class="after"></div>
                    <ul class="column" :style="style">
                        <li v-for="item of columns" :key="item" v-html="item" @click.stop="clickMe(item)"></li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "basePicker",
        props: {
            title: {
                type: String,
                default: '请选择'
            },
            columns: Array,
            value: {}
        },
        data() {
            return {
                active: "",
                show: true
            }
        },
        created() {
            if (this.value) {
                this.active = this.value
            }
        },
        computed: {
            style() {
                let index = this.columns.findIndex((item) => {
                    return item === this.active
                });
                index -= 2;
                return {transform: `translate(0,${index * -40}px)`}
            }
        },
        methods: {
            clickMe(item) {
                this.active = item;
            },
            change() {
                this.$emit('change', this.active);
                this.show = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .overlay {
        position: fixed;
        top 0
        left 0
        right 0
        bottom 0
        background-color: rgba(0, 0, 0, .5)
        z-index 99
    }

    .picker_main {
        position fixed
        width 100vw
        bottom 0
        z-index: 100;
        background-color: #fff

        .title {
            display flex
            justify-content space-between
            border-bottom 1px solid #ebedf0
            line-height 50px
            padding 0 20px
        }

        .body {
            position relative
            height 200px
            overflow hidden

            .after,
            .before {
                position absolute
                width 100%
                height 79px
            }

            .before {
                top 0
                border-bottom 1px solid #ebedf0
                background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))
            }

            .after {
                bottom 0
                border-top 1px solid #ebedf0
                background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))
            }


            .column {
                transition all .2s ease

                li {
                    line-height 40px
                    text-align center
                }
            }
        }
    }
</style>