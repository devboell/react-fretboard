import React from 'react'
import pt from 'prop-types'
import { times } from 'ramda'
import { fretWidth } from 'lib/fretboard'

import Wrapper from './Wrapper'
import Position from './Position'

const positions = (tuning, nrOfFrets) => (pos) => {
  const width = fretWidth(nrOfFrets)(pos)
  return <Position key={`pos-${pos}`} {...{ tuning, width, pos }} />
}

const Board = ({ tuning, nrOfFrets }) =>
  <foreignObject width="100%" height="100%">
    <Wrapper>
      {times(positions(tuning, nrOfFrets), nrOfFrets)}
    </Wrapper>
  </foreignObject>

Board.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
}

export default Board
