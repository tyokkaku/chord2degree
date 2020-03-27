import createPart from './util/createPart'

const testScore = [
  // 1番
  createPart('1', 'A', [
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['A#dim', 'B'],
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['D', 'G', 'N.C']
  ]),
  createPart('2', 'A', [
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['A#dim', 'B'],
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['B', 'Em']
  ]),
  createPart('3', 'B', [
    ['Am7', 'Em'],
    ['D', 'G'],
    ['Am7', 'Em'],
    ['C', 'D', 'G']
  ]),
  createPart('4', 'サビ', [
    ['C', 'G'],
    ['D', 'Em'],
    ['C', 'G'],
    ['D', 'B'],
    ['C', 'G'],
    ['F#m7-5', 'B', 'Em'],
    ['Am7', 'Em'],
    ['C', 'D', 'C#m7-5'],
    ['Am7', 'Em'],
    ['C', 'D', 'G']
  ]),
  createPart('5', '間奏', [
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['A#dim', 'B']
  ]),
  // 2番
  createPart('6', 'A', [
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['A#dim', 'B'],
    ['Em', 'D'],
    ['C', 'G'],
    ['C', 'G'],
    ['D', 'G'],
    ['B', 'D#dim', 'Em']
  ]),
  createPart('7', 'B', [
    ['Am7', 'Em'],
    ['D', 'G'],
    ['Am7', 'Em'],
    ['C', 'D', 'G']
  ]),
  createPart('8', 'サビ', [
    ['C', 'G'],
    ['D', 'Em'],
    ['C', 'G'],
    ['D', 'B'],
    ['C', 'G'],
    ['F#m7-5', 'B', 'Em'],
    ['Am7', 'Em'],
    ['C', 'D', 'C#m7-5'],
    ['Am7', 'Em'],
    ['C', 'D', 'G'],
    ['B']
  ]),
  // 3番
  createPart('9', 'C', [
    ['C#m', 'A'],
    ['B', 'E'],
    ['A', 'E'],
    ['B', 'E'],
    ['C#m', 'A'],
    ['B', 'E'],
    ['A', 'E'],
    ['B', 'E']
  ]),
  createPart('10', 'C', [
    ['C#m', 'A'],
    ['B', 'E'],
    ['A', 'E'],
    ['B', 'E'],
    ['C#m', 'A'],
    ['B', 'E'],
    ['A', 'E'],
    ['D', 'N.C']
  ]),
  createPart('11', 'サビ', [
    ['C', 'G'],
    ['D', 'Em'],
    ['C', 'G'],
    ['D', 'B'],
    ['C', 'G'],
    ['F#m7-5', 'B', 'Em'],
    ['Am7', 'Em'],
    ['C', 'D', 'C#m7-5'],
    ['Am7', 'Em'],
    ['C', 'D', 'G'],
    ['Am7', 'Em'],
    ['C', 'D', 'C']
  ])
]

export default testScore

// Score[part{name,tonic,bars[[note,note]]}]
// createPart('', [
//   ['', ''],
//   ['', ''],
//   ['', ''],
//   ['', ''],
//   ['', ''],
//   ['', ''],
//   ['', ''],
//   ['', '']
// ]),
