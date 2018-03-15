import React from 'react'

import Fret from '../index'

const props = {
  note: 'E2',
}

it('Fret component boxes type, snapshot', () => {
  const context = { context: { type: 'boxes' } }
  const wrapper = shallow(<Fret {...props} />, context)
  expect(wrapper).toMatchSnapshot()
})

it('Fret component strings type, snapshot', () => {
  const context = { context: { type: 'strings' } }
  const wrapper = shallow(<Fret {...props} />, context)
  expect(wrapper).toMatchSnapshot()
})
