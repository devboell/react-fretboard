/**
 * helper functions that return commonly used selection objects.
 */

import { Distance, Interval } from 'tonal'

/* eslint-disable import/prefer-default-export */
export const intervalNotes = (note, ivl) =>
  [
    note,
    Distance.transpose(note, Interval.fromSemitones(ivl)),
  ]
