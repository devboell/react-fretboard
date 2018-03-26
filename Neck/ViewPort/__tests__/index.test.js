import React from 'react'

import ViewPort from '../index'

const props = {
  width: 10,
  offset: 10,
}

it('ViewPort component, snapshot', () => {
  const wrapper = shallow(<ViewPort {...props} />)
  expect(wrapper).toMatchSnapshot()
})
