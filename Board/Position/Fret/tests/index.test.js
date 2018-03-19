import React from 'react'

import Fret from '../index'


describe('Fret component', () => {
  const props = {
    note: 'E2',
  }
  const defaultContext = {
    selectedNotes: ['C4'],
    type: 'boxes',
    showNotes: true,
    showSelection: true,
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

  it('Fret component strings type, snapshot', () => {
    const context = {
      ...defaultContext,
      type: 'strings',
      showNotes: false,
      showSelection: false,
      selectedNotes: ['E2'],
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })

  it('Fret component strings type, snapshot', () => {
    const context = {
      ...defaultContext,
      type: 'strings',
      showNotes: false,
      showSelection: true,
      selectedNotes: ['E2'],
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })
})
