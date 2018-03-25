import React from 'react'
import pt from 'prop-types'
import { reverse } from 'ramda'
import { transpose } from 'lib/tonal-helpers'
import Wrapper from './Wrapper'
import Fret from './Fret/Fret'

const Position = ({ tuning, width, pos }) =>
  <Wrapper {...{ width }}>
    {reverse(tuning).map((openNote, str) => {
      const note = transpose(openNote)(pos)
      const loc = { str, pos }
      return <Fret key={`note-${note}`} {...{ note, loc }} />
    })}
  </Wrapper>


Position.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  width: pt.number.isRequired,
  pos: pt.number.isRequired,
}

export default Position
