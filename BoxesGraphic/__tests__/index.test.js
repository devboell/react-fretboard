import React from 'react'

import Boxes from '../index'


const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('Boxes component, snapshot', () => {
  const wrapper = shallow(<Boxes {...props} />)
  expect(wrapper).toMatchSnapshot()
})
