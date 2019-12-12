<template>
    <div class="picker">
        <p class="input" v-html="value" @click="init"></p>
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
                    <ul class="column" v-for="(level,index) of options" :key="index" :style="style[index]">
                        <li v-for="item of level" :key="item.id" v-html="item.name"
                            :class="{active:item.id === active[index]}"
                            @click.stop="clickMe(item,index)"></li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import provinceList from '../../data/province'
    import cityList from '../../data/city'

    export default {

        name: 'baseCityPicker',
        props: {
            title: {
                type: String,
                default: '请选择'
            },
            value: {
                type: String,
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
                    let index = this.options[i].findIndex((item) => {
                        return item.id === activeItem
                    })
                    index -= 2
                    return {
                        transform: `translate(0,${index * -40}px)`,
                        width: `calc(100% / ${this.active.length})`
                    }
                })
            },
            province () {
                return provinceList
            },
            city () {
                let city = cityList[this.active[0]]
                let presence = city.findIndex(item => item.id === this.active[1])
                if (presence < 0) {
                    this.active[1] = cityList[this.active[0]][0].id
                }
                return cityList[this.active[0]]
            },
            options () {
                return [this.province, this.city]
            }
        },
        methods: {
            init () {
                this.show = true
                let value = this.value || '北京市-市辖区'
                this.active = this.findIDByName(value.split('-'))
            },
            clickMe ({ id, name }, index) {
                this.active.splice(index, 1, id)
            },
            change () {
                this.$emit('input', this.findNameByID(this.active).join('-'))
                this.show = false
            },
            findNameByID (IDArray) {
                let province = provinceList.find(item => item.id === IDArray[0])
                let city = cityList[province.id].find(item => item.id === IDArray[1])
                return [province.name, city.name]
            },
            findIDByName (nameArray) {
                let province = provinceList.find(item => item.name === nameArray[0])
                let city = cityList[province.id].find(item => item.name === nameArray[1])
                return [province.id, city.id]
            }
        }
    }
</script>
