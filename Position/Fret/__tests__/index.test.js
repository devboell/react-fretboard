import React from 'react'

import Fret from '../index'


describe('Fret component', () => {
  const clickAction = jest.fn()

  const props = {
    note: 'E2',
    loc: { str: 5, pos: 0 },
  }
  const defaultContext = {
    skinType: 'boxes',
    showNotes: true,
    showOctaves: true,
    showSelection: true,
    selectedNotes: ['C4'],
    clickAction,
  }

  it('defaultContext, snapshot', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    expect(wrapper).toMatchSnapshot()
  })

  it('skinType=strings, showNotes-false, snapshot', () => {
    const context = { ...defaultContext, skinType: 'strings', showNotes: false }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })

  it('showSelection=false, note is selected, snapshot', () => {
    const context = {
      ...defaultContext,
      showSelection: false,
      selectedNotes: ['E2'],
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })

  it('note is selected, showOctaves=false, snapshot', () => {
    const context = {
      ...defaultContext,
      showOctaves: false,
      selectedNotes: ['E2'],
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    expect(wrapper).toMatchSnapshot()
  })

  it('clickAction gets called with correct args', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    wrapper.simulate('click')
    expect(clickAction).toBeCalledWith('E2', { str: 5, pos: 0 })
  })
})
