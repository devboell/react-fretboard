import React from 'react'

import Nut from '../index'

const props = {
  width: 5,
  offset: 10,
}

it('Nut component, snapshot', () => {
  const wrapper = shallow(<Nut {...props} />)

  expect(wrapper).toMatchSnapshot()
})

