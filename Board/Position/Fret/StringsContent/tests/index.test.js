import React from 'react'

import StringsContent from '../index'

it('StringsContent component, snapshot', () => {
  const wrapper = shallow(<StringsContent note="E2" />)
  expect(wrapper).toMatchSnapshot()
})
