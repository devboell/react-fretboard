import React from 'react'
import pt from 'prop-types'
import { isEmpty, isNil, compose } from 'ramda'
import { isEqual, oct } from 'lib/tonal-helpers'

import Boxes from './Boxes'
import Strings from './Strings'
import Content from './Content'

import Wrapper from './Wrapper'

const octStatusMap = {
  2: 'oct2',
  3: 'oct3',
  4: 'oct4',
  5: 'oct5',
}

const octStatus = note => octStatusMap[oct(note)]

const fretsBySkin = {
  boxes: Boxes,
  strings: Strings,
}

/* eslint-disable react/prefer-stateless-function */
class Fret extends React.Component {
  render() {
    const { note } = this.props
    const {
      type,
      showNotes,
      showOctaves,
      showSelection,
      selectedNotes,
    } = this.context

    const selection = selectedNotes.filter(isEqual(note))[0]
    const isSelected = !isNil(selection)

    const content = compose(
      result => (showSelection && isSelected ? selection : result),
      result => (showNotes ? note : result),
    )('')
    const hasContent = !isEmpty(content)


    const status = compose(
      result => (isSelected ? 'selected' : result),
      result => (showOctaves ? octStatus(note) : result),
    )('none')
    const isHighlighted = status !== 'none'

    const SkinWrapper = fretsBySkin[type]

    return (
      <Wrapper>
        <SkinWrapper {...{ isHighlighted, status }}>
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
  type: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
  showOctaves: pt.bool.isRequired,
  showSelection: pt.bool.isRequired,
  selectedNotes: pt.arrayOf(pt.string).isRequired,
}

export default Fret
