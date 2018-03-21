import React from 'react'

import BoardGraphicStrings from '../index'

const props = {
  nrOfStrings: 6,
  nrOfFrets: 12,
}

it('BoardGraphicStrings component, snapshot', () => {
  const wrapper = shallow(<BoardGraphicStrings {...props} />)
  expect(wrapper).toMatchSnapshot()
})
