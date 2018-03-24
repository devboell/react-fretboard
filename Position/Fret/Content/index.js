import React from 'react'
import pt from 'prop-types'
// import { isNil } from 'ramda'
// import { Note } from 'tonal'
import Wrapper from './Wrapper'

/*
const formatSharp = sh => sh.replace('#', '\u266F')
const formatFlat = fl => fl.replace('b', '\u266D')

const formatEnharmonics = ([sh, fl]) =>
  `${formatSharp(sh)}/${formatFlat(fl)}`

const formatNote = (note, showEnharmonic) => {
  const enharmonic = Note.enharmonic(note)
  const hasEnharmonic = note !== enharmonic

  return showEnharmonic && hasEnharmonic
    ? formatEnharmonics([note, enharmonic])
    : formatSharp(note)
}
*/

/* the content width is a big problem, some options to exlore:
- format this way 'D#/Eb5'
- make ur own glyph
- showPcs/pitches option
*/

const Content = ({ content }) =>
  /*
  const showEnharmonic = true
  const isNote = !isNil(Note.name(content))
  const note = isNote
    ? formatNote(content, showEnharmonic)
    : undefined

  {note || content}
  */

  (
    <Wrapper>
      {content}
    </Wrapper>
  )


Content.propTypes = {
  content: pt.string.isRequired,
}

export default Content
