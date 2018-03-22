import React from 'react'
import pt from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes/fretboard-theme'
import ViewPortMain from './ViewPortMain'
import OpenPosition from './OpenPosition'
import Nut from './Nut'
import Board from './Board'
import PositionLabels from './PositionLabels'

import Wrapper from './Wrapper'
import ViewPortWrapper from './ViewPortWrapper'


class Fretboard extends React.Component {
  getChildContext() {
    return {
      skinType: this.props.skinType,
      showNotes: this.props.showNotes,
      showOctaves: this.props.showOctaves,
      showSelection: this.props.showSelection,
      selectedNotes: this.props.selectedNotes,
    }
  }

  render() {
    const {
      tuning, nrOfFrets, skinType, showPositionLabels,
    } = this.props
    const { dimensions: { openWidth, nutWidth, stringHeight } } = defaultTheme
    const boardHeight = tuning.length * stringHeight
    const totalHeight = showPositionLabels ? boardHeight + stringHeight : boardHeight
    const boardWidth = 100 - openWidth - nutWidth

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper height={totalHeight}>
          <ViewPortWrapper height={boardHeight}>
            <ViewPortMain>
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
          </ViewPortWrapper>
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
  showPositionLabels: pt.bool,
  selectedNotes: pt.arrayOf(pt.string),
}

Fretboard.defaultProps = {
  skinType: 'boxes',
  showNotes: true,
  showOctaves: false,
  showSelection: false,
  showPositionLabels: true,
  selectedNotes: [],
}

Fretboard.childContextTypes = {
  skinType: pt.string,
  showNotes: pt.bool,
  showOctaves: pt.bool,
  showSelection: pt.bool,
  selectedNotes: pt.arrayOf(pt.string),
}

export default Fretboard
