import { range, compose, curry, zip } from 'lodash/fp'
import { Distance, Interval, Note, Chord, Scale } from 'tonal'
import { compare } from 'lib/notes'

const transpose = curry(Distance.transpose)

export const midiForLocation = (tuning, { crd, pos }) =>
  compose(
    Note.midi,
    transpose(tuning[crd]),
    Interval.fromSemitones,
  )(pos)

const EMPTY_STATE = {
  status: '',
  selectionText: '',
}

const fret = midi => loc => state => ({
  midi,
  loc,
  state,
})

const setText = showName => name => state => (
  showName && name
    ? { ...state, selectionText: name }
    : { ...state, selectionText: '' }
)

const setStatus = name => state => (
  name
    ? { ...state, status: 'selected' }
    : { ...state, status: 'unselected' }
)

const findNote = midi => namedNote =>
  compare(midi)(namedNote[0])


const createFret = (tuning, loc, namedNotes, showName) => {
  const midi = midiForLocation(tuning, loc)
  const namedNote = namedNotes.find(findNote(midi))
  const name = namedNote ? namedNote[1] : null

  return compose(
    fret(midi)(loc),
    setText(showName)(name),
    setStatus(name),
  )(EMPTY_STATE)
}

export const fretMatrix = (tuning, width, namedNotes = [], showName = false) =>
  range(0, tuning.length).map(crd =>
    range(0, width).map(pos =>
      createFret(tuning, { crd, pos }, namedNotes, showName)))

export const entities = {
  pc: pc => [[pc, pc]],
  pitch: pitch => [[pitch, pitch]],
  interval: (tonic, ivl) => [[tonic, '1P'], [Distance.transpose(tonic, ivl), ivl]],
  chord: chord => zip(Chord.notes(chord), Chord.intervals(chord)),
  scale: (tonic, scale) => zip(Scale.notes(tonic, scale), Scale.intervals(scale)),
}

export const fretMatrixForPc = (tuning, width, pc, showName) =>
  fretMatrix(tuning, width, entities.pc(pc), showName)

export const fretMatrixForNote = (tuning, width, note, showName) =>
  fretMatrix(tuning, width, entities.pitch(note), showName)

export const fretMatrixForInterval = (tuning, width, tonic, ivl, showName) =>
  fretMatrix(tuning, width, entities.interval(tonic, ivl), showName)

export const fretMatrixForChord = (tuning, width, chord, showName) =>
  fretMatrix(tuning, width, entities.chord(chord), showName)

export const fretMatrixForScale = (tuning, width, tonic, scale, showName) =>
  fretMatrix(tuning, width, entities.scale(tonic, scale), showName)
