import React from 'react'

import StringsFret from '../index'

it('StringsFret component, snapshot', () => {
  const wrapper = shallow(<StringsFret note="E2" />)
  expect(wrapper).toMatchSnapshot()
})
