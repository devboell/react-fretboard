import React from 'react'
import pt from 'prop-types'
import { isNil } from 'ramda'
import { Note } from 'tonal'
import Wrapper from './Wrapper'

const formatSharp = sh => sh // sh.replace('#', '\u266F')
const formatFlat = fl => fl // fl.replace('b', '\u266D')

const formatEnharmonics = ([sh, fl]) =>
  `${formatSharp(sh)}/${formatFlat(fl)}`

const formatNote = (note, showEnharmonics) => {
  const enharmonic = Note.enharmonic(note)
  const hasEnharmonic = note !== enharmonic

  return showEnharmonics && hasEnharmonic
    ? formatEnharmonics([note, enharmonic])
    : formatSharp(note)
}
/* the content width is a big problem, some options to exlore:
- format this way 'D#|Eb5'
- make ur own glyph
- showPcs/pitches option
- equal length frets
*/
const Content = ({ content, showEnharmonics }) => {
  const isNote = !isNil(Note.name(content))
  const note = isNote
    ? formatNote(content, showEnharmonics)
    : undefined

  return (
    <Wrapper>
      {note || content}
    </Wrapper>
  )
}


Content.propTypes = {
  content: pt.string.isRequired,
  showEnharmonics: pt.bool.isRequired,
}

export default Content
