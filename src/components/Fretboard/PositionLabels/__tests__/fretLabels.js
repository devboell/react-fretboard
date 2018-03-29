import React from 'react'
import 'jest-styled-components'

import FretLabels from '../FretLabels'

const defaultProps = {
  width: 10,
}

it('should return FretLabels snapshot', () => {
  const wrapper = shallow(<FretLabels {...defaultProps} />)

  expect(wrapper).toMatchSnapshot()
})
