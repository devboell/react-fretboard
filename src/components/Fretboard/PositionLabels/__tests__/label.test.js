import React from 'react'
import 'jest-styled-components'
import theme from 'themes/fretboard-theme'

import Label from '../Label'

const defaultProps = {
  width: 10,
  theme,
}

it('should return Label snapshot', () => {
  const wrapper = shallow(<Label {...defaultProps} />)

  expect(wrapper).toMatchSnapshot()
})
