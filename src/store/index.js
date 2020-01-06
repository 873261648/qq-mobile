import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {},
        message: {},
        badge: {
            chat: 0,
            friend: 0,
            dynamic: 0
        }
    },
    getters: {
        userInfo (state) {
            return state.userInfo
        },
        message (state) {
            return state.message
        },
        badge (state) {
            return state.badge
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
        },
        badge (state, val) {
            state.badge = {
                ...state.badge,
                ...val
            }
        }
    },
    modules: {}
})
