import Store from '../store'
import Vue from 'vue'

let Socket = new WebSocket('ws://localhost:3000')
Vue.prototype.$socket = Socket;

Socket.onerror = (e) => {
    console.error('websocket异常关闭，正在重新连接')
    let timer = setTimeout(() => {
        clearTimeout(timer)
        Socket = new WebSocket('ws://localhost:3000');
        Vue.prototype.$socket = Socket;
    }, 3000)
}
Socket.onopen = () => {
    console.log('websocket连接成功')
}
Socket.onmessage = (e) => {
    console.log(e.data)
}
Socket.onclose = () => {

}
