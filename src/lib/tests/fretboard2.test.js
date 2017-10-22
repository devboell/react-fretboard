import {
  midiForLocation,
  fretMatrix,
  locationsForNote,
  locationsForPc,
  fretMatrixForChord,
} from '../fretboard2'

const width = 13
const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

// midi nr's are transposed for guitar
const E2 = 40
const C3 = 48
const D4 = 62
const A4 = 69

it('midiForLocation', () => {
  expect(midiForLocation(tuning, { crd: 0, pos: 0 })).toBe(E2)
  expect(midiForLocation(tuning, { crd: 1, pos: 3 })).toBe(C3)
  expect(midiForLocation(tuning, { crd: 3, pos: 7 })).toBe(D4)
  expect(midiForLocation(tuning, { crd: 5, pos: 5 })).toBe(A4)
})

it('fretMatrix', () => {
  expect(fretMatrix({ tuning, width })).toMatchSnapshot()
})

it('locationsForNote', () => {
  expect(locationsForNote(tuning, width, 'C3')).toEqual([[0, 8], [1, 3]])
})

it('locationsForPc', () => {
  expect(locationsForPc(tuning, width, 'E'))
    .toEqual([[0, 0], [0, 12], [1, 7], [2, 2], [3, 9], [4, 5], [5, 0], [5, 12]])

  expect(locationsForPc(tuning, width, 'F'))
    .toEqual([[0, 1], [1, 8], [2, 3], [3, 10], [4, 6], [5, 1]])
})

it('fretMatrixForChord', () => {
  expect(fretMatrixForChord(tuning, width, 'CM', true)).toMatchSnapshot()
})
