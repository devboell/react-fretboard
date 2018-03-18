import { css } from 'styled-components'
import SkinWrapper from './SkinWrapper'

const Boxes = SkinWrapper.extend`
  height: 80%;
  width: 90%;
  margin: 10% 5%;
  border: 1px solid darkgray;
  border-radius: 3px;
  ${props => props.isHighlighted && css`background-color: ${props.theme.highlight};`}
`

export default Boxes
