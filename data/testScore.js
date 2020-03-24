import createPart from './util/createPart'

const testScore = [
  createPart('Aメロ', [
    ['D', 'A'],
    ['B', 'F'],
    ['G', 'D'],
    ['D', 'A', 'A']
  ]),
  createPart('Bメロ', [
    ['G', 'A'],
    ['D', 'A', 'A'],
    ['B', 'F'],
    ['D', 'A']
  ]),
  createPart('サビ', [
    ['C', 'D'],
    ['D', 'A', 'A', 'B'],
    ['D', 'A'],
    ['G', 'D'],
    ['B', 'F'],
    ['D', 'A'],
    ['D', 'A']
  ])
]

export default testScore

// Score[part{name,tonic,bars[[note,note]]}]
