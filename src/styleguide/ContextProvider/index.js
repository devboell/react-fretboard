import React, { Component } from 'react'
import pt from 'prop-types'
import { noteSelectionShape, locSelectionShape } from 'lib/shapes'

/* eslint-disable react/prefer-stateless-function, react/prop-types */
class ContextProvider extends Component {
  getChildContext() {
    return this.props.context
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

ContextProvider.childContextTypes = {
  skinType: pt.string,
  showNotes: pt.bool,
  highlightOctaves: pt.bool,
  showSelection: pt.bool,
  showEnharmonics: pt.bool,
  selectedNotes: pt.arrayOf(noteSelectionShape),
  selectedLocations: pt.arrayOf(locSelectionShape),
  clickAction: pt.func,
}

export default ContextProvider
