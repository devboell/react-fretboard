import React from 'react'
import Wrapper from '../Wrapper'

const props = {
  width: 10,
}

it('should return wrapper with correct width', () => {
  const wrapper = shallow(<Wrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})
