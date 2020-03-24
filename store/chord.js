import Vue from 'vue'
import initialScore from '~/data/initialScore'
// import initialPart from '~/data/initialPart'
// import testScore from '~/data/testScore'
import createPart from '~/data/util/createPart'

export const state = {
  score: initialScore
}

export const actions = {
  addPartAt: ({ commit }) => {
    commit('appendPart')
  },
  addBarAt: ({ commit }, payload) => {
    commit('appendBar', payload)
  },
  addNoteAt: ({ commit }, payload) => {
    commit('appendNote', payload)
  },
  editNoteAt: ({ commit }, payload) => {
    commit('editNote', payload)
  },
  removePartAt: ({ commit }, payload) => {
    commit('removePart', payload)
  }
  // setTonicAt: ({ commit }, payload) => {
  //   commit('setTonic', payload)
  // }
}

export const mutations = {
  appendPart: (state) => {
    const ids = state.score.map((e) => e.id)
    const max = Math.max(...ids)
    const nextId = max + 1

    state.score.push(
      createPart(nextId, '', [
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
    Vue.set(state.score[partIndex].bars[barIndex], [noteIndex], chord)
  },
  removePart: (state, partIndex) => {
    state.score.splice(partIndex, 1)
  }
  // setTonic: (state, { partIndex, partTonic }) => {
  //   console.log(partIndex, partTonic)
  //   Vue.set(state.score[partIndex], 'tonic', partTonic)
  // }
}

export const getters = {}
