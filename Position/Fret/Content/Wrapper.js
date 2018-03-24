import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  vertical-align: middle;
  font-size: ${props => props.theme.fontSize}px;
  overflow-x: hidden;
  text-overflow: clip;
`

export default Wrapper
