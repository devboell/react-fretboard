import React from 'react'
import { node } from 'prop-types'

const ViewPort = ({
  children,
}) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100%"
    height="100%"
    stroke="black"
    strokeWidth="1"
    fill="white"
    shapeRendering="geometricPrecision"
    style={{ overflow: 'visible' }}
  >
    {children}
  </svg>

ViewPort.propTypes = {
  children: node.isRequired,
}

export default ViewPort
