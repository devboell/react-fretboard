import React from 'react'
import pt from 'prop-types'
import { times, range } from 'ramda'
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

const BoardGraphicStrings = ({ nrOfStrings, nrOfFrets }) =>
  <g>
    {times(stringLine(nrOfStrings), nrOfStrings)}
    {range(1, nrOfFrets).map(fretLine(nrOfFrets, nrOfStrings))}
  </g>


BoardGraphicStrings.propTypes = {
  nrOfStrings: pt.number.isRequired,
  nrOfFrets: pt.number.isRequired,
}

export default BoardGraphicStrings
