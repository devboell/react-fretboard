import {
  intervalNotes,
  chordNotes,
} from '../selection'

describe('selection, intervals', () => {
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
})

describe('selection, chords', () => {
  it('should return array of chord pcs', () => {
    const chord = 'CM'
    const expected = ['C', 'E', 'G']
    expect(chordNotes(chord)).toEqual(expected)
  })

  it('should return array of chord pitches', () => {
    const chord = 'C4M'
    const expected = ['C4', 'E4', 'G4']
    expect(chordNotes(chord)).toEqual(expected)
  })
})
