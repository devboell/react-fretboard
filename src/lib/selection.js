/**
 * helper functions that return commonly used selection objects.
 */

import { contains } from 'ramda'
import { Distance, Interval, Chord, Scale } from 'tonal'

export const intervalNotes = (note, ivl) =>
  [
    note,
    Distance.transpose(note, Interval.fromSemitones(ivl)),
  ]

const namedIntervalNote = (tonic, nameStatus) => note => ({
  note,
  status: nameStatus ? Distance.interval(tonic, note) : 'selected',
  label: Distance.interval(tonic, note),
})

export const namedIntervalNotes = (note, ivl, nameStatus = false) =>
  intervalNotes(note, ivl).map(namedIntervalNote(note, nameStatus))

export const chordNotes = chord =>
  Chord.notes(chord)

const chordTonic = chord =>
  Chord.tokenize(chord)[0]

export const namedChordNotes = (chord, nameStatus = false) =>
  chordNotes(chord).map(namedIntervalNote(chordTonic(chord), nameStatus))

export const scaleNotes = (tonic, scale) =>
  Scale.notes(tonic, scale)

export const namedScaleNotes = (tonic, scale, nameStatus = false) =>
  scaleNotes(tonic, scale).map(namedIntervalNote(tonic, nameStatus))

const position = (openNote, width, note) => {
  const dist = Distance.semitones(openNote, note)
  return width > dist && dist >= 0
    ? dist
    : null
}

// experimental
export const triadShape = (tuning, width, chord, str) => {
  const notes = chordNotes(chord)
  const positions = notes.map((note, i) =>
    position(tuning[(tuning.length - (str + 1)) + i], width, note))
  const chordExists = !contains(null, positions)

  return chordExists
    ? positions.map((pos, i) => ({ str: str - i, pos }))
    : null
}
