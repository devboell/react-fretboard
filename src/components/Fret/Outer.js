import styled from 'styled-components'


export default styled.td`
  cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
  margin: 0;
  padding: 0;
`
