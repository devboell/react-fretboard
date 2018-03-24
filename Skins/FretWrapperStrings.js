import { css } from 'styled-components'
import FretWrapper from './FretWrapper'

const highlightCSS = ({ theme, color }) => {
  const radiusPerc = theme.skins.strings.highlightSize
  const radius = Math.floor((theme.dimensions.stringHeight / 100) * radiusPerc)

  return css`
    width: ${radius}px;
    height: ${radius}px;
    border-radius: 50%;
    background-color: ${color};
    border: ${props => props.theme.skins.strings.highlightBorder}
  `
}

const defaultCSS = ({ theme }) =>
  css`
    padding: 0 5%;
    max-width: 60%;
    background-color: ${theme.background};
  `

const FretWrapperStrings = FretWrapper.extend`
  ${props => (props.isHighlighted
    ? highlightCSS(props)
    : defaultCSS(props))} 
  `

export default FretWrapperStrings
