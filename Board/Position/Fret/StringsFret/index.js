import React from 'react'
import pt from 'prop-types'
import StringsContent from '../StringsContent'
import Wrapper from './Wrapper'


const StringsFret = ({
  note, showNotes, isHighlighted,
}) =>
  <Wrapper {...{ isHighlighted }}>
    {showNotes &&
      <StringsContent {...{ note, isHighlighted }} />
    }
  </Wrapper>

StringsFret.propTypes = {
  note: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
  isHighlighted: pt.bool.isRequired,
}

export default StringsFret
