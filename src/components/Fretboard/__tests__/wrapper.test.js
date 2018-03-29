import React from 'react'

import 'jest-styled-components'

import Wrapper from '../Wrapper'


it('should return wrapper with correct width', () => {
  const wrapper = shallow(<Wrapper />)
  expect(wrapper).toMatchSnapshot()
})
