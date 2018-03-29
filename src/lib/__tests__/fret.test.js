import {
  selectedNote,
  selectedLoc,
} from '../fret'


describe('lib/fret', () => {
  describe('selectedNote', () => {
    it('should return selected note', () => {
      const note = 'A2'
      const noteE2 = {
        note: 'E2',
        status: 'selected',
        label: 'E2',
      }

      const noteA2 = {
        note: 'A2',
        status: 'selected',
        label: 'A2',
      }

      const selectedNotes = [
        noteE2,
        noteA2,
      ]
      expect(selectedNote(note, selectedNotes)).toEqual(noteA2)
    })

    it('should return undefined', () => {
      const note = 'A2'
      const noteE2 = {
        note: 'E2',
        status: 'selected',
        label: 'E2',
      }


      const selectedNotes = [
        noteE2,
      ]
      expect(selectedNote(note, selectedNotes)).toBeUndefined()
    })
  })

  describe('selectedLoc', () => {
    it('should return selected loc', () => {
      const loc = { str: 4, pos: 0 }
      const locE2 = {
        loc: { str: 5, pos: 0 },
        status: 'selected',
        label: 'E2',
      }

      const locA2 = {
        loc: { str: 4, pos: 0 },
        status: 'selected',
        label: 'A2',
      }

      const selectedLocs = [
        locE2,
        locA2,
      ]
      expect(selectedLoc(loc, selectedLocs)).toEqual(locA2)
    })

    it('should return undefined', () => {
      const loc = { str: 4, pos: 0 }
      const locE2 = {
        loc: { str: 5, pos: 0 },
        status: 'selected',
        label: 'E2',
      }


      const selectedLocs = [
        locE2,
      ]

      expect(selectedLoc(loc, selectedLocs)).toBeUndefined()
    })
  })
})
