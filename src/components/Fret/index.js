/* eslint-disable import/extensions */
import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'lodash/fp'
import { Note } from 'tonal'

import Outer from './Outer'
import Inner from './Inner'
import Content from './Content'

const octForMidi = midi =>
  compose(
    Note.oct,
    Note.fromMidi,
  )(midi)

const pcForMidi = midi =>
  compose(
    Note.pc,
    Note.fromMidi,
  )(midi)

const Fret = ({
  fret,
  settings,
  isClickable,
  onFretClick,
}) => {
  const { showOctaves, showNotes } = settings
  const { midi, loc, state: { status, selectionText } } = fret
  const isFretClickable = isClickable && status === 'unselected'

  return (
    <Outer
      isClickable={isFretClickable}
      onClick={isFretClickable
        ? () => onFretClick(loc, midi)
        : null
      }
    >
      <Inner
        status={status}
        showOctaves={showOctaves}
        oct={octForMidi(midi)}
      >
        <Content
          pc={pcForMidi(midi)}
          showNotes={showNotes}
          selectionText={selectionText}
          isSelected={status === 'selected'}
        />
      </Inner>
    </Outer>
  )
}
Fret.propTypes = {
  fret: PropTypes.shape({}).isRequired,
  settings: PropTypes.shape({}).isRequired,
  isClickable: PropTypes.bool.isRequired,
  onFretClick: PropTypes.func.isRequired,
}

export default Fret
