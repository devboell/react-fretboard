import React from 'react'
import 'jest-styled-components'

import Wrapper from '../Wrapper'


it('should return an unclickable wrapper', () => {
  const props = {
    isClickable: false,
  }
  const wrapper = shallow(<Wrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})

it('should return an unclickable wrapper', () => {
  const props = {
    isClickable: true,
  }
  const wrapper = shallow(<Wrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})
