import React from 'react'
import pt from 'prop-types'

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
    return { type: this.props.type }
  }

  render() {
    const { tuning, nrOfFrets, type } = this.props
    const BoardGraphic = boardGraphicTypes[type]

    return (
      <Wrapper>
        <ViewPort>
          <BoardGraphic {...{ tuning, nrOfFrets }} />
          <Board {...{ tuning, nrOfFrets }} />
        </ViewPort>
      </Wrapper>
    )
  }
}


Fretboard.propTypes = {
  tuning: pt.arrayOf(pt.string).isRequired,
  nrOfFrets: pt.number.isRequired,
  type: pt.string,
}

Fretboard.defaultProps = {
  type: 'boxes',
}

Fretboard.childContextTypes = {
  type: pt.string,
}

export default Fretboard
