import React from 'react'
import pt from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes/fretboard-theme'

import { locShape, noteSelectionShape, locSelectionShape } from 'lib/shapes'
import { ensureNoteObjects, ensureLocObjects } from 'lib/fretboard'


import Neck from './Neck'
import PositionLabels from './PositionLabels'

import Wrapper from './Wrapper'


class Fretboard extends React.Component {
  getChildContext() {
    return {
      skinType: this.props.skinType,
      showNotes: this.props.showNotes,
      showOctaves: this.props.showOctaves,
      showSelection: this.props.showSelection,
      showEnharmonics: this.props.showEnharmonics,
      selectedNotes: ensureNoteObjects(this.props.selectedNotes),
      selectedLocations: ensureLocObjects(this.props.selectedLocations),
      clickAction: this.props.clickAction,
    }
  }


  render() {
    const {
      tuning,
      nrOfFrets,
      showPositionLabels,
      skinType,
    } = this.props
    const { dimensions } = defaultTheme
    const { openWidth, nutWidth } = dimensions

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper>
          <Neck
            {...{
              tuning,
              nrOfFrets,
              dimensions,
              skinType,
            }}
          />
          {showPositionLabels &&
            <PositionLabels
              {...{
                nutWidth,
                openWidth,
                nrOfFrets,
              }}
            />
          }
        </Wrapper>
      </ThemeProvider>
    )
  }
}


Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  skinType: pt.string,
  showNotes: pt.bool,
  showOctaves: pt.bool,
  showSelection: pt.bool,
  showEnharmonics: pt.bool,
  showPositionLabels: pt.bool,
  selectedNotes: pt.arrayOf(pt.oneOfType([pt.string, noteSelectionShape])),
  selectedLocations: pt.arrayOf(pt.oneOfType([locShape, locSelectionShape])),
  clickAction: pt.func,
}

Fretboard.defaultProps = {
  skinType: 'boxes',
  showNotes: true,
  showOctaves: false,
  showSelection: false,
  showEnharmonics: false,
  showPositionLabels: true,
  selectedNotes: [],
  selectedLocations: [],
  clickAction: (note, loc) => ({ note, loc }),
}

Fretboard.childContextTypes = {
  skinType: pt.string,
  showNotes: pt.bool,
  showOctaves: pt.bool,
  showSelection: pt.bool,
  showEnharmonics: pt.bool,
  selectedNotes: pt.arrayOf(noteSelectionShape),
  selectedLocations: pt.arrayOf(locSelectionShape),
  clickAction: pt.func,
}

export default Fretboard
