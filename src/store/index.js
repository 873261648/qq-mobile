import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
        message: {}
    },
    getters: {
        userInfo (state) {
            return state.userInfo
        },
        message (state) {
            return state.message
        }
    },
    mutations: {
        userInfo (state, val) {
            state.userInfo = {
                ...state.userInfo,
                ...val
            }
        },
        message (state, val) {
            state.message = val
        }
    },
    modules: {}
})
