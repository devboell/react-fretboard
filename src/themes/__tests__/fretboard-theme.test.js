import theme from '../fretboard-theme'


it('should check fretboard-theme against snapshot', () => {
  expect(theme).toMatchSnapshot()
})
