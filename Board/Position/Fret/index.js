import React from 'react'
import pt from 'prop-types'
import BoxesFret from './BoxesFret'
import StringsFret from './StringsFret'


import Wrapper from './Wrapper'

/* eslint-disable react/prefer-stateless-function */
class Fret extends React.Component {
  render() {
    const { type, showNotes, isHighlighted } = this.context
    const Outer = type === 'boxes' ? BoxesFret : StringsFret

    return (
      <Wrapper>
        <Outer
          note={this.props.note}
          showNotes={showNotes}
          isHighlighted={isHighlighted}
        />
      </Wrapper>)
  }
}


Fret.propTypes = {
  note: pt.string.isRequired,
}

Fret.contextTypes = {
  type: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
  isHighlighted: pt.bool.isRequired,
}

export default Fret
