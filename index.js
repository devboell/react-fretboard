import React from 'react'
import pt from 'prop-types'
import ViewPort from 'components/ViewPort'

import Strings from './Strings'
import Boxes from './Boxes'

const boardTypes = {
  boxes: Boxes,
  strings: Strings,
}

const board = (tuning, nrOfFrets, type) => {
  const Board = boardTypes[type]
  return <Board {...{ tuning, nrOfFrets }} />
}

const Fretboard = ({ tuning, nrOfFrets, type }) =>
  <ViewPort>
    {board(tuning, nrOfFrets, type)}
  </ViewPort>


Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  type: pt.string,
}

Fretboard.defaultProps = {
  type: 'boxes',
}

export default Fretboard
