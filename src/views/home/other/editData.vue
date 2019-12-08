<template>
    <div id="edit_data">
        <app-header name="编辑资料" back/>
        <div class="content">
            <base-call-group>
                <base-call title="头像" rightIcon="icon-right">
                    <input type="file" accept="image/*" :multiple="false" @change="updateAvatar">
                </base-call>
                <base-call title="个性签名" content="暂时还没有签名哦" :edit="true"/>
            </base-call-group>
            <base-call-group>
                <base-call title="昵称" :edit="true"/>
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
    import AppHeader from "../../../components/AppHeader";
    import BaseCallGroup from "../../../components/base/baseCallGroup";
    import BaseCall from "../../../components/base/baseCall";

    export default {
        name: "editData",
        components: {
            BaseCall,
            BaseCallGroup,
            AppHeader
        },
        data() {
            return {
                userInfo: {}
            }
        },
        created() {
            this.getUserInfo()
        },
        methods: {
            async getUserInfo() {
                let res = await this.$axios.get('/api/user/info');
                this.userInfo = res.data.result
            },
            updateAvatar(e) {
                let file = e.target.files[0];
                if (!file) return;
                let form = new FormData();
                form.append('file', file);
                this.$axios({
                    method: "POST",
                    url: "/api/upload/avatar",
                    headers: {'content-Type': "multipart/form-data;charset=UTF-8"},
                    data:form
                })
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
        }
    }
</style>