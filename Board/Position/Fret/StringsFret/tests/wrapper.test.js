import React from 'react'
import theme from 'themes/fretboard-theme'
import 'jest-styled-components'

import Wrapper from '../Wrapper'

const defaultProps = {
  theme,
  isHighlighted: true,
}

describe('StringsFret Wrapper', () => {
  it('should return width 100%', () => {
    const wrapper = shallow(<Wrapper {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should return highlighted circle', () => {
    const props = { ...defaultProps, isHighlighted: false }
    const wrapper = shallow(<Wrapper {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

