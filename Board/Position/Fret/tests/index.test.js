import React from 'react'

import Fret from '../index'

const props = {
  note: 'E2',
}

it('Fret component, snapshot', () => {
  const wrapper = shallow(<Fret {...props} />)
  expect(wrapper).toMatchSnapshot()
})
