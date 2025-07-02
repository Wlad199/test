import { createStore } from 'vuex'

const state = {
  count: 50,
}

const mutations = {
  increment(state, payload) {
    state.count += payload
  },
  decrement(state, payload) {
    state.count -= payload
  },
}

export default createStore({
  state,
  mutations,
})
