import pt from 'prop-types'

export const locShape = pt.shape({
  str: pt.number.isRequired,
  pos: pt.number.isRequired,
})

export const noteSelectionShape = pt.shape({
  note: pt.string.isRequired,
  status: pt.string,
  label: pt.string,
})

export const locSelectionShape = pt.shape({
  loc: locShape.isRequired,
  status: pt.string,
  label: pt.string,
})

