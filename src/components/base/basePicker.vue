<template>
    <div class="picker">
        <p class="input" v-html="value" @click="show=true"></p>
        <base-overlay :show.sync="show"/>

        <transition name="slide-in-down">
            <div v-if="show" class="picker_main">
                <div class="head">
                    <span class="close" @click="show = false">取消</span>
                    <span class="title" v-html="title"></span>
                    <span class="ok" @click="change">确定</span>
                </div>
                <div class="body">
                    <div class="before"></div>
                    <div class="after"></div>
                    <ul class="column" :style="style">
                        <li v-for="item of options" :class="{active:item === active}" :key="item" v-html="item"
                            @click.stop="clickMe(item)"></li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'basePicker',
        props: {
            title: {
                type: String,
                default: '请选择'
            },
            options: Array,
            value: {
                default: ''
            }
        },
        data() {
            return {
                active: '',
                show: false
            }
        },
        computed: {
            style() {
                let index = this.options.findIndex((item) => {
                    return item === this.active
                });
                index -= 2;
                return {
                    transform: `translate(0,${index * -40}px)`,
                    width: `100%`
                }
            }
        },
        created() {
            if (this.value) {
                this.active = this.value
            }
        },
        methods: {
            clickMe(item) {
                this.active = item
            },
            change() {
                this.$emit('change', this.active);
                this.show = false
            }
        }
    }
</script>
