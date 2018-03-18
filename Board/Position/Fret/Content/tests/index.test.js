import React from 'react'

import Content from '../index'

it('Content component, snapshot', () => {
  const wrapper = shallow(<Content note="E2" />)
  expect(wrapper).toMatchSnapshot()
})
