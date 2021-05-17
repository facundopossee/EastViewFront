/* eslint-disable eqeqeq */
/* eslint-disable no-var */
export const state = () => ({
  taskList: [],
  taskFiltered: [],
})

export const mutations = {
  set(state, tsk) {
    state.taskList = tsk
  },
  setFiltered(state, filt) {
    state.taskFiltered = filt
  },
  updateList(state, id) {
    var objIndex = state.taskList.findIndex((obj) => obj.id == id)
    state.taskList[objIndex].state = 1
    state.taskFiltered[objIndex].state = 1
  },
}

export const actions = {
  async get({ commit }) {
    await this.$axios.get(`Tasks`).then((res) => {
      if (res.status === 200) {
        commit('set', res.data)
      }
    })
  },
  delete({ commit }, params) {
    return this.$axios.delete(`/tasks/${params.id}`)
  },
  create(params) {
    return this.$axios.post(`/tasks`, { ...params })
  },
  changeState({ commit }, params) {
    params.state = 1
    return this.$axios.put(`/tasks/${params.id}`, { ...params }).then(() => {
      commit('updateList', params.id)
    })
  },
  filterTask({ state, commit }, payload) {
    commit(
      'setFiltered',
      state.taskList.filter((c) => payload == c.day)
    )
  },
}
