import React from 'react'

import Fretboard from '../index'

const defaultProps = {
  tuning: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'],
  nrOfFrets: 12,
}

it('Fretboard component, snapshot', () => {
  const wrapper = shallow(<Fretboard {...defaultProps} />)

  expect(wrapper).toMatchSnapshot()
})

it('Fretboard component with skinType strings, snapshot', () => {
  const props = { ...defaultProps, skinType: 'strings' }
  const wrapper = shallow(<Fretboard {...props} />)

  expect(wrapper).toMatchSnapshot()
})

it('should return correct childContext', () => {
  const props = { ...defaultProps, skinType: 'strings' }
  const wrapper = shallow(<Fretboard {...props} />)

  expect(wrapper.instance().getChildContext().skinType).toEqual('strings')
})

it('should return component w/out positionLabels', () => {
  const props = { ...defaultProps, showPositionLabels: false }
  const wrapper = shallow(<Fretboard {...props} />)

  expect(wrapper).toMatchSnapshot()
})

it('should check the clickAction', () => {
  const wrapper = shallow(<Fretboard {...defaultProps} />)
  const { clickAction } = wrapper.instance().getChildContext()
  const note = 'E2'
  const loc = { str: 5, pos: 0 }
  const expected = { note, loc }
  expect(clickAction(note, loc)).toEqual(expected)
})
