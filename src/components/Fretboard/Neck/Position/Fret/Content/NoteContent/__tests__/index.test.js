import React from 'react'

import NoteContent from '../index'

const defaultProps = {
  note: 'E2',
  noteType: 'pitch',
  showEnharmonics: false,
}

describe('NoteContent component', () => {
  it('E2, pitch, no enh ', () => {
    const wrapper = shallow(<NoteContent {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('E2, pitch, enh, ', () => {
    const props = { ...defaultProps, showEnharmonics: true }
    const wrapper = shallow(<NoteContent {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('F#2, pitch, no enh , ', () => {
    const props = { ...defaultProps, note: 'F#2' }
    const wrapper = shallow(<NoteContent {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('F#2, pc, enh, ', () => {
    const props = {
      note: 'F#2',
      noteType: 'pc',
      showEnharmonics: true,
    }
    const wrapper = shallow(<NoteContent {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

