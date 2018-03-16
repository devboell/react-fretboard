import React from 'react'

import BoxesFret from '../index'


describe('BoxesFret component', () => {
  it('makes snapshot', () => {
    const wrapper = shallow(<BoxesFret note="E2" showNotes />)
    expect(wrapper).toMatchSnapshot()
  })

  it('makes snapshot, showNotes={false}', () => {
    const wrapper = shallow(<BoxesFret note="E2" showNotes={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})

