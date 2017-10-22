import styled from 'styled-components'


export const backgroundColor = ({
  status, showOctaves, oct, theme,
}) => (
  status === 'unselected' && showOctaves
    ? theme.octaveMap[oct]
    : theme.statusMap[status]
)

export default styled.div`
  background-color: ${props => backgroundColor(props)};
  border-radius: 3px;
  border: 1px solid gray;
  width: 75%;
  margin: 1px 2%;
  padding: 6px 10% 5px 10%;
`
