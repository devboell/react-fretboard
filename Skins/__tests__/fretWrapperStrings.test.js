import React from 'react'
import 'jest-styled-components'

import theme from 'themes/fretboard-theme'
import FretWrapperStrings from '../FretWrapperStrings'

const defaultProps = {
  isHighlighted: true,
  theme,
}

describe('FretWrapperStrings wrapper', () => {
  it('correct css, isHighlighted=true', () => {
    const wrapper = shallow(<FretWrapperStrings {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('correct css, isHighlighted=false', () => {
    const props = { ...defaultProps, isHighlighted: false }
    const wrapper = shallow(<FretWrapperStrings {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

