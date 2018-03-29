import React from 'react'
import pt from 'prop-types'

import Wrapper from './Wrapper'

const ViewPortMain = ({
  height,
  children,
}) =>
  <Wrapper height={height}>
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
  </Wrapper>

ViewPortMain.propTypes = {
  height: pt.number.isRequired,
  children: pt.node.isRequired,
}

export default ViewPortMain
