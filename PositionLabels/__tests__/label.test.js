import React from 'react'
import 'jest-styled-components'

import Label from '../Label'

const defaultProps = {
  width: 10,
}

it('should return Label snapshot', () => {
  const wrapper = shallow(<Label {...defaultProps} />)

  expect(wrapper).toMatchSnapshot()
})
