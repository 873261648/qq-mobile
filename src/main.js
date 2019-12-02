import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios';

import Message from "./components/base/message/";

import './assets/css/default.styl';
import './assets/css/iconfont.css';
import './assets/css/main.styl';

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;
Vue.prototype.$message = Message;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
