import React from 'react'
import pt from 'prop-types'

import { Note } from 'tonal'
import AccWrapper from './AccWrapper'

const letterElement = (letter, note) =>
  <span key={`letter-${note}`}>{letter}</span>

const formatAcc = acc => acc.replace('#', '\u266F').replace('b', '\u266D')
const accElement = (acc, note) =>
  <AccWrapper
    key={`acc-${note}`}
  >
    {formatAcc(acc)}
  </AccWrapper>

const octElement = (oct, note) =>
  <span key={`oct-${note}`}>{oct}</span>

const formatNote = (note, noteType) => {
  const tokens = Note.tokenize(note)
  return tokens.map((token, i) => {
    if (i === 0) return letterElement(token, note)
    if (i === 1 && token) return accElement(token, note)
    if (i === 2 && noteType === 'pitch') return octElement(token, note)
    return null
  })
}

const formatEnharmonics = (note, enharmonic, noteType) =>
  [
    ...formatNote(note, noteType),
    <span key="divider">/</span>,
    ...formatNote(enharmonic, noteType),
  ]

const NoteContent = ({ note, noteType, showEnharmonics }) => {
  const enharmonic = Note.enharmonic(note)
  const hasEnharmonic = note !== enharmonic

  const contentNote = hasEnharmonic && showEnharmonics
    ? formatEnharmonics(note, enharmonic, noteType)
    : formatNote(note, noteType)

  return (
    <div>{contentNote}</div>
  )
}


NoteContent.propTypes = {
  note: pt.string.isRequired,
  noteType: pt.string.isRequired,
  showEnharmonics: pt.bool.isRequired,
}

export default NoteContent
