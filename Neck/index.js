import React from 'react'
import pt from 'prop-types'

import ViewPortMain from './ViewPortMain'
import OpenPosition from './OpenPosition'
import Nut from './Nut'
import Board from './Board'

const Neck = ({
  tuning,
  nrOfFrets,
  dimensions,
  skinType,
}) => {
  const { openWidth, nutWidth, stringHeight } = dimensions
  const boardHeight = tuning.length * stringHeight
  const boardWidth = 100 - openWidth - nutWidth

  return (
    <ViewPortMain height={boardHeight}>
      <OpenPosition
        width={openWidth}
        tuning={tuning}
      />
      <Nut
        skinType={skinType}
        width={nutWidth}
        offset={openWidth}
        tuning={tuning}
      />
      <Board
        skinType={skinType}
        width={boardWidth}
        offset={nutWidth + openWidth}
        tuning={tuning}
        nrOfFrets={nrOfFrets}
      />
    </ViewPortMain>
  )
}


Neck.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  dimensions: pt.shape({}).isRequired,
  skinType: pt.string.isRequired,
}

export default Neck
