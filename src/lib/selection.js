/**
 * helper functions that return commonly used selection objects.
 */

import { Distance, Interval, Chord } from 'tonal'

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
