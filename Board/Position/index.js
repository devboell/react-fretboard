import React from 'react'
import pt from 'prop-types'
import { transpose } from 'lib/tonal-helpers'
import Wrapper from './Wrapper'
import Fret from './Fret'

const Position = ({ tuning, width, pos }) =>
  <Wrapper {...{ width }}>
    {tuning.map((openNote) => {
      const note = transpose(openNote)(pos)
      return <Fret key={`note-${note}`} {...{ note }} />
    })}
  </Wrapper>


Position.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  width: pt.number.isRequired,
  pos: pt.number.isRequired,
}

export default Position
