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
    key: 'case1',
    description: isSelected
      ? 'no content, selection highlight'
      : 'no content, no highlight',
    context: {
      showNotes: false,
      highlightOctaves: false,
      showSelection: false,
      showEnharmonics: false,
    },
  },
  {
    key: 'case2',
    description: isSelected
      ? 'note content, selection highlight'
      : 'note content, no highlight',
    context: {
      showNotes: true,
      highlightOctaves: false,
      showSelection: false,
      showEnharmonics: false,
    },
  },
  {
    key: 'case3',
    description: isSelected
      ? 'note content, selection highlight'
      : 'note content, octave highlight',
    context: {
      showNotes: true,
      highlightOctaves: true,
      showSelection: false,
      showEnharmonics: false,
    },
  },
  {
    key: 'case4',
    description: isSelected
      ? 'selection content, selection highlight'
      : 'note content, octave highlight',
    context: {
      showNotes: true,
      highlightOctaves: true,
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
    key: 'suite1',
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
    key: 'suite2',
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
    key: 'suite3',
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
    key: 'suite4',
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

