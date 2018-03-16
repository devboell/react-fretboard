import React from 'react'

import BoxesContent from '../index'

it('BoxesContent component, snapshot', () => {
  const wrapper = shallow(<BoxesContent note="E2" />)
  expect(wrapper).toMatchSnapshot()
})
