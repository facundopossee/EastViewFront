export const state = () => ({
  citizenslist: [],
})

export const mutations = {
  set(state, ctz) {
    state.citizenslist = ctz
  },
}

export const actions = {
  async get({ commit }) {
    await this.$axios.get(`Citizens`).then((res) => {
      if (res.status === 200) {
        commit('set', res.data)
      }
    })
  },
  delete({ commit }, params) {
    return this.$axios.delete(`/citizens/${params.id}`)
  },
  create({ commit }, params) {
    return this.$axios.post(`/citizens`, { ...params })
  },
}
