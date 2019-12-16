import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'


const SignUp = () => import('../views/SignUp');
const Phone = () => import('../views/signUp/phone');
const Password = () => import('../views/signUp/password');
const Done = () => import('../views/signUp/done');

import Home from '../views/Home'

const Add = () => import('../views/home/friend/add');
const SendVerify = () => import('../views/home/friend/sendVerify');
const ChatRoom = () => import('../views/home/chat/chatroom');
const userHome = () => import('../views/home/other/userHome');
const editData = () => import('../views/home/other/editData');
const Office = () => import('../views/home/other/office');


Vue.use(VueRouter);

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
            meta: {index: 1},
        }, {
            path: '/sign_up/password',
            name: '输入密码',
            component: Password,
            meta: {index: 2},
        }, {
            path: '/sign_up/done',
            name: '注册成功',
            component: Done,
            meta: {index: 3},
        }]
    }, {
        path: '/home',
        name: '首页',
        component: Home
    }, {
        path: "/home/add",
        name: "添加",
        component: Add
    },{
        path: "/home/send_verify",
        name: "发送验证",
        component: SendVerify
    }, {
        path: "/home/user_home",
        name: "个人主页",
        component: userHome
    },{
        path: "/home/edit_data",
        name: "编辑资料",
        component: editData
    },{
        path: "/home/office",
        name: "行业",
        component: Office
    },{
        path: "/home/chatroom",
        name: "聊天室",
        component: ChatRoom
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
