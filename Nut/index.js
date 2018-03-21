import React from 'react'
import pt from 'prop-types'
import { nutGraphic } from 'components/Fretboard/skins'
import ViewPort from 'components/Fretboard/ViewPort'

const Nut = ({
  tuning,
  width,
  offset,
  skinType,
}) => {
  const NutGraphic = nutGraphic(skinType)
  const nrOfStrings = tuning.length
  return (
    <ViewPort {...{ width, offset }}>
      <NutGraphic nrOfStrings={nrOfStrings} />
    </ViewPort>
  )
}

Nut.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  width: pt.number.isRequired,
  offset: pt.number.isRequired,
  skinType: pt.string.isRequired,
}

export default Nut
