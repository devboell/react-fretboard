import React from 'react'
import pt from 'prop-types'
import { times } from 'ramda'
import ViewPort from 'components/ViewPort'
import { stringCenter, fretOffset } from 'lib/fretboard'


const stringLine = nrOfStrings => (str) => {
  const y = stringCenter(nrOfStrings)(str)
  return <line x1="0%" x2="100%" y1={`${y}%`} y2={`${y}%`} />
}

const fretLineBounds = nrOfStrings => (
  {
    top: stringCenter(nrOfStrings)(0),
    bottom: stringCenter(nrOfStrings)(nrOfStrings - 1),
  }
)
const fretLine = (nrOfFrets, nrOfStrings) => (frt) => {
  console.log('nrOfStrings.length', nrOfStrings.length)

  const { top, bottom } = fretLineBounds(nrOfStrings)
  console.log('bottom', bottom)

  const x = fretOffset(nrOfFrets)(frt)
  return <line x1={`${x}%`} x2={`${x}%`} y1={`${top}%`} y2={`${bottom}%`} />
}

const Fretboard = ({ tuning, nrOfFrets }) => {
  const nrOfStrings = tuning.length
  return (
    <ViewPort>
      {times(stringLine(nrOfStrings), nrOfStrings)}
      {times(fretLine(nrOfFrets, nrOfStrings), nrOfFrets)}
    </ViewPort>
  )
}

Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
}

export default Fretboard
