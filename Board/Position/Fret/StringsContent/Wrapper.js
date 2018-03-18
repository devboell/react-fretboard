import styled from 'styled-components'

const background = ({ theme, isHighlighted }) => (
  isHighlighted
    ? theme.highlight
    : theme.background
)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  background-color: ${props => background(props)};
`

export default Wrapper
