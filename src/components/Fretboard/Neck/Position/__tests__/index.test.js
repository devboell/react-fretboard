import React from 'react'

import Position from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  width: 12,
  pos: 5,
}

it('Position component, snapshot', () => {
  const wrapper = shallow(<Position {...props} />)
  expect(wrapper).toMatchSnapshot()
})
