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
    noteType: 'pitch',
    showNotes: false,
    showSelectionLabels: false,
    highlightOctaves: false,
    highlightSelections: false,
    showEnharmonics: false,
    selectedNotes: [],
    selectedLocations: [],
    clickAction: undefined,
  }

  it('defaultContext, no selections', () => {
    const wrapper = shallow(<Fret {...props} />, { context: defaultContext })
    expect(wrapper).toMatchSnapshot()
  })

  describe('-- selectedNotes & labels --', () => {
    it('showSelectionLabels=false, showNotes=false, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = { ...defaultContext, selectedNotes }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelectionLabels=true, showNotes=false, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = {
        ...defaultContext,
        selectedNotes,
        showSelectionLabels: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelectionLabels=true, showNotes=true, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = {
        ...defaultContext,
        selectedNotes,
        showSelectionLabels: true,
        showNotes: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelectionLabels=false, showNotes=true, no note selected', () => {
      const context = {
        ...defaultContext,
        showSelectionLabels: false,
        showNotes: true,
      }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelectionLabels=true, showNotes=true, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'selected', label: 'root' }]
      const context = {
        ...defaultContext,
        selectedNotes,
        showSelectionLabels: false,
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

    it('highlightOctaves=true, highlightSelections=true, note selected', () => {
      const selectedNotes = [{ note: 'E2', status: 'foo', label: 'root' }]
      const context = {
        ...defaultContext,
        highlightOctaves: true,
        highlightSelections: true,
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
    it('showSelectionLabels=false, loc selected', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = { ...defaultContext, selectedLocations }
      const wrapper = shallow(<Fret {...props} />, { context })
      expect(wrapper).toMatchSnapshot()
    })

    it('showSelectionLabels=true, loc selected', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocations = [{ loc, status: 'foo', label: 'root' }]
      const context = {
        ...defaultContext,
        showSelectionLabels: true,
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

  it('clickAction is called with correct arg', () => {
    const context = {
      ...defaultContext,
      clickAction,
    }
    const wrapper = shallow(<Fret {...props} />, { context })
    const expected = {
      note: 'E2',
      loc: { str: 5, pos: 0 },
    }
    wrapper.simulate('click')
    expect(clickAction).toBeCalledWith(expected)
  })
})
