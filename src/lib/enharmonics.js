import { isEmpty } from 'lodash/fp'
import { Note } from 'tonal'

// assumption: we're only dealing with enharmonics
// of 1st degree alt's with opposite acc types:
// C#/Db D#/Eb F#/Gb G#/Ab A#/Bb

export const hasAcc = note =>
  !isEmpty(Note.props(note).acc)

const isSharp = note =>
  Note.props(note).acc === '#'

export const enharmonics = note => (
  isSharp(note)
    ? [note, Note.enharmonic(note)]
    : [Note.enharmonic(note), note]
)
