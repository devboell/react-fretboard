import React from 'react'

import StringsFret from '../index'

describe('StringsFret component', () => {
  it('makes snapshot', () => {
    const wrapper = shallow(<StringsFret note="E2" showNotes />)
    expect(wrapper).toMatchSnapshot()
  })

  it('makes snapshot, showNotes={false}', () => {
    const wrapper = shallow(<StringsFret note="E2" showNotes={false} />)
    expect(wrapper).toMatchSnapshot()
  })
})
