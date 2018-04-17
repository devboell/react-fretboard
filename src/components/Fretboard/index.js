import React from 'react'
import pt from 'prop-types'
import { mergeDeepRight } from 'ramda'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes/fretboard-theme'

import { locShape, noteSelectionShape, locSelectionShape } from 'lib/shapes'
import { ensureNoteObjects, ensureLocObjects } from 'lib/fretboard'


import Neck from './Neck'
import PositionLabels from './PositionLabels'

import Wrapper from './Wrapper'

/**
 * **This is the main api component**
 *
 * Here the props get split up in roughly two categories:
 * - props and theme props that determine the dimensions and overall look of the fretboard. They are passed directly to the children
 * - props that determine the appearance of the individual frets, ie the content and color of a Fret. They are passed through react context, and get picked up several levels down by the Fret component.
 */

class Fretboard extends React.Component {
  getChildContext() {
    return {
      skinType: this.props.skinType,
      noteType: this.props.noteType,
      showNotes: this.props.showNotes,
      showSelectionLabels: this.props.showSelectionLabels,
      highlightOctaves: this.props.highlightOctaves,
      highlightSelections: this.props.highlightSelections,
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
      skinType,
      showPositionLabels,
      theme,
    } = this.props
    const mergedTheme = mergeDeepRight(defaultTheme, theme)
    const { dimensions } = mergedTheme
    const { openWidth, nutWidth } = dimensions

    return (
      <ThemeProvider theme={mergedTheme}>
        <Wrapper>
          <Neck
            {...{
              tuning,
              nrOfFrets,
              skinType,
              dimensions,
            }}
          />
          {showPositionLabels &&
            <PositionLabels
              {...{
                nrOfFrets,
                nutWidth,
                openWidth,
              }}
            />
          }
        </Wrapper>
      </ThemeProvider>
    )
  }
}

Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string),
  nrOfFrets: pt.number,
  skinType: pt.oneOf(['boxes', 'strings']),
  noteType: pt.oneOf(['pc', 'pitch']),
  showNotes: pt.bool,
  showSelectionLabels: pt.bool,
  highlightOctaves: pt.bool,
  highlightSelections: pt.bool,
  showEnharmonics: pt.bool,
  showPositionLabels: pt.bool,
  selectedNotes: pt.arrayOf(pt.oneOfType([pt.string, noteSelectionShape])),
  selectedLocations: pt.arrayOf(pt.oneOfType([locShape, locSelectionShape])),
  theme: pt.shape({}),
  clickAction: pt.func,
}

Fretboard.defaultProps = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
  skinType: 'boxes',
  noteType: 'pitch',
  showNotes: false,
  showSelectionLabels: false,
  highlightOctaves: false,
  highlightSelections: true,
  showEnharmonics: false,
  showPositionLabels: true,
  selectedNotes: [],
  selectedLocations: [],
  theme: {},
  clickAction: (note, loc) => ({ note, loc }),
}

Fretboard.childContextTypes = {
  skinType: pt.string,
  noteType: pt.string,
  showNotes: pt.bool,
  showSelectionLabels: pt.bool,
  highlightOctaves: pt.bool,
  highlightSelections: pt.bool,
  showEnharmonics: pt.bool,
  selectedNotes: pt.arrayOf(noteSelectionShape),
  selectedLocations: pt.arrayOf(locSelectionShape),
  clickAction: pt.func,
}

export default Fretboard
