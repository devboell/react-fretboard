import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const BoxesContent = ({ note }) =>
  <Wrapper>
    {note}
  </Wrapper>

BoxesContent.propTypes = {
  note: pt.string.isRequired,
}

export default BoxesContent
