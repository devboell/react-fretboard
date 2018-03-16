import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const StringsContent = ({ note }) =>
  <Wrapper>
    {note}
  </Wrapper>

StringsContent.propTypes = {
  note: pt.string.isRequired,
}

export default StringsContent
