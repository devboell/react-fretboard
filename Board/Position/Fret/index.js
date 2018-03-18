import React from 'react'
import pt from 'prop-types'
import { isEmpty } from 'ramda'
import { isEqual } from 'lib/tonal-helpers'

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
    const { note } = this.props
    const {
      type, showNotes, selectedNotes,
    } = this.context

    const isSelected = !isEmpty(selectedNotes.filter(isEqual(note)))
    const SkinWrapper = fretsBySkin[type]

    return (
      <Wrapper>
        <SkinWrapper isHighlighted={isSelected}>
          {showNotes &&
            <Content note={note} />
          }
        </SkinWrapper>
      </Wrapper>)
  }
}


Fret.propTypes = {
  note: pt.string.isRequired,
}

Fret.contextTypes = {
  selectedNotes: pt.arrayOf(pt.string).isRequired,
  type: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
}

export default Fret
