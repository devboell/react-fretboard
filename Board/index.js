import React from 'react'
import pt from 'prop-types'

import ViewPort from 'components/Fretboard/ViewPort'

import BoxesGraphic from './BoxesGraphic'
import StringsGraphic from './StringsGraphic'
import BoardPositions from './BoardPositions'

const boardGraphicTypes = {
  boxes: BoxesGraphic,
  strings: StringsGraphic,
}

const Board = ({
  tuning,
  nrOfFrets,
  type,
  width,
  offset,
}) => {
  const BoardGraphic = boardGraphicTypes[type]

  return (
    <ViewPort {...{ width, offset }}>
      <BoardGraphic {...{ tuning, nrOfFrets }} />
      <BoardPositions {...{ tuning, nrOfFrets }} />
    </ViewPort>
  )
}

Board.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  type: pt.string.isRequired,
  width: pt.number.isRequired,
  offset: pt.number.isRequired,
}

export default Board
