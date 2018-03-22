import React from 'react'
import pt from 'prop-types'
import { times } from 'ramda'
import { fretWidth } from 'lib/fretboard'

import Label from './Label'
import Wrapper from './Wrapper'
import FretLabels from './FretLabels'

const labels = ['open', 'I', '', 'III', '', 'V', '', 'VII', '', '', 'X', '', 'XII']

const fretLabels = nrOfFrets => n =>
  <Label
    key={`label-${n}`}
    width={fretWidth(nrOfFrets)(n)}
  >
    {labels[n + 1]}
  </Label>

const PositionLabels = ({ openWidth, nutWidth, nrOfFrets }) =>
  <Wrapper>
    <Label width={openWidth}>{labels[0]}</Label>
    <Label width={nutWidth}>&nbsp;</Label>
    <FretLabels width={100 - openWidth - nutWidth}>
      {times(fretLabels(nrOfFrets), nrOfFrets)}
    </FretLabels>
  </Wrapper>


PositionLabels.propTypes = {
  nutWidth: pt.number.isRequired,
  openWidth: pt.number.isRequired,
  nrOfFrets: pt.number.isRequired,
}

export default PositionLabels
