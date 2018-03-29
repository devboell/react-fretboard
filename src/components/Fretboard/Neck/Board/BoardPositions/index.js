import React from 'react'
import pt from 'prop-types'
import { times } from 'ramda'
import { fretWidth } from 'lib/fretboard'

import Position from 'components/Fretboard/Neck/Position'
import Wrapper from './Wrapper'

const positions = (tuning, nrOfFrets) => (n) => {
  const width = fretWidth(nrOfFrets)(n)
  const pos = n + 1 // set 1st position to 1, not 0
  return <Position key={`pos-${pos}`} {...{ tuning, width, pos }} />
}

const BoardPositions = ({ tuning, nrOfFrets }) =>
  <foreignObject width="100%" height="100%">
    <Wrapper>
      {times(positions(tuning, nrOfFrets), nrOfFrets)}
    </Wrapper>
  </foreignObject>

BoardPositions.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
}

export default BoardPositions
