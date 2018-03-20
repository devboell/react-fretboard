import React from 'react'
import pt from 'prop-types'

const ViewPort = ({
  width,
  offset,
  children,
}) =>
  <svg
    width={`${width}%`}
    height="100%"
    x={`${offset}%`}
    y="0"
  >
    {children}
  </svg>

ViewPort.propTypes = {
  width: pt.number.isRequired,
  offset: pt.number.isRequired,
  children: pt.node,
}

ViewPort.defaultProps = {
  children: <g />,
}

export default ViewPort
