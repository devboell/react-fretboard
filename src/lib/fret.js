import { equals, compose } from 'ramda'
import { Note } from 'tonal'

import { isEqual } from 'lib/tonal-helpers'

export const selectedNote = (note, selectedNotes) =>
  selectedNotes.reduce((acc, curr) => (
    isEqual(note)(curr.note)
      ? curr
      : acc
  ), undefined)

export const selectedLoc = (loc, selectedLocations) =>
  selectedLocations.reduce((acc, curr) => (
    equals(loc)(curr.loc)
      ? curr
      : acc
  ), undefined)

export const decideSelectionContent = (showSelectionLabels, selection) =>
  content =>
    (showSelectionLabels && selection ? selection.label : content)

export const decideShowNotesContent = (showNotes, note) => content =>
  (showNotes ? note : content)

export const decideContent = (
  showSelectionLabels,
  selection,
  showNotes,
  note,
) => compose(
  decideSelectionContent(showSelectionLabels, selection),
  decideShowNotesContent(showNotes, note),
)(undefined)

export const decideSelectionColor =
  (selection, highlightSelections, theme) => content =>
    (selection && highlightSelections
      ? theme.statusMap[selection.status]
      : content)

export const decideOctaveColor = (highlightOctaves, note, theme) => content =>
  (highlightOctaves ? theme.octaveMap[Note.oct(note)] : content)

export const decideColor = (
  selection,
  theme,
  highlightOctaves,
  highlightSelections,
  note,
) => compose(
  decideSelectionColor(selection, highlightSelections, theme),
  decideOctaveColor(highlightOctaves, note, theme),
)(undefined)

