import React from 'react'

import BoxesFret from '../index'


describe('BoxesFret component', () => {
  const defaultProps = {
    note: 'E2',
    showNotes: true,
    isHighlighted: false,
  }

  it('makes snapshot', () => {
    const props = defaultProps
    const wrapper = shallow(<BoxesFret {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('makes snapshot, showNotes={false}', () => {
    const props = { ...defaultProps, showNotes: false }

    const wrapper = shallow(<BoxesFret {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

