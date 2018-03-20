import { css } from 'styled-components'
import SkinWrapper from './SkinWrapper'


const background = ({ theme, isHighlighted, status }) =>
  isHighlighted && css`background-color: ${theme.highlight[status]};`

const Boxes = SkinWrapper.extend`
  height: 80%;
  width: 90%;
  margin: 10% 5%;
  border: 1px solid darkgray;
  border-radius: 3px;
  ${props => background(props)}
`

export default Boxes
