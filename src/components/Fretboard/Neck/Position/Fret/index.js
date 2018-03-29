import React from 'react'
import pt from 'prop-types'
import { isNil } from 'ramda'
import { withTheme } from 'styled-components'

import { locShape, noteSelectionShape, locSelectionShape } from 'lib/shapes'
import {
  selectedNote,
  selectedLoc,
  decideContent,
  decideColor,
} from 'lib/fret'
import { fretWrapper } from 'components/Fretboard/Skins/skins'

import Content from './Content'
import Wrapper from './Wrapper'


/* eslint-disable react/prefer-stateless-function */
export class Fret extends React.Component {
  render() {
    const { note, loc, theme } = this.props
    const {
      skinType,
      showNotes,
      showOctaves,
      showSelection,
      showEnharmonics,
      selectedNotes,
      selectedLocations,
      clickAction,
    } = this.context

    const noteSelection = selectedNote(note, selectedNotes)
    const locSelection = selectedLoc(loc, selectedLocations)
    const selection = noteSelection || locSelection


    const content = decideContent(
      showSelection,
      selection,
      showNotes,
      note,
    )

    const color = decideColor(
      selection,
      theme,
      showOctaves,
      note,
    )

    const isHighlighted = !isNil(color)

    const SkinWrapper = fretWrapper(skinType)

    return (
      <Wrapper onClick={() => clickAction(note, loc)}>
        <SkinWrapper {...{ isHighlighted, color }}>
          {content &&
            <Content {...{ content, showEnharmonics }} />
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
  showEnharmonics: pt.bool.isRequired,
  selectedNotes: pt.arrayOf(noteSelectionShape).isRequired,
  selectedLocations: pt.arrayOf(locSelectionShape).isRequired,
  clickAction: pt.func.isRequired,
}

export default withTheme(Fret)
