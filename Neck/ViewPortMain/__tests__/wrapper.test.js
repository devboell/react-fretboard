import React from 'react'

import 'jest-styled-components'

import Wrapper from '../Wrapper'

const props = {
  height: 40,
}

it('should return wrapper with correct width', () => {
  const wrapper = shallow(<Wrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})
