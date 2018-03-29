import React from 'react'

import PositionLabels from '../index'

const defaultProps = {
  nutWidth: 1,
  openWidth: 10,
  nrOfFrets: 12,
}

it('should return PositionLabels snapshot', () => {
  const wrapper = shallow(<PositionLabels {...defaultProps} />)

  expect(wrapper).toMatchSnapshot()
})
