import React from 'react'
import pt from 'prop-types'
import { isEmpty, isNil, compose } from 'ramda'
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
      type, showNotes, showSelection, selectedNotes,
    } = this.context

    const selection = selectedNotes.filter(isEqual(note))[0]
    const isSelected = !isNil(selection)

    const content = compose(
      result => (showSelection && isSelected ? selection : result),
      result => (showNotes ? note : result),
    )('')
    const hasContent = !isEmpty(content)

    const SkinWrapper = fretsBySkin[type]

    return (
      <Wrapper>
        <SkinWrapper isHighlighted={isSelected}>
          {hasContent &&
            <Content content={content} />
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
  showSelection: pt.bool.isRequired,
}

export default Fret
