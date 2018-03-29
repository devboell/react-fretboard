import React from 'react'

import NutGraphicBoxes from '../index'


it('NutGraphicBoxes component, snapshot', () => {
  const wrapper = shallow(<NutGraphicBoxes />)
  expect(wrapper).toMatchSnapshot()
})
