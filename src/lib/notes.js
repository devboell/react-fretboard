import { Note } from 'tonal'

export const isPc = note => !Note.props(note).oct
export const chromaFromMidi = midi => Note.props(Note.fromMidi(midi)).chroma
export const compareChroma = (midi, pc) =>
  chromaFromMidi(midi) === Note.props(pc).chroma


export const compare = midi => note => (
  isPc(note)
    ? compareChroma(midi, note)
    : midi === Note.midi(note)
)
