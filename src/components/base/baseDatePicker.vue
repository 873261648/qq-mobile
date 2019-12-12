<template>
    <div class="picker">
        <p class="input" v-html="timeStampStrYMD(value)" @click="init"></p>
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
                    <ul class="column" v-for="(ymd,index) of options" :key="index" :style="style[index]">
                        <li v-for="num of ymd" :key="num" v-html="num" :class="{active:num === active[index]}"
                            @click.stop="clickMe(num,index)"></li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import { timeStampStrYMD } from '../../units/unit'

    export default {
        name: 'baseDatePicker',
        props: {
            title: {
                type: String,
                default: '请选择'
            },
            value: {
                type: Number,
                require: true,
            }
        },
        data () {
            return {
                active: [],
                show: false
            }
        },
        computed: {
            style () {
                let active = this.active
                return active.map((activeItem, i) => {
                    let index = this.options[i].findIndex((item) => item === activeItem)
                    // 一共显示五行，起始位置应该是第三个位置
                    index -= 2
                    return { transform: `translate(0,${index * -40}px)`, width: `calc(100% / ${this.active.length})` }
                })
            },
            y () {
                let y = []
                for (let i = 1900; i < new Date().getFullYear() + 1; i++) {
                    y.push(i)
                }
                return y
            },
            m () {
                let m = []
                for (let i = 0; i < 12; i++) {
                    m.push(i + 1)
                }
                return m
            },
            d () {
                // 获取当月天数
                let dNum = new Date(this.active[0], this.active[1], 0).getDate()
                let d = []
                for (let i = 0; i < dNum; i++) {
                    d.push(i + 1)
                }
                // 超过这个月最大天数的时候给最大天数
                if (this.active[2] > dNum) {
                    this.active[2] = dNum
                }
                return d
            },
            options () {
                return [this.y, this.m, this.d]
            }
        },
        methods: {
            timeStampStrYMD,
            init () {
                this.show = true
                let date = new Date()
                if (this.value) {
                    date = new Date(this.value)
                }
                this.active = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
            },
            clickMe (num, index) {
                this.active.splice(index, 1, num)
            },
            change () {
                let date = new Date(this.active[0], this.active[1] - 1, this.active[2]).getTime()
                this.$emit('input', date)
                this.show = false
            }
        }
    }
</script>
