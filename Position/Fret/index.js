import React from 'react'
import pt from 'prop-types'
import { isEmpty, isNil, compose } from 'ramda'
import { isEqual, oct } from 'lib/tonal-helpers'

import { fretWrapper } from 'components/Fretboard/skins'

import Content from './Content'
import Wrapper from './Wrapper'

const octStatusMap = {
  2: 'oct2',
  3: 'oct3',
  4: 'oct4',
  5: 'oct5',
}

const octStatus = note => octStatusMap[oct(note)]

/* eslint-disable react/prefer-stateless-function */
class Fret extends React.Component {
  render() {
    const { note, loc } = this.props
    const {
      skinType,
      showNotes,
      showOctaves,
      showSelection,
      selectedNotes,
      clickAction,
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

    const SkinWrapper = fretWrapper(skinType)

    return (
      <Wrapper onClick={() => clickAction(note, loc)}>
        <SkinWrapper {...{ isHighlighted, status }}>
          {hasContent &&
            <Content content={content} />
          }
        </SkinWrapper>
      </Wrapper>)
  }
}

const locShape = {
  str: pt.number.isRequired,
  pos: pt.number.isRequired,
}

Fret.propTypes = {
  note: pt.string.isRequired,
  loc: pt.shape(locShape).isRequired,
}

Fret.contextTypes = {
  skinType: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
  showOctaves: pt.bool.isRequired,
  showSelection: pt.bool.isRequired,
  selectedNotes: pt.arrayOf(pt.string).isRequired,
  clickAction: pt.func.isRequired,
}

export default Fret
