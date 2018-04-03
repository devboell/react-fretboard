import { intervalNotes } from '../selection'

it('should return array of interval pcs', () => {
  const note = 'C'
  const ivl = 4 // 3M
  const expected = ['C', 'E']
  expect(intervalNotes(note, ivl)).toEqual(expected)
})

it('should return array of interval pitches', () => {
  const note = 'C4'
  const ivl = 4 // 3M
  const expected = ['C4', 'E4']
  expect(intervalNotes(note, ivl)).toEqual(expected)
})
