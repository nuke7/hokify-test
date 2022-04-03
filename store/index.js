export const state = () => ({
  firstName: '',
  lastName: '',
  email: '',
})

export const actions = {
  userStateUpdate({ commit, _state }, payload) {
    commit('updateUser', payload)
  },
}

export const mutations = {
  updateUser(state, payload) {
    state.firstName = payload.firstName
    state.lastName = payload.lastName
    state.email = payload.email
  },

  clearUser(state) {
    state.firstName = ''
    state.lastName = ''
    state.email = ''
  },
}

export const getters = {
  firstName(state) {
    return state.firstName ? state.firstName : ''
  },
  lastName(state) {
    return state.lastName ? state.lastName : ''
  },
  email(state) {
    return state.email ? state.email : ''
  },
  user(state) {
    return state
  },
  stateCheck(state) {
    if (state.firstName || state.lastName || state.email) {
      return true
    }
    return false
  },
}
