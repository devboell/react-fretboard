import React from 'react'

import Fret from '../index'


describe('Fret component', () => {
  const props = {
    note: 'E2',
  }
  const defaultContext = {
    type: 'boxes',
    showNotes: true,
    isHighlighted: false,
  }

  it('Fret component boxes type, snapshot', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    expect(wrapper).toMatchSnapshot()
  })

  it('Fret component strings type, snapshot', () => {
    const context = { ...defaultContext, type: 'strings', showNotes: false }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })
})
