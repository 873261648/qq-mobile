import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

const SignUp = () => import('../views/SignUp')

Vue.use(VueRouter)

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
        component: SignUp
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
