import { API_URL } from '~/contants/api'

export const NAMESPACE = 'full'

export const MUTATION_TYPES = {
  SET_LIST: 'SET_LIST'
}

export const ACTION_TYPES = {
  GET_LIST: 'GET_LIST'
}

export const state = () => ({
  list: []
})

export const mutations = {
  [MUTATION_TYPES.SET_LIST](state, data) {
    state.list = data
  }
}

export const actions = {
  async [ACTION_TYPES.GET_LIST]({ commit, state }) {
    try {
      const list = await this.$http.$get(`${API_URL}?size=1000`)
      await commit(MUTATION_TYPES.SET_LIST, list)
      return list
    } catch (error) {}
  }
}
