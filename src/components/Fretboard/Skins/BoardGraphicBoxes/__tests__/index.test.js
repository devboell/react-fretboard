import React from 'react'

import BoardGraphicBoxes from '../index'


it('BoardGraphicBoxes component, snapshot', () => {
  const wrapper = shallow(<BoardGraphicBoxes />)
  expect(wrapper).toMatchSnapshot()
})
