import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'


const SignUp = () => import('../views/SignUp');
const Phone = () => import('../views/signUp/phone');
const Password = () => import('../views/signUp/password');
const Done = () => import('../views/signUp/done');

import Home from '../views/Home'

const Chat = () => import('../views/home/chat');
const Friend = () => import('../views/home/friend');
const Dynamic = () => import('../views/home/dynamic');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: '登录',
        component: Login
    },
    {
        path: '/home',
        name: '首页',
        component: Home,
        children: [{
            path: '/home',
            name: '消息',
            component: Chat
        }, {
            path: '/home/friend',
            name: '联系人',
            component: Friend
        }, {
            path: '/home/dynamic',
            name: '动态',
            component: Dynamic
        }]
    },
    {
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
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
