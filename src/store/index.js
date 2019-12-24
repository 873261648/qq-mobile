import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
        newMessage: {}
    },
    getters: {
        userInfo (state) {
            return state.userInfo
        },
        newMessage () {
            return state.newMessage
        }
    },
    mutations: {
        userInfo (state, val) {
            state.userInfo = {
                ...state.userInfo,
                ...val
            }
        },
        newMessage (state, val) {
            state.newMessage = val
        }
    },
    modules: {}
})
