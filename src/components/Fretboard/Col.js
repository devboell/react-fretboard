import styled from 'styled-components'

// https://math.stackexchange.com/questions/1858103/find-the-relative-width-of-a-guitar-fret
export const width = (pos, fbWidth) =>
  (((2 ** (1 / fbWidth)) - 1) /
  (2 ** ((pos + 1) / fbWidth))) * 100 * 2

export default styled.col`
  width: ${props => width(props.pos, props.width)}%;
`
