import {
  intervalNotes,
  chordNotes,
  scaleNotes,
  triadShape,
} from '../selection'

describe('selection, intervals', () => {
  it('returns note objs, with pc label, and status selected', () => {
    const note = 'C'
    const ivl = 4 // 3M
    const expected = [
      {
        note: 'C',
        label: 'C',
        status: 'selected',
      },
      {
        note: 'E',
        label: 'E',
        status: 'selected',
      },
    ]
    expect(intervalNotes(note, ivl)).toEqual(expected)
  })

  it('returns note objects with pc label, and status selected', () => {
    const note = 'C4'
    const ivl = 4 // 3M
    const expected = [
      {
        note: 'C4',
        label: 'C4',
        status: 'selected',
      },
      {
        note: 'E4',
        label: 'E4',
        status: 'selected',
      },
    ]
    expect(intervalNotes(note, ivl)).toEqual(expected)
  })

  it('returns note objs, with ivl label, and status selected', () => {
    const note = 'C'
    const ivl = 4
    const expected = [
      {
        note: 'C',
        label: '1P',
        status: 'selected',
      },
      {
        note: 'E',
        label: '3M',
        status: 'selected',
      },
    ]
    expect(intervalNotes(note, ivl, true)).toEqual(expected)
  })

  it('returns note objs, with ivl label, and ivl status', () => {
    const note = 'C'
    const ivl = 4
    const expected = [
      {
        note: 'C',
        label: '1P',
        status: '1P',
      },
      {
        note: 'E',
        label: '3M',
        status: '3M',
      },
    ]
    expect(intervalNotes(note, ivl, true, true)).toEqual(expected)
  })

  it('returns note objs, with pitch label, and ivl status', () => {
    const note = 'C4'
    const ivl = 4
    const expected = [
      {
        note: 'C4',
        label: 'C4',
        status: '1P',
      },
      {
        note: 'E4',
        label: 'E4',
        status: '3M',
      },
    ]
    expect(intervalNotes(note, ivl, false, true)).toEqual(expected)
  })
})

describe('selection, chords', () => {
  it('returns note objs, with pc label, and status selected', () => {
    const chord = 'CM'
    const expected = [
      {
        note: 'C',
        label: 'C',
        status: 'selected',
      },
      {
        note: 'E',
        label: 'E',
        status: 'selected',
      },
      {
        note: 'G',
        label: 'G',
        status: 'selected',
      },
    ]
    expect(chordNotes(chord)).toEqual(expected)
  })

  it('returns note objs, with pitch label, and status selected', () => {
    const chord = 'C4M'
    const expected = [
      {
        note: 'C4',
        label: 'C4',
        status: 'selected',
      },
      {
        note: 'E4',
        label: 'E4',
        status: 'selected',
      },
      {
        note: 'G4',
        label: 'G4',
        status: 'selected',
      },
    ]
    expect(chordNotes(chord)).toEqual(expected)
  })

  it('returns note objs, with ivl label, and status selected', () => {
    const chord = 'CM'
    const expected = [
      {
        note: 'C',
        label: '1P',
        status: 'selected',
      },
      {
        note: 'E',
        label: '3M',
        status: 'selected',
      },
      {
        note: 'G',
        label: '5P',
        status: 'selected',
      },
    ]
    expect(chordNotes(chord, true)).toEqual(expected)
  })

  it('returns note objs, with ivl label, and ivl status', () => {
    const chord = 'C4M'
    const expected = [
      {
        note: 'C4',
        label: '1P',
        status: '1P',
      },
      {
        note: 'E4',
        label: '3M',
        status: '3M',
      },
      {
        note: 'G4',
        label: '5P',
        status: '5P',
      },
    ]
    expect(chordNotes(chord, true, true)).toEqual(expected)
  })
})

describe('selection, scales', () => {
  it('returns note objs, with pc label, and status selected', () => {
    const tonic = 'C'
    const scale = 'major'
    expect(scaleNotes(tonic, scale)).toMatchSnapshot()
  })


  it('returns note objects with pitch label, and status selected', () => {
    const tonic = 'C4'
    const scale = 'major'
    expect(scaleNotes(tonic, scale)).toMatchSnapshot()
  })

  it('returns note objects with ivl label, and status selected', () => {
    const tonic = 'C4'
    const scale = 'major'
    expect(scaleNotes(tonic, scale, true)).toMatchSnapshot()
  })

  it('returns note objects with ivl label, and ivl status', () => {
    const tonic = 'C4'
    const scale = 'major'
    expect(scaleNotes(tonic, scale, true, true)).toMatchSnapshot()
  })
})

describe('selection, chord shapes', () => {
  it('should return array locs', () => {
    const chord = 'C4m'
    const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
    const width = 12
    const str = 2
    expect(triadShape(tuning, width, chord, str)).toMatchSnapshot()
  })

  it('should return null for non existing shape', () => {
    const chord = 'G#3m'
    const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']
    const width = 12
    const str = 2
    expect(triadShape(tuning, width, chord, str)).toBe(null)
  })
})
