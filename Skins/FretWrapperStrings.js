import { css } from 'styled-components'
import FretWrapper from './FretWrapper'

const highlightCSS = ({ theme, color }) => {
  const radiusPerc = 80
  const radius = Math.floor((theme.dimensions.stringHeight / 100) * radiusPerc)

  return css`
    width: ${radius}px;
    height: ${radius}px;
    border-radius: 50%;
    background-color: ${color};
  `
}

const defaultCSS = ({ theme }) =>
  css`
    padding: 0 5%;
    background-color: ${theme.background};
  `

const FretWrapperStrings = FretWrapper.extend`
  ${props => (props.isHighlighted
    ? highlightCSS(props)
    : defaultCSS(props))} 
  `

export default FretWrapperStrings
