export const NAMESPACE = 'paginated'

export const MUTATION_TYPES = {
  INCREMENT_INFINITE_ID: 'INCREMENT_INFINITE_ID',
  INCREMENT_PAGE: 'INCREMENT_PAGE',
  RESET_PAGE: 'RESET_PAGE',
  PUSH_LIST: 'PUSH_LIST',
  SET_LIST: 'SET_LIST'
}

export const ACTION_TYPES = {
  GET_LIST: 'GET_LIST'
}

export const state = () => ({
  infiniteId: +new Date(),
  page: 1,
  list: []
})

export const mutations = {
  [MUTATION_TYPES.INCREMENT_PAGE](state) {
    state.page += 1
  },
  [MUTATION_TYPES.INCREMENT_INFINITE_ID](state) {
    state.infiniteId += 1
  },
  [MUTATION_TYPES.PUSH_LIST](state, data) {
    state.list.push(...data)
  },
  [MUTATION_TYPES.SET_LIST](state, data) {
    state.list = data
  },
  [MUTATION_TYPES.RESET_PAGE](state) {
    state.page = 1
  }
}

export const actions = {
  async [ACTION_TYPES.GET_LIST]({ commit, state }) {
    try {
      const list = await this.$http.$get(`/api?page=${state.page}`)
      if (state.page > 1) {
        await commit(MUTATION_TYPES.PUSH_LIST, list)
      } else {
        await commit(MUTATION_TYPES.SET_LIST, list)
      }
      return list
    } catch (error) {}
  }
}
