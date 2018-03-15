import React from 'react'
import pt from 'prop-types'
import Wrapper from './Wrapper'


const StringsFret = ({ note }) =>
  <Wrapper>
    {note}
  </Wrapper>

StringsFret.propTypes = {
  note: pt.string.isRequired,
}

export default StringsFret
