import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

const SignUp = () => import('../views/SignUp');
const Phone = () => import('../components/signUp/phone');
const Password = () => import('../components/signUp/password');
const Done = () => import('../components/signUp/done');

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: '登录页面',
        component: Login
    },
    {
        path: '/home',
        name: '首页',
        component: Home
    },
    {
        path: '/sign_up',
        name: '注册',
        component: SignUp,
        children: [{
            path: '/sign_up',
            name: '输入手机号',
            component: Phone
        }, {
            path: '/sign_up/password',
            name: '输入密码',
            component: Password
        }, {
            path: '/sign_up/done',
            name: '注册成功',
            component: Done
        }]
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
