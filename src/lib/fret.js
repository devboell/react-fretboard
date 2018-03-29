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

export const decideSelectionContent = (showSelection, selection) => content =>
  (showSelection && selection ? selection.label : content)

export const decideShowNotesContent = (showNotes, note) => content =>
  (showNotes ? note : content)

export const decideContent = (
  showSelection,
  selection,
  showNotes,
  note,
) => compose(
  decideSelectionContent(showSelection, selection),
  decideShowNotesContent(showNotes, note),
)(undefined)

export const decideSelectionColor = (selection, theme) => content =>
  (selection ? theme.statusMap[selection.status] : content)

export const decideOctaveColor = (showOctaves, note, theme) => content =>
  (showOctaves ? theme.octaveMap[Note.oct(note)] : content)

export const decideColor = (
  selection,
  theme,
  showOctaves,
  note,
) => compose(
  decideSelectionColor(selection, theme),
  decideOctaveColor(showOctaves, note, theme),
)(undefined)

