import React from 'react'
import pt from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes/fretboard-theme'

import { locShape, noteSelectionShape, locSelectionShape } from 'lib/shapes'
import { ensureNoteObjects, ensureLocObjects } from 'lib/fretboard'

import ViewPortMain from './ViewPortMain'
import OpenPosition from './OpenPosition'
import Nut from './Nut'
import Board from './Board'
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
      tuning, nrOfFrets, skinType, showPositionLabels,
    } = this.props
    const { dimensions: { openWidth, nutWidth, stringHeight } } = defaultTheme
    const boardHeight = tuning.length * stringHeight
    // const totalHeight = showPositionLabels ? boardHeight + stringHeight : boardHeight
    const boardWidth = 100 - openWidth - nutWidth

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper>
          <ViewPortMain height={boardHeight}>
            <OpenPosition
              width={openWidth}
              tuning={tuning}
            />
            <Nut
              skinType={skinType}
              width={nutWidth}
              offset={openWidth}
              tuning={tuning}
            />
            <Board
              skinType={skinType}
              width={boardWidth}
              offset={nutWidth + openWidth}
              tuning={tuning}
              nrOfFrets={nrOfFrets}
            />
          </ViewPortMain>
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
