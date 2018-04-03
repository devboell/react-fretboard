import { intervalNotes } from '../selection'

it('should return array of interval pcs', () => {
  const note = 'C'
  const ivl = 4 // 3M
  const expected = ['C', 'E']
  expect(intervalNotes(note, ivl)).toEqual(expected)
})
