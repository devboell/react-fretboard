/* eslint-disable import/extensions */
import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'lodash/fp'

// import Nut from 'components/Nut'
import Wrapper from './Wrapper'
import Position from './Position'

const positions = ['open', '', '', 'III', '', 'V', '', 'VII', '', '', 'X', '',
  'XII', '', '', 'XV', '', 'XVII', '', 'IXX']

//     <Position pos={0}>{positions[0]}</Position>

// <Nut visible={false} />

const Positions = ({ width }) =>
  <Wrapper>
    {range(0, width).map(pos =>
      <Position key={`pos-${pos}`}>
        {positions[pos]}
      </Position>)
    }
  </Wrapper>

Positions.propTypes = {
  width: PropTypes.number.isRequired,
}

export default Positions
