import React from 'react'
import theme from 'themes/fretboard-theme'
import 'jest-styled-components'

import Wrapper from '../Wrapper'

const defaultProps = {
  theme,
  isHighlighted: true,
}

describe('StringsContent Wrapper', () => {
  it('should have correct background, isHeighlighted = true', () => {
    const wrapper = shallow(<Wrapper {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should have correct background, isHeighlighted = false', () => {
    const props = { ...defaultProps, isHighlighted: false }
    const wrapper = shallow(<Wrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

