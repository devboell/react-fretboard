import React from 'react'
import pt from 'prop-types'
import BoxesFret from './BoxesFret'
import StringsFret from './SringsFret'


import Wrapper from './Wrapper'

/* eslint-disable react/prefer-stateless-function */
class Fret extends React.Component {
  render() {
    const Outer = this.context.type === 'boxes' ? BoxesFret : StringsFret

    return (
      <Wrapper>
        <Outer note={this.props.note} />
      </Wrapper>)
  }
}


Fret.propTypes = {
  note: pt.string.isRequired,
}

Fret.contextTypes = {
  type: pt.string.isRequired,
}

export default Fret
