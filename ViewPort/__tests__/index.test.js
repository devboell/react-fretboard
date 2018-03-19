import React from 'react'

import ViewPort from '../index'


it('ViewPort component, snapshot', () => {
  const wrapper = shallow(<ViewPort height={200}><g /></ViewPort>)
  expect(wrapper).toMatchSnapshot()
})
