import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const Content = ({ content }) =>
  <Wrapper>
    {content}
  </Wrapper>

Content.propTypes = {
  content: pt.string.isRequired,
}

export default Content
