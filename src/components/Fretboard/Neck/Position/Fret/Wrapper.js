import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${props => props.isClickable && 'cursor: pointer;'}
`

/** @component */
export default Wrapper
