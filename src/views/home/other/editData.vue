<template>
    <div id="edit_data">
        <app-header name="编辑资料" back/>
        <div class="content">
            <base-call-group>
                <base-call title="头像" rightIcon="icon-right">
                    <input class="upload_avatar" type="file" accept="image/*" :multiple="false" @change="updateAvatar">
                </base-call>
                <base-call title="个性签名" :edit="true" :content="userInfo.introduction" placeholder="暂时还没有签名哦"
                           @change="update($event.target.value,'introduction')"/>
            </base-call-group>
            <base-call-group>
                <base-call title="昵称" :edit="true" :content="userInfo.nickname"
                           @change="update($event.target.value,'nickname')"/>
                <base-call title="性别" rightIcon="icon-right">
                    <base-picker v-model="userInfo.gender"
                                 :options="['保密','男','女']"
                                 @change="(val)=>{update(val,'gender',0)}"/>
                </base-call>
                <base-call title="生日" rightIcon="icon-right">
                    <base-date-picker v-model="userInfo.birthday" @input="(val)=>{update(val, 'birthday', 0)}"/>
                </base-call>
            </base-call-group>
            <base-call-group title="教育经历">
                <base-call title="添加大学" titleColor="#40a0ff"/>
                <base-call title="添加中学" titleColor="#40a0ff"/>
                <base-call title="添加小学" titleColor="#40a0ff"/>
            </base-call-group>
            <base-call-group>
                <base-call title="职业" rightIcon="icon-right">
                    <p class="office" @click="goOffice(office.tag)">
                        <span class="tag" v-if="office.tag" :style="{background:office.color}" v-html="office.tag"></span>
                        {{office.label}}
                    </p>
                </base-call>
                <base-call title="公司" :edit="true"
                           :content="userInfo.company"
                           placeholder="填写公司，发现同事"
                           @change="update($event.target.value,'company')"/>
                <base-call title="所在地" rightIcon="icon-right">
                    <base-city-picker v-model="userInfo.location"
                                      @input="(val)=>{update(val, 'location', 0)}"/>
                </base-call>
                <base-call title="家乡" rightIcon="icon-right">
                    <base-city-picker v-model="userInfo.hometown"
                                      @input="(val)=>{update(val, 'hometown', 0)}"/>
                </base-call>
                <base-call title="邮箱"
                           :edit="true"
                           :content="userInfo.email"
                           placeholder="你的邮箱"
                           @change="update($event.target.value,'email')"/>
            </base-call-group>
        </div>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader'
    import { antiShake } from '@/units/unit'
    import officeList from '@/data/office'

    export default {
        name: 'editData',
        components: {
            AppHeader
        },
        computed: {
            userInfo: {
                get () {
                    return this.$store.getters.userInfo
                },
                set (val) {
                    this.$store.commit('userInfo', val)
                }
            },
            office () {
                return officeList.find(item => {
                    return item.tag === this.userInfo.office
                }) || {
                    tag: '',
                    label: '',
                    color: '#666'
                }
            }
        },
        methods: {
            async updateAvatar (e) {
                let file = e.target.files[0]
                if (!file) return
                let form = new FormData()
                form.append('file', file)
                let res = await this.$axios({
                    method: 'POST',
                    url: '/api/upload/avatar',
                    headers: { 'content-Type': 'multipart/form-data;charset=UTF-8' },
                    data: form
                })
                this.userInfo = {
                    avatar: res.data.result.avatar
                }
            },
            update (val, key, delay = 1000) {
                antiShake(delay).then(() => {
                    let data = {}
                    data[key] = val
                    this.updateUserInfo(data)
                })
            },
            async updateUserInfo (data) {
                await this.$axios({
                    method: 'POST',
                    url: '/api/user/update_info',
                    data
                })
                this.userInfo = data
            },
            goOffice (tag) {
                this.$router.push({
                    name: '行业',
                    query: { tag }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #edit_data {
        padding-top 50px

        .content {
            > div {
                margin-top 20px
            }

            .upload_avatar {
                opacity 0
            }

            .office {
                width 100%
                height 100%
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
        }
    }
</style>
