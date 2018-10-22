import Vue from 'vue'
import Vuex from 'vuex'

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
      FETCH_DATA: ({ commit }) => {
        commit('SET_DATA', {
          login: 'jonkofee',
          spec: 'Backend developer'
        })
      }
    }
  })
}
