import Vue from 'vue'
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
  addNote: ({ commit }, payload) => {
    commit('appendNote', payload)
  },
  editNoteAt: ({ commit }, payload) => {
    commit('editNote', payload)
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
  },
  appendNote: (state, { partIndex, barIndex }) => {
    state.score[partIndex].bars[barIndex].push('')
  },
  editNote: (state, { partIndex, barIndex, noteIndex, chord }) => {
    // editNote: (state, { bar, noteIndex, chord }) => {
    // console.log(bar, noteIndex, chord)
    // state.score[partIndex].bars[barIndex][noteIndex]
    Vue.set(state.score[partIndex].bars[barIndex], [noteIndex], chord)
  }
}

export const getters = {}
