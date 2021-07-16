export const state = () => ({
  authenticated: false,
})

export const mutations = {
  setAuthenticated(state, value) {
    state.authenticated = value
  },
}

export const getters = {
  authenticated(state) {
    return state.authenticated
  },
}
