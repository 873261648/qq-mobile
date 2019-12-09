<template>
    <div id="edit_data">
        <app-header name="编辑资料" back/>
        <div class="content">
            <base-call-group>
                <base-call title="头像" rightIcon="icon-right">
                    <input class="upload_avatar" type="file" accept="image/*" :multiple="false" @change="updateAvatar">
                </base-call>
                <base-call title="个性签名" :edit="true" :content="userInfo.introduction" placeholder="暂时还没有签名哦"
                           @change="update($event,'introduction')"/>
            </base-call-group>
            <base-call-group>
                <base-call title="昵称" :edit="true" :content="userInfo.nickname" @change="update($event,'nickname')"/>
                <base-call title="性别" rightIcon="icon-right"/>
                <base-call title="生日" rightIcon="icon-right"/>
            </base-call-group>
            <base-call-group title="教育经历">
                <base-call title="添加大学" titleColor="#40a0ff"/>
                <base-call title="添加中学" titleColor="#40a0ff"/>
                <base-call title="添加小学" titleColor="#40a0ff"/>
            </base-call-group>
            <base-call-group>
                <base-call title="职业" content="计算机/互联网/通信"/>
            </base-call-group>
        </div>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader'
    import BaseCallGroup from '@/components/base/baseCallGroup'
    import BaseCall from '@/components/base/baseCall'
    import { antiShake } from '@/units/unit'

    export default {
        name: 'editData',
        components: {
            BaseCall,
            BaseCallGroup,
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
            }
        },
        methods: {
            async getUserInfo () {
                let res = await this.$axios.get(`/api/user/info`)
                this.userInfo = res.data.result
            },
            async updateAvatar (e) {
                let file = e.target.files[0]
                if (!file) return
                let form = new FormData()
                form.append('file', file)
                await this.$axios({
                    method: 'POST',
                    url: '/api/upload/avatar',
                    headers: { 'content-Type': 'multipart/form-data;charset=UTF-8' },
                    data: form
                })
                this.getUserInfo()
            },
            update (e, key) {
                antiShake(1000).then(() => {
                    let data = {}
                    data[key] = e.target.value
                    this.updateUserInfo(data)
                })
            },
            async updateUserInfo (data) {
                await this.$axios({
                    method: 'POST',
                    url: '/api/user/updateinfo',
                    data
                })
                this.getUserInfo()
            }
        }
    }
</script>

<style lang="stylus" scoped>
    #edit_data {
        .content {
            > div {
                margin-top 20px
            }

            .upload_avatar {
                opacity 0
            }
        }
    }
</style>
