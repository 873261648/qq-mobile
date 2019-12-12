<template>
    <div class="office">
        <app-header name="行业" back/>
        <ul>
            <li v-for="item of officeList" :key="item.tag" :class="{active:item.tag === active}"
                @click="setOffice(item.tag)">
                <div>
                    <span class="tag" :style="{background:item.color}" v-html="item.tag"></span>
                    <p v-html="item.label"></p>
                </div>
                <span class="icon icon-check"></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import officeList from '@/data/office'

    export default {
        name: 'office',
        data () {
            return {
                officeList
            }
        },
        computed: {
            active () {
                return this.$route.query.tag
            }
        },
        methods: {
            async setOffice (tag) {
                this.$store.commit('userInfo', {
                    office: tag
                })
                await this.$axios({
                    method: 'POST',
                    url: '/api/user/updateinfo',
                    data: {
                        office: tag
                    }
                })
                this.$router.back()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .office {
        padding-top 50px

        ul {
            li {
                display flex
                justify-content space-between
                background-color: #fff
                align-items center
                padding 10px 10px

                & + li {
                    border-top 1px solid #ebedf0
                }

                > div {
                    display flex
                    align-items center

                    .tag {
                        display inline-block
                        font-size 12px
                        color #fff
                        text-align center
                        width 2em
                        height 1em
                        line-height 1
                        border-radius 4px
                        padding 3px 5px
                        margin-right 10px
                    }
                }

                .icon-check {
                    display none
                }

                &.active .icon-check {
                    display inline
                }

            }
        }
    }
</style>
