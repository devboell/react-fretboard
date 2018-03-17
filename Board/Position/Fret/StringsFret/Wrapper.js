import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${props => props.isHighlighted && css`
    height:100%;
    width: auto;
    -moz-border-radius: 50%; 
    -webkit-border-radius: 50%; 
    border-radius: 50%;
    background: #4679BD; 
  `}
`
//     padding-bottom: 50%;

//     background-color: ${props.theme.highlight};


export default Wrapper
