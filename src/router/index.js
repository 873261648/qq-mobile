import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

import SignUp from '../views/SignUp'
import Phone from '../views/signUp/phone'
import Password from '../views/signUp/password'
import Done from '../views/signUp/done'

import Home from '../views/Home'

import Add from '../views/home/friend/add'
import SendVerify from '../views/home/friend/sendVerify'
import NewFriend from '../views/home/friend/newFriend'
import ChatRoom from '../views/home/chat/chatroom'
import FriendDynamic from '../views/home/dynamic/friendDynamic'

import userHome from '../views/home/other/userHome'
import editData from '../views/home/other/editData'
import Office from '../views/home/other/office'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '登录',
        component: Login
    }, {
        path: '/sign_up',
        name: '注册',
        component: SignUp,
        children: [{
            path: '/sign_up',
            name: '输入手机号',
            component: Phone,
            meta: { index: 1 },
        }, {
            path: '/sign_up/password',
            name: '输入密码',
            component: Password,
            meta: { index: 2 },
        }, {
            path: '/sign_up/done',
            name: '注册成功',
            component: Done,
            meta: { index: 3 },
        }]
    }, {
        path: '/home',
        name: '首页',
        component: Home
    }, {
        path: '/home/add',
        name: '添加',
        component: Add
    }, {
        path: '/home/new_friend',
        name: '新朋友',
        component: NewFriend
    }, {
        path: '/home/send_verify',
        name: '发送验证',
        component: SendVerify
    }, {
        path: '/home/user_home',
        name: '个人主页',
        component: userHome
    }, {
        path: '/home/edit_data',
        name: '编辑资料',
        component: editData
    }, {
        path: '/home/office',
        name: '行业',
        component: Office
    }, {
        path: '/home/chatroom',
        name: '聊天室',
        component: ChatRoom
    }, {
        path: '/home/friend_dynamic',
        name: '好友动态',
        component: FriendDynamic
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

VueRouter.prototype.goBack = function () {
    this.isBack = true
    window.history.go(-1)
}

export default router
