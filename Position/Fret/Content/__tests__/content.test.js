import React from 'react'

import Content from '../Content'

const defaultProps = {
  content: 'E2',
  showEnharmonics: false,
}

it('Content component, snapshot', () => {
  const wrapper = shallow(<Content {...defaultProps} />)
  expect(wrapper).toMatchSnapshot()
})

it('Content component, showEnharmonics: true', () => {
  const props = {
    ...defaultProps,
    content: 'F#2',
    showEnharmonics: true,
  }
  const wrapper = shallow(<Content {...props} />)
  expect(wrapper).toMatchSnapshot()
})

it('Content component, content not note', () => {
  const props = {
    ...defaultProps,
    content: 'foo',
  }
  const wrapper = shallow(<Content {...props} />)
  expect(wrapper).toMatchSnapshot()
})
