import { times, sum } from 'ramda'
import {
  fretWidth,
  fretOffset,
  stringCenter,
  ensureNoteObjects,
  ensureLocObjects,
} from '../fretboard'

describe('lib/fretboard', () => {
  describe('layout', () => {
    it('should check that all fret width percentages add up to 100', () => {
      const nrOfFrets = 12
      const totalWidth = 100

      const received = sum(times(fretWidth(nrOfFrets), nrOfFrets))
      expect(Math.round(received)).toBe(totalWidth)
    })

    it('should return correct fret offset', () => {
      const nrOfFrets = 12
      const position = 5
      const expected = 50

      const received = fretOffset(nrOfFrets)(position)
      expect(Math.round(received)).toBe(expected)
    })

    it('should return correct string center', () => {
      const nrOfStrings = 6
      const str = 5
      const expected = 92

      const received = stringCenter(nrOfStrings)(str)
      expect(Math.round(received)).toBe(expected)
    })
  })

  describe('selection conversions', () => {
    it('should return default noteObj for note string', () => {
      const selectedNotes = ['E2']
      const expected = [{ note: 'E2', status: 'selected', label: 'E2' }]
      const received = ensureNoteObjects(selectedNotes)

      expect(received).toEqual(expected)
    })

    it('should return same noteObj for complete noteObj', () => {
      const selectedNotes = [{ note: 'E2', status: 'foo', label: 'bar' }]
      const expected = [{ note: 'E2', status: 'foo', label: 'bar' }]
      const received = ensureNoteObjects(selectedNotes)

      expect(received).toEqual(expected)
    })

    it('should add missing status to noteObj', () => {
      const selectedNotes = [{ note: 'E2', label: 'bar' }]
      const expected = [{ note: 'E2', status: 'selected', label: 'bar' }]
      const received = ensureNoteObjects(selectedNotes)

      expect(received).toEqual(expected)
    })

    it('should add missing label to noteObj', () => {
      const selectedNotes = [{ note: 'E2', status: 'foo' }]
      const expected = [{ note: 'E2', status: 'foo', label: 'E2' }]
      const received = ensureNoteObjects(selectedNotes)

      expect(received).toEqual(expected)
    })

    it('should return default locObj for loc shape', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocs = [loc]
      const expected = [{ loc, status: 'selected', label: '' }]
      const received = ensureLocObjects(selectedLocs)

      expect(received).toEqual(expected)
    })

    it('should return same locObj for complete locObj', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocs = [{ loc, status: 'foo', label: 'bar' }]
      const expected = [{ loc, status: 'foo', label: 'bar' }]
      const received = ensureLocObjects(selectedLocs)

      expect(received).toEqual(expected)
    })

    it('should add missing status to locObj', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocs = [{ loc, label: 'bar' }]
      const expected = [{ loc, status: 'selected', label: 'bar' }]
      const received = ensureLocObjects(selectedLocs)

      expect(received).toEqual(expected)
    })

    it('should add missing label to locObj', () => {
      const loc = { str: 5, pos: 0 }
      const selectedLocs = [{ loc, status: 'foo' }]
      const expected = [{ loc, status: 'foo', label: '' }]
      const received = ensureLocObjects(selectedLocs)

      expect(received).toEqual(expected)
    })
  })
})

