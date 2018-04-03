/**
 * helper functions that return commonly used selection objects.
 */

import { Distance, Interval, Chord } from 'tonal'

export const intervalNotes = (note, ivl) =>
  [
    note,
    Distance.transpose(note, Interval.fromSemitones(ivl)),
  ]

export const chordNotes = chord =>
  Chord.notes(chord)
