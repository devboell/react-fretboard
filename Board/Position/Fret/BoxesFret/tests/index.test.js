import React from 'react'

import BoxesFret from '../index'


it('BoxesFret component, snapshot', () => {
  const wrapper = shallow(<BoxesFret note="E2" />)
  expect(wrapper).toMatchSnapshot()
})
