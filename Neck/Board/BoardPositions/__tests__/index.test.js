import React from 'react'

import BoardPositions from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('BoardPositions component, snapshot', () => {
  const wrapper = shallow(<BoardPositions {...props} />)
  expect(wrapper).toMatchSnapshot()
})
