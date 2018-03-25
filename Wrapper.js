import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: ${props => props.height}px;
  background-color: ${props => props.theme.background};
`

/** @component */
export default Wrapper
