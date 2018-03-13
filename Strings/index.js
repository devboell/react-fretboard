import React from 'react'
import pt from 'prop-types'
import { times } from 'ramda'
import { stringCenter, fretOffset } from 'lib/fretboard'


const stringLine = nrOfStrings => (str) => {
  const y = stringCenter(nrOfStrings)(str)
  return (
    <line
      key={`str-${str}`}
      x1="0%"
      x2="100%"
      y1={`${y}%`}
      y2={`${y}%`}
    />)
}

const fretLineBounds = nrOfStrings => (
  {
    top: stringCenter(nrOfStrings)(0),
    bottom: stringCenter(nrOfStrings)(nrOfStrings - 1),
  }
)
const fretLine = (nrOfFrets, nrOfStrings) => (frt) => {
  const { top, bottom } = fretLineBounds(nrOfStrings)
  const x = fretOffset(nrOfFrets)(frt)

  return (
    <line
      key={`fret-${frt}`}
      x1={`${x}%`}
      x2={`${x}%`}
      y1={`${top}%`}
      y2={`${bottom}%`}
    />)
}

const Strings = ({ tuning, nrOfFrets }) => {
  const nrOfStrings = tuning.length
  return (
    <g>
      {times(stringLine(nrOfStrings), nrOfStrings)}
      {times(fretLine(nrOfFrets, nrOfStrings), nrOfFrets)}
    </g>
  )
}

Strings.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
}

export default Strings
