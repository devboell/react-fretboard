import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: ${props => props.width}%;
`

/** @component */
export default Wrapper
