import React from 'react'
import theme from 'themes/fretboard-theme'
import 'jest-styled-components'

import AccWrapper from '../AccWrapper'

const props = {
  theme,
}

it('should return wrapper with correct font size', () => {
  const wrapper = shallow(<AccWrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})
