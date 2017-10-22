/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React from 'react'
import PropTypes from 'prop-types'

import Fret from 'components/Fret'
import Wrapper from './Wrapper'

const Cuerda = ({ frets, ...otherProps }) =>
  <Wrapper>
    {frets.map((fret, j) =>
      <Fret
        key={`fret-${j}`}
        {...{ fret }}
        {...otherProps}
      />)
    }
  </Wrapper>

Cuerda.propTypes = {
  frets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  settings: PropTypes.shape({}).isRequired,
  isClickable: PropTypes.bool.isRequired,
  onFretClick: PropTypes.func.isRequired,
}

export default Cuerda
