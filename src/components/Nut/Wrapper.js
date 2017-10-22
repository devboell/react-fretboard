import styled from 'styled-components'

export default styled.div`
  background-color: ${props => (props.visible ? 'gray' : 'transparent')};
  border: 1px solid ${props => (props.visible ? 'gray' : 'transparent')};
  border-radius: 3px;`
