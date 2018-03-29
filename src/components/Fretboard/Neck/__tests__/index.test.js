import React from 'react'

import Neck from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
  dimensions: {
    openWidth: 10,
    nutWidth: 1,
    stringHeight: 30,
  },
  skinType: 'boxes',
}

it('ViewPort component, snapshot', () => {
  const wrapper = shallow(<Neck {...props} />)
  expect(wrapper).toMatchSnapshot()
})
