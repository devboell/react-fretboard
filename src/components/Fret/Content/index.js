/* eslint-disable import/extensions */
import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'lodash/fp'
import { enharmonics, hasAcc } from 'lib/enharmonics'

import Wrapper from './Wrapper'


const formatSharp = sh => sh.replace('#', '\u266F')
const formatFlat = fl => fl.replace('b', '\u266D')

const formatEnharmonics = ([sh, fl]) =>
  `${formatSharp(sh)}/${formatFlat(fl)}`

const displayName = pc => (
  !hasAcc(pc)
    ? pc
    : compose(
      formatEnharmonics,
      enharmonics,
    )(pc)
)

const content = (pc, showNotes, selectionText, isSelected) => {
  if (isSelected && selectionText !== '') return selectionText
  if (showNotes) return displayName(pc)
  return '\u00A0'
}

const Content = ({
  pc,
  showNotes,
  selectionText,
  isSelected,
}) =>
  <Wrapper>
    {content(pc, showNotes, selectionText, isSelected)}
  </Wrapper>

Content.propTypes = {
  pc: PropTypes.string.isRequired,
  showNotes: PropTypes.bool.isRequired,
  selectionText: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default Content
