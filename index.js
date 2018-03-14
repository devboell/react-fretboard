import React from 'react'
import pt from 'prop-types'

import ViewPort from './ViewPort'
import BoxesGraphic from './BoxesGraphic'
import StringsGraphic from './StringsGraphic'
import Board from './Board'
import Wrapper from './Wrapper'

const boardGraphicTypes = {
  boxes: BoxesGraphic,
  strings: StringsGraphic,
}


const Fretboard = ({ tuning, nrOfFrets, type }) => {
  const BoardGraphic = boardGraphicTypes[type]

  return (
    <Wrapper>
      <ViewPort>
        <BoardGraphic {...{ tuning, nrOfFrets }} />
        <Board {...{ tuning, nrOfFrets }} />
      </ViewPort>
    </Wrapper>
  )
}


Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  type: pt.string,
}

Fretboard.defaultProps = {
  type: 'boxes',
}

export default Fretboard
