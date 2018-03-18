import React from 'react'
import pt from 'prop-types'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes/fretboard-theme'
import ViewPort from './ViewPort'
import BoxesGraphic from './BoxesGraphic'
import StringsGraphic from './StringsGraphic'
import Board from './Board'
import Wrapper from './Wrapper'


const boardGraphicTypes = {
  boxes: BoxesGraphic,
  strings: StringsGraphic,
}

class Fretboard extends React.Component {
  getChildContext() {
    return {
      selectedNotes: this.props.selectedNotes,
      type: this.props.type,
      showNotes: this.props.showNotes,
    }
  }

  render() {
    const { tuning, nrOfFrets, type } = this.props
    const BoardGraphic = boardGraphicTypes[type]
    const height = tuning.length * defaultTheme.stringHeight

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper height={height}>
          <ViewPort height={height}>
            <BoardGraphic {...{ tuning, nrOfFrets }} />
            <Board {...{ tuning, nrOfFrets }} />
          </ViewPort>
        </Wrapper>
      </ThemeProvider>
    )
  }
}


Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  selectedNotes: pt.arrayOf(pt.string),
  type: pt.string,
  showNotes: pt.bool,
}

Fretboard.defaultProps = {
  selectedNotes: [],
  type: 'boxes',
  showNotes: true,
}

Fretboard.childContextTypes = {
  selectedNotes: pt.arrayOf(pt.string),
  type: pt.string,
  showNotes: pt.bool,
}

export default Fretboard
