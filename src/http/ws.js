import Router from '../store'
import Vue from 'vue'

let url = window.location.hostname

let Socket = new WebSocket(`ws://${url}:3000`)
Vue.prototype.$socket = Socket

Socket.onerror = (e) => {
    console.error('websocket异常关闭，正在重新连接')
    let timer = setTimeout(() => {
        clearTimeout(timer)
        Socket = new WebSocket(`ws://${url}:3000`)
        Vue.prototype.$socket = Socket
    }, 3000)
}
Socket.onopen = () => {
    console.log('websocket连接成功')
    let qq = sessionStorage.getItem('qq')
    if (!qq) return
    Socket.send(JSON.stringify({
        cmd: 'initInfo',
        qq
    }))
}
Socket.onmessage = (e) => {
    let data = JSON.parse(e.data)
    Router.commit('message', data)
}
Socket.onclose = () => {

}

export default Socket
