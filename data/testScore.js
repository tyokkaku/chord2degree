import createPart from './util/createPart'

const testScore = [
  createPart('Aメロ', 'C', [
    ['D', 'A'],
    ['B', 'F'],
    ['G', 'D'],
    ['D', 'A', 'A']
  ]),
  createPart('Bメロ', 'C', [
    ['G', 'A'],
    ['D', 'A', 'A'],
    ['B', 'F'],
    ['D', 'A']
  ]),
  createPart('サビ', 'G', [
    ['C', 'F'],
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
