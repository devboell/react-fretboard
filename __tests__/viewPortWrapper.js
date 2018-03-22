import React from 'react'
import 'jest-styled-components'

import ViewPortWrapper from '../ViewPortWrapper'

const props = {
  height: 40,
}

it('should return ViewPortWrapper with correct height', () => {
  const wrapper = shallow(<ViewPortWrapper {...props} />)
  expect(wrapper).toMatchSnapshot()
})
