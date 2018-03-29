import React from 'react'

import OpenPosition from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  width: 10,
}

it('OpenPosition component, snapshot', () => {
  const wrapper = shallow(<OpenPosition {...props} />)

  expect(wrapper).toMatchSnapshot()
})

