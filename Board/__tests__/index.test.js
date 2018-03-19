import React from 'react'

import Board from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('Board component, snapshot', () => {
  const wrapper = shallow(<Board {...props} />)
  expect(wrapper).toMatchSnapshot()
})
