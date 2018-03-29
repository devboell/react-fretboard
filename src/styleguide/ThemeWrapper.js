import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'themes/fretboard-theme'

/* eslint-disable react/prefer-stateless-function, react/prop-types */
export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
