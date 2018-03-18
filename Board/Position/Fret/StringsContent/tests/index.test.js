import React from 'react'

import StringsContent from '../index'


const props = {
  note: 'E2',
  isHighlighted: true,
}

it('StringsContent component, snapshot', () => {
  const wrapper = shallow(<StringsContent {...props} />)
  expect(wrapper).toMatchSnapshot()
})
