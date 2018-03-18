import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const StringsContent = ({ note, isHighlighted }) =>
  <Wrapper isHighlighted={isHighlighted}>
    {note}
  </Wrapper>

StringsContent.propTypes = {
  note: pt.string.isRequired,
  isHighlighted: pt.bool.isRequired,
}

export default StringsContent
