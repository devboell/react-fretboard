import React from 'react'
import pt from 'prop-types'
import { isEmpty, isNil, equals, compose } from 'ramda'
import { isEqual, oct } from 'lib/tonal-helpers'
import { locShape, noteSelectionShape, locSelectionShape } from 'lib/shapes'
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
      selectedLocations,
      clickAction,
    } = this.context

    const findNote = (acc, curr) => (
      isEqual(note)(curr.note)
        ? curr
        : acc
    )

    const findLoc = (acc, curr) => (
      equals(loc)(curr.loc)
        ? curr
        : acc
    )

    const noteSelection = selectedNotes.reduce(findNote, undefined)
    const locSelection = selectedLocations.reduce(findLoc, undefined)

    const selection = noteSelection || locSelection
    const isSelected = !isNil(selection)

    const content = compose(
      result => (showSelection && isSelected ? selection.label : result),
      result => (showNotes ? note : result),
    )('')
    const hasContent = !isEmpty(content)

    const status = compose(
      result => (isSelected ? selection.status : result),
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


Fret.propTypes = {
  note: pt.string.isRequired,
  loc: locShape.isRequired,
}

Fret.contextTypes = {
  skinType: pt.string.isRequired,
  showNotes: pt.bool.isRequired,
  showOctaves: pt.bool.isRequired,
  showSelection: pt.bool.isRequired,
  selectedNotes: pt.arrayOf(noteSelectionShape).isRequired,
  selectedLocations: pt.arrayOf(locSelectionShape).isRequired,
  clickAction: pt.func.isRequired,
}

export default Fret
