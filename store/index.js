export const state = () => ({
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
  isDark: false,
})

export const actions = {
  userStateUpdate({ commit, _state }, payload) {
    commit('updateUser', payload)
  },
  darkToggle({ commit, _state }, _payload) {
    commit('toggleDark')
  },
}

export const mutations = {
  updateUser(state, payload) {
    state.user.firstName = payload.firstName
    state.user.lastName = payload.lastName
    state.user.email = payload.email
  },

  clearUser(state) {
    state.user.firstName = ''
    state.user.lastName = ''
    state.user.email = ''
  },

  toggleDark(state) {
    state.isDark = !state.isDark
  },
}

export const getters = {
  firstName(state) {
    return state.user.firstName ? state.user.firstName : ''
  },
  lastName(state) {
    return state.user.lastName ? state.user.lastName : ''
  },
  email(state) {
    return state.user.email ? state.user.email : ''
  },
  user(state) {
    return state.user
  },
  stateCheck(state) {
    if (state.user.firstName || state.user.lastName || state.user.email) {
      return true
    }
    return false
  },
  isDarkCheck(state) {
    return state.isDark
  },
}
