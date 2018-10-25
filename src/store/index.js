import Vue from 'vue'
import Vuex from 'vuex'
import { fetchData } from '../api'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      data: {}
    },
    mutations: {
      SET_DATA: (state, data) => {
        state.data = data
      }
    },
    actions: {
      FETCH_DATA: ({ commit, state }) => {
        return state.data
          ? Promise.resolve(state.data)
          : fetchData().then(data => commit('SET_DATA', data))
      }
    }
  })
}
