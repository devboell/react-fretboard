import React from 'react'
import 'jest-styled-components'

import theme from 'themes/fretboard-theme'
import Boxes from '../Boxes'

const defaultProps = {
  isHighlighted: true,
  theme,
}

describe('Boxes wrapper', () => {
  it('correct css, isHighlighted=true', () => {
    const wrapper = shallow(<Boxes {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('correct css, isHighlighted=false', () => {
    const props = { ...defaultProps, isHighlighted: false }
    const wrapper = shallow(<Boxes {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

