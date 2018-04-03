import styled from 'styled-components'

const AccWrapper = styled.span`
  text-align: center;
  vertical-align: top;
  font-size: ${props => (props.theme.fontSize - 5)}px;
  overflow: hidden;
`

export default AccWrapper
