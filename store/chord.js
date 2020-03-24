// import Vue from 'vue'
import initialScore from '~/data/initialScore'
// import initialPart from '~/data/initialPart'
// import testScore from '~/data/testScore'
import createPart from '~/data/util/createPart'

export const state = {
  score: initialScore
}

export const actions = {
  addPart: ({ commit }) => {
    commit('appendPart')
  },
  addBar: ({ commit }, payload) => {
    commit('appendBar', payload)
  },
  editNote: () => {
    console.log('editnote')
  }
}

export const mutations = {
  appendPart: (state) => {
    state.score.push(
      createPart('', '', [
        ['', ''],
        ['', '']
      ])
    )
  },
  appendBar: (state, partIndex) => {
    state.score[partIndex].bars.push(['', ''])
  }
}

export const getters = {}
