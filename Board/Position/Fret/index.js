import React from 'react'
import pt from 'prop-types'
import Boxes from './Boxes'
import Strings from './Strings'
import Content from './Content'

import Wrapper from './Wrapper'

const fretsBySkin = {
  boxes: Boxes,
  strings: Strings,
}

/* eslint-disable react/prefer-stateless-function */
class Fret extends React.Component {
  render() {
    const {
      type, showNotes, isHighlighted,
    } = this.context

    const SkinWrapper = fretsBySkin[type]

    return (
      <Wrapper>
        <SkinWrapper isHighlighted={isHighlighted}>
          {showNotes &&
            <Content note={this.props.note} />
          }
        </SkinWrapper>
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
