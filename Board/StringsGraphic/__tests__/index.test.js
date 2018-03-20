import React from 'react'

import Strings from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('Strings component, snapshot', () => {
  const wrapper = shallow(<Strings {...props} />)
  expect(wrapper).toMatchSnapshot()
})
