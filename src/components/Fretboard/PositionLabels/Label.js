import styled from 'styled-components'

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.dimensions.stringHeight}px;
  width: ${props => props.width}%;
  font-size: ${props => props.theme.fontSize}px;
`

/** @component */
export default Label
