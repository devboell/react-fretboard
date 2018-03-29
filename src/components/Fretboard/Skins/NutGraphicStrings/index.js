import React from 'react'
import pt from 'prop-types'
import { stringCenter } from 'lib/fretboard'


const NutGraphicStrings = ({ nrOfStrings }) => {
  const top = stringCenter(nrOfStrings)(0)
  const bottom = (stringCenter(nrOfStrings)(nrOfStrings - 1) - top)

  return (
    <rect
      x="0"
      y={`${top}%`}
      width="100%"
      height={`${bottom}%`}
      fill="black"
    />
  )
}

NutGraphicStrings.propTypes = {
  nrOfStrings: pt.number.isRequired,
}

export default NutGraphicStrings
