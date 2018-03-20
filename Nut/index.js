import React from 'react'
import pt from 'prop-types'

import ViewPort from 'components/Fretboard/ViewPort'

const Nut = ({ width, offset }) =>
  <ViewPort {...{ width, offset }} />

Nut.propTypes = {
  width: pt.number.isRequired,
  offset: pt.number.isRequired,
}

export default Nut
