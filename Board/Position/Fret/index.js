import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const Fret = ({ note }) =>
  <Wrapper>
    {note}
  </Wrapper>

Fret.propTypes = {
  note: pt.string.isRequired,
}

export default Fret
