import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  background-color: ${props => props.theme.background};
`

export default Wrapper
