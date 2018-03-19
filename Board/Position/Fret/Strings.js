import { css } from 'styled-components'
import SkinWrapper from './SkinWrapper'

const highlightCSS = ({ theme, status }) => {
  const radiusPerc = 80
  const radius = Math.floor((theme.stringHeight / 100) * radiusPerc)

  return css`
    width: ${radius}px;
    height: ${radius}px;
    border-radius: 50%;
    background-color: ${theme.highlight[status]};
  `
}

const defaultCSS = ({ theme }) =>
  css`
    padding: 0 5%;
    background-color: ${theme.background};
  `

const Strings = SkinWrapper.extend`
  ${props => (props.isHighlighted
    ? highlightCSS(props)
    : defaultCSS(props))} 
  `

export default Strings
