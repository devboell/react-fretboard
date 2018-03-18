import styled, { css } from 'styled-components'

const highlightCSS = ({ theme }) => {
  const radiusPerc = 80
  const radius = Math.floor((theme.stringHeight / 100) * radiusPerc)

  return css`
    width: ${radius}px;
    height: ${radius}px;
    border-radius: 50%;
    background-color: ${theme.highlight};
  `
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => (props.isHighlighted
    ? highlightCSS(props)
    : css`width: 100%;`)
} 
`

export default Wrapper
