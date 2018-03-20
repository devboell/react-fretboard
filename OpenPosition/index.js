import React from 'react'
import pt from 'prop-types'

import Position from 'components/Fretboard/Position'
import ViewPort from 'components/Fretboard/ViewPort'

const OpenPosition = ({ width, tuning }) =>
  <ViewPort width={width} offset={0}>
    <foreignObject width="100%" height="100%">
      <Position width={100} pos={0} tuning={tuning} />
    </foreignObject>
  </ViewPort>

OpenPosition.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  width: pt.number.isRequired,
}

export default OpenPosition
