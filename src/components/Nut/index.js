/* eslint-disable import/extensions */
import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'

const Nut = ({ visible }) =>
  <Wrapper {...{ visible }} >{'\u00A0'}</Wrapper>

Nut.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default Nut
