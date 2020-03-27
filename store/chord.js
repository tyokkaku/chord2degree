import Vue from 'vue'
import initialScore from '~/data/initialScore'
// import testScore from '~/data/testScore'
import createPart from '~/data/util/createPart'

export const state = {
  score: initialScore
}

export const actions = {
  addPartAt: ({ commit }, payload) => {
    commit('appendPart', payload)
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
  },
  removeBarAt: ({ commit }, payload) => {
    commit('removeBar', payload)
  },
  removeNoteAt: ({ commit }, payload) => {
    commit('removeNote', payload)
  },
  setPartNameAt: ({ commit }, payload) => {
    commit('setPartName', payload)
  }
}

export const mutations = {
  appendPart: (state, partIndex) => {
    const ids = state.score.map((e) => e.id)
    const max = Math.max(...ids)
    const nextId = max + 1
    const nextPartIndex = partIndex + 1

    state.score.splice(
      nextPartIndex,
      0,
      createPart(nextId, '', [
        ['', ''],
        ['', ''],
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
  },
  removeBar: (state, partIndex) => {
    state.score[partIndex].bars.pop()
  },
  removeNote: (state, { partIndex, barIndex }) => {
    state.score[partIndex].bars[barIndex].pop()
  },
  setPartName: (state, { partIndex, partName }) => {
    console.log(partIndex)
    console.log(partName)
    Vue.set(state.score[partIndex], 'name', partName)
  }
}

export const getters = {}
