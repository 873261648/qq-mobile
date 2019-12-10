import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Axios from 'axios';

import './registerServiceWorker'
import './units/baseComponent';

import './assets/css/default.styl';
import './assets/css/iconfont.css';
import './assets/css/main.styl';
import './assets/css/animation.styl'

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
