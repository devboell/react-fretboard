import { css } from 'styled-components'
import FretWrapper from './FretWrapper'


const background = ({ color, isHighlighted }) =>
  isHighlighted && css`background-color: ${color};`

const Boxes = FretWrapper.extend`
  height: 80%;
  width: 90%;
  margin: 10% 5%;
  border: 1px solid darkgray;
  border-radius: 3px;
  ${props => background(props)}
`

export default Boxes
