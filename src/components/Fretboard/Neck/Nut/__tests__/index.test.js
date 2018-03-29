import React from 'react'

import Nut from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  skinType: 'boxes',
  width: 5,
  offset: 10,
}

it('Nut component, snapshot', () => {
  const wrapper = shallow(<Nut {...props} />)

  expect(wrapper).toMatchSnapshot()
})

