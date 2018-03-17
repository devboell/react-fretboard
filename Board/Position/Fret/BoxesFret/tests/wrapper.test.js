import React from 'react'
import theme from 'themes/fretboard-theme'
import 'jest-styled-components'

import Wrapper from '../Wrapper'

const props = {
  theme,
  isHighlighted: true,
}

it('should return wrapper with correct width', () => {
  const wrapper = shallow(<Wrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})
