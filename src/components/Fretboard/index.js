/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React from 'react'
import PropTypes from 'prop-types'
import { range, reverse, merge } from 'lodash/fp'
import { ThemeProvider } from 'styled-components'
import defaultTheme from 'themes'
import { fretMatrix as getFretMatrix } from 'lib/fretboard'

import Positions from 'components/Positions'
import Cuerda from 'components/Cuerda'

import Table from './Table'
import Col from './Col'

const defaultSettings = {
  showNotes: false,
  showOctaves: false,
  showPositions: true,
  // showNut: true,
}

const Fretboard = ({
  fretMatrix,
  settings,
  isClickable,
  onFretClick,
  theme,
}) => {
  const mergedTheme = merge(defaultTheme, theme)
  const mergedSettings = merge(defaultSettings, settings)
  const width = fretMatrix[0].length
  return (
    <ThemeProvider theme={mergedTheme}>
      <Table>
        <colgroup>
          {range(0, width).map(pos => <Col key={pos} pos={pos} width={width} />)}
        </colgroup>
        <tbody>
          {reverse(fretMatrix).map((crd, i) =>
            <Cuerda
              key={`crd-${i}`}
              frets={crd}
              settings={mergedSettings}
              {...{ isClickable, onFretClick }}
            />)
          }
        </tbody>
        <tfoot>
          {mergedSettings.showPositions
            ? <Positions width={width} />
            : null
          }
        </tfoot>
      </Table>
    </ThemeProvider>
  )
}
Fretboard.propTypes = {
  fretMatrix: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
  settings: PropTypes.shape({}),
  isClickable: PropTypes.bool,
  onFretClick: PropTypes.func,
  theme: PropTypes.shape({}),
}

const width = 13
const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

Fretboard.defaultProps = {
  fretMatrix: getFretMatrix(tuning, width),
  settings: defaultSettings,
  isClickable: false,
  onFretClick: () => null,
  theme: defaultTheme,
}

export default Fretboard
