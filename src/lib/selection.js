/**
 * helper functions that return commonly used selection objects.
 */

import { contains } from 'ramda'
import { Distance, Interval, Chord, Scale } from 'tonal'

// intervals
const intervalNoteObject = (tonic, useIvlLabel, useIvlStatus) => note => ({
  note,
  label: useIvlLabel ? Distance.interval(tonic, note) : note,
  status: useIvlStatus ? Distance.interval(tonic, note) : 'selected',
})

const intervalNoteArray = (note, ivl) =>
  [
    note,
    Distance.transpose(note, Interval.fromSemitones(ivl)),
  ]

export const intervalNotes = (
  note,
  ivl,
  useIvlLabel = false,
  useIvlStatus = false,
) =>
  intervalNoteArray(note, ivl)
    .map(intervalNoteObject(note, useIvlLabel, useIvlStatus))


// chords
const chordTonic = chord =>
  Chord.tokenize(chord)[0]

export const chordNotes = (chord, useIvlLabel, useIvlStatus) =>
  Chord.notes(chord)
    .map(intervalNoteObject(chordTonic(chord), useIvlLabel, useIvlStatus))


// scales
export const scaleNotes = (tonic, scale, useIvlLabel, useIvlStatus) =>
  Scale.notes(tonic, scale)
    .map(intervalNoteObject(tonic, useIvlLabel, useIvlStatus))


// locations
const position = (openNote, width, note) => {
  const dist = Distance.semitones(openNote, note)
  return width > dist && dist >= 0
    ? dist
    : null
}

// experimental
export const triadShape = (tuning, width, chord, str) => {
  const notes = Chord.notes(chord)
  const positions = notes.map((note, i) =>
    position(tuning[(tuning.length - (str + 1)) + i], width, note))
  const chordExists = !contains(null, positions)

  return chordExists
    ? positions.map((pos, i) => ({ str: str - i, pos }))
    : null
}
