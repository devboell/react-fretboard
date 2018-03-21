import React from 'react'

import BoardGraphicStrings from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('BoardGraphicStrings component, snapshot', () => {
  const wrapper = shallow(<BoardGraphicStrings {...props} />)
  expect(wrapper).toMatchSnapshot()
})
