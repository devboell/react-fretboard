import React from 'react'
import theme from 'themes/fretboard-theme'
import { Fret } from '../index'


describe('Fret component', () => {
  const clickAction = jest.fn()

  const props = {
    note: 'E2',
    loc: { str: 5, pos: 0 },
    theme,
  }
  const defaultContext = {
    skinType: 'boxes',
    showNotes: false,
    highlightOctaves: false,
    showSelection: false,
    showEnharmonics: false,
    selectedNotes: [],
    selectedLocations: [],
    clickAction,
  }

  it('defaultContext, no selections', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    expect(wrapper).toMatchSnapshot()
  })

  describe('-- selectedNotes & labels --', () => {
    it('showSelection=false, showNotes=false, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = { ...defaultContext, selectedNotes }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelection=true, showNotes=false, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = {
        ...defaultContext,
        selectedNotes,
        showSelection: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelection=true, showNotes=true, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = {
        ...defaultContext,
        selectedNotes,
        showSelection: true,
        showNotes: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelection=false, showNotes=true, no note selected', () => {
      const context = {
        ...defaultContext,
        showSelection: false,
        showNotes: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelection=true, showNotes=true, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = {
        ...defaultContext,
        selectedNotes,
        showSelection: false,
        showNotes: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('-- selectedNotes & highlights --', () => {
    it('highlightOctaves=false, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'foo', label: 'root' }]
      const context = { ...defaultContext, selectedNotes }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('highlightOctaves=true, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'foo', label: 'root' }]
      const context = {
        ...defaultContext,
        highlightOctaves: true,
        selectedNotes,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('highlightOctaves=true, no note selected', () => {
      const context = {
        ...defaultContext,
        highlightOctaves: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('-- selectedLocations & labels --', () => {
    it('showSelection=false, loc selected', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = { ...defaultContext, selectedLocations }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelection=true, loc selected', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = {
        ...defaultContext,
        showSelection: true,
        selectedLocations,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('-- selectedLocations & highlights --', () => {
    it('highlightOctaves=false, loc selected', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = { ...defaultContext, selectedLocations }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('highlightOctaves=true, loc selected', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = {
        ...defaultContext,
        highlightOctaves: true,
        selectedLocations,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('-- other selection --', () => {
    it('should not show selection if selectedNote doesn\'t match', () => {
      const selectedNotes = [{ note: 'A2', status: 'selected', label: 'root' }]
      const context = { ...defaultContext, selectedNotes }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('should not show selection if selectedLocation doesn\'t match', () => {
      const loc = { str: 5, pos: 5 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = { ...defaultContext, selectedLocations }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('clickAction gets called with correct args', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    wrapper.simulate('click')
    expect(clickAction).toBeCalledWith('E2', { str: 5, pos: 0 })
  })
})
