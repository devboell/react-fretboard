import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const BoxesFret = ({ note }) =>
  <Wrapper>
    {note}
  </Wrapper>

BoxesFret.propTypes = {
  note: pt.string.isRequired,
}

export default BoxesFret
