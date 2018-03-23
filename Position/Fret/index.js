import React from 'react'
import pt from 'prop-types'
import { isEmpty, isNil, equals, compose } from 'ramda'
import { withTheme } from 'styled-components'
import { isEqual, oct } from 'lib/tonal-helpers'
import { locShape, noteSelectionShape, locSelectionShape } from 'lib/shapes'
import { fretWrapper } from 'components/Fretboard/skins'

import Content from './Content'
import Wrapper from './Wrapper'


/* eslint-disable react/prefer-stateless-function */
class Fret extends React.Component {
  render() {
    const { note, loc, theme } = this.props
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

    const color = compose(
      result => (isSelected ? theme.statusMap[selection.status] : result),
      result => (showOctaves ? theme.octaveMap[oct(note)] : result),
    )('none')
    const isHighlighted = color !== 'none'

    const SkinWrapper = fretWrapper(skinType)

    return (
      <Wrapper onClick={() => clickAction(note, loc)}>
        <SkinWrapper {...{ isHighlighted, color }}>
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
  theme: pt.shape({}).isRequired,
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

export default withTheme(Fret)
