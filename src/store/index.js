import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    getters: {
        userInfo (state) {
            return state.userInfo
        }
    },
    mutations: {
        userInfo (state, val) {
            state.userInfo = {
                ...state.userInfo,
                ...val
            }
        }
    },
    modules: {}
})
