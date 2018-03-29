import { compose, flip } from 'ramda'
import { Note } from 'tonal'

export const transpose = (note, useSharps = true) => smtns =>
  compose(
    flip(Note.fromMidi)(useSharps),
    midi => midi + smtns,
    Note.midi,
  )(note)

export const comparePitch = (note1, note2) =>
  Note.midi(note1) === Note.midi(note2)

export const comparePc = (note1, note2) =>
  Note.chroma(note1) === Note.chroma(note2)

export const isPc = note => Note.oct(note) === null

export const isEqual = note1 => note2 => (
  isPc(note2)
    ? comparePc(note1, note2)
    : comparePitch(note1, note2)
)
