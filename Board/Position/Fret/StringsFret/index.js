import React from 'react'
import pt from 'prop-types'
import StringsContent from '../StringsContent'
import Wrapper from './Wrapper'


const StringsFret = ({ note, showNotes }) =>
  <Wrapper>
    {showNotes &&
      <StringsContent note={note} />
    }
  </Wrapper>

StringsFret.propTypes = {
  note: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
}

export default StringsFret
