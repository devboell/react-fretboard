import React from 'react'
import pt from 'prop-types'
import { boardGraphic } from 'components/Fretboard/Skins/skins'

import ViewPort from 'components/Fretboard/Neck/ViewPort'
import BoardPositions from './BoardPositions'

const Board = ({
  tuning,
  nrOfFrets,
  skinType,
  width,
  offset,
}) => {
  const BoardGraphic = boardGraphic(skinType)
  const nrOfStrings = tuning.length
  return (
    <ViewPort {...{ width, offset }}>
      <BoardGraphic {...{ nrOfStrings, nrOfFrets }} />
      <BoardPositions {...{ tuning, nrOfFrets }} />
    </ViewPort>
  )
}

Board.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  skinType: pt.string.isRequired,
  width: pt.number.isRequired,
  offset: pt.number.isRequired,
}

export default Board
