import initialScore from '~/data/initialScore'
import initialPart from '~/data/initialPart'

export const state = {
  score: initialScore
}

export const mutations = {
  appendPart: (state) => {
    state.score.push(initialPart)
  }
}

export const actions = {
  addPart: ({ commit }, payload) => {
    commit('appendPart', payload)
  },
  editNote: () => {
    console.log('editnote')
  },

  hello: () => {
    console.log('hello')
  }
}
export const getters = {}
