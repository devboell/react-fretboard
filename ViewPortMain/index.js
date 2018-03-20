import React from 'react'
import pt from 'prop-types'

const ViewPortMain = ({
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

ViewPortMain.propTypes = {
  children: pt.node.isRequired,
}

export default ViewPortMain
