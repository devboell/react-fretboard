import React from 'react'
import pt from 'prop-types'

const ViewPort = ({
  height,
  children,
}) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100%"
    height={height}
    stroke="black"
    strokeWidth="1"
    fill="white"
    shapeRendering="geometricPrecision"
    style={{ overflow: 'visible' }}
  >
    {children}
  </svg>

ViewPort.propTypes = {
  height: pt.number.isRequired,
  children: pt.node.isRequired,
}

export default ViewPort
