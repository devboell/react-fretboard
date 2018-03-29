import React from 'react'

import NutGraphicStrings from '../index'

const props = {
  nrOfStrings: 6,
}

it('NutGraphicStrings component, snapshot', () => {
  const wrapper = shallow(<NutGraphicStrings {...props} />)
  expect(wrapper).toMatchSnapshot()
})
