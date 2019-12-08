import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    getters: {
        userInfo(state) {
            if (!Object.keys(state.userInfo).length) {
                state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
            }
            return state.userInfo;
        }
    },
    mutations: {
        userInfo(state, val) {
            state.userInfo = val
        }
    },
    actions: {},
    modules: {}
})