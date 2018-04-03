import React from 'react'
import pt from 'prop-types'
import { isNil } from 'ramda'
import { Note } from 'tonal'

import Wrapper from './Wrapper'
import NoteContent from './NoteContent'


const Content = ({ content, noteType, showEnharmonics }) => {
  const isNote = !isNil(Note.name(content))

  return (
    <Wrapper>
      {isNote
        ? <NoteContent
          note={content}
          {...{ noteType, showEnharmonics }}
        />
        : content
      }
    </Wrapper>
  )
}


Content.propTypes = {
  content: pt.string.isRequired,
  noteType: pt.string.isRequired,
  showEnharmonics: pt.bool.isRequired,
}

export default Content
