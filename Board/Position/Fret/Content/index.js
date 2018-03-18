import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const Content = ({ note }) =>
  <Wrapper>
    {note}
  </Wrapper>

Content.propTypes = {
  note: pt.string.isRequired,
}

export default Content
