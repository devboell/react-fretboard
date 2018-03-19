import React from 'react'

import Fretboard from '../index'

const props = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('Fretboard component, snapshot', () => {
  const wrapper = shallow(<Fretboard {...props} />)

  expect(wrapper).toMatchSnapshot()
})

it('Fretboard component with type strings, snapshot', () => {
  const wrapper = shallow(<Fretboard {...props} type="strings" />)

  expect(wrapper).toMatchSnapshot()
})

it('should return correct childContext', () => {
  const wrapper = shallow(<Fretboard {...props} type="strings" />)

  expect(wrapper.instance().getChildContext().type).toEqual('strings')
})
