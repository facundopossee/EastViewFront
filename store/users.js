export const state = () => ({
  list: [],
  user: {},
})

export const mutations = {
  set(state, user) {
    state.list = user
  },
}

export const actions = {
  async get({ commit }, params) {
    await this.$axios.get(`user`, { params }).then((res) => {
      if (res.status === 200) {
        commit('set', res.data)
      }
    })
  },
}
