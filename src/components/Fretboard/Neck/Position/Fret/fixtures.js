import { merge } from 'ramda'

const noteE2 = 'E2'
const noteA2 = 'A2'
const noteC4 = 'C4'
const locE2 = { str: 5, pos: 0 }
const locA2 = { str: 4, pos: 0 }
const selectedE2 = { note: noteE2, status: 'selected', label: 'root' }
const selectedC4 = { note: noteC4, status: 'selected', label: 'root' }
const selectedNotes = [selectedE2, selectedC4]
const selectedLocations = []

const testCases = isSelected => [
  {
    description: isSelected
      ? 'no content, selection highlight'
      : 'no content, no highlight',
    context: {
      showNotes: false,
      showOctaves: false,
      showSelection: false,
      showEnharmonics: false,
    },
  },
  {
    description: isSelected
      ? 'note content, selection highlight'
      : 'note content, no highlight',
    context: {
      showNotes: true,
      showOctaves: false,
      showSelection: false,
      showEnharmonics: false,
    },
  },
  {
    description: isSelected
      ? 'note content, selection highlight'
      : 'note content, octave highlight',
    context: {
      showNotes: true,
      showOctaves: true,
      showSelection: false,
      showEnharmonics: false,
    },
  },
  {
    description: isSelected
      ? 'selection content, selection highlight'
      : 'note content, octave highlight',
    context: {
      showNotes: true,
      showOctaves: true,
      showSelection: true,
      showEnharmonics: false,
    },
  },
]

const defaultContext = {
  clickAction: () => {},
}

export default [
  {
    description: 'E2, selected note, skinType=boxes',
    props: { note: noteE2, loc: locE2 },
    context: merge(defaultContext, {
      skinType: 'boxes',
      selectedNotes,
      selectedLocations,
    }),
    testCases: testCases(true),
  },
  {
    description: 'E2, selected note, skinType=strings',
    props: { note: noteE2, loc: locE2 },
    context: merge(defaultContext, {
      skinType: 'strings',
      selectedNotes,
      selectedLocations,
    }),
    testCases: testCases(true),
  },
  {
    description: 'A2, selected note, skinType=boxes',
    props: { note: noteA2, loc: locA2 },
    context: merge(defaultContext, {
      skinType: 'boxes',
      selectedNotes,
      selectedLocations,
    }),
    testCases: testCases(false),
  },
  {
    description: 'A2, unselected note, skinType=strings',
    props: { note: noteA2, loc: locA2 },
    context: merge(defaultContext, {
      skinType: 'strings',
      selectedNotes,
      selectedLocations,
    }),
    testCases: testCases(false),
  },
]

