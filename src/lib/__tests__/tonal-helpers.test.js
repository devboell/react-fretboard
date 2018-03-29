import { transpose, isEqual } from '../tonal-helpers'

it('should transpose by semitones', () => {
  expect(transpose('E2')(5)).toBe('A2')
})

it('should match pitches and pcs', () => {
  const isEqualE2 = isEqual('E2')
  expect(isEqualE2('E2')).toBe(true)
  expect(isEqualE2('E3')).toBe(false)
  expect(isEqualE2('E')).toBe(true)
})
