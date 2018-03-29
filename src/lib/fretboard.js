/* eslint-disable import/prefer-default-export */
import { times, sum, isNil } from 'ramda'

export const fretWidth = nrFrets => pos =>
  (((2 ** (1 / nrFrets)) - 1) /
  (2 ** ((pos + 1) / nrFrets))) * 100 * 2

export const fretOffset = nrFrets => pos =>
  // (1 - (1 / (2 ** (pos / nrFrets)))) * 100 * 2
  sum(times(fretWidth(nrFrets), pos))

export const stringHeight = nrOfStrings => 100 / nrOfStrings

export const stringOffset = nrOfStrings => str =>
  str * stringHeight(nrOfStrings)

export const stringCenter = nrOfStrings => str =>
  stringOffset(nrOfStrings)(str) + (stringHeight(nrOfStrings) / 2)


export const ensureNoteObjects = noteProps =>
  noteProps.map(noteProp => (
    typeof noteProp === 'string'
      ? ({
        note: noteProp,
        status: 'selected',
        label: noteProp,
      })
      : ({
        note: noteProp.note,
        status: noteProp.status || 'selected',
        label: noteProp.label || noteProp.note,
      })
  ))

export const ensureLocObjects = locProps =>
  locProps.map(locProp => (
    !isNil(locProp.str)
      ? ({
        loc: locProp,
        status: 'selected',
        label: '',
      })
      : ({
        loc: locProp.loc,
        status: locProp.status || 'selected',
        label: locProp.label || '',
      })
  ))
