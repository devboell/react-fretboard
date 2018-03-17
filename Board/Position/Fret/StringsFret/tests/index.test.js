import React from 'react'

import StringsFret from '../index'

describe('StringsFret component', () => {
  const defaultProps = {
    note: 'E2',
    showNotes: true,
    isHighlighted: false,
  }

  it('makes snapshot', () => {
    const props = defaultProps
    const wrapper = shallow(<StringsFret {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('makes snapshot, showNotes={false}', () => {
    const props = { ...defaultProps, showNotes: false }

    const wrapper = shallow(<StringsFret {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
