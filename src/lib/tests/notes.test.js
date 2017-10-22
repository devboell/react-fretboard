import {
  compare,
} from '../notes'

it('compare', () => {
  expect(compare(48)('C')).toBe(true)
  expect(compare(48)('D')).toBe(false)
  expect(compare(49)('C#')).toBe(true)
  expect(compare(49)('Db')).toBe(true)

  expect(compare(48)('C3')).toBe(true)
  expect(compare(48)('D3')).toBe(false)
  expect(compare(49)('C#3')).toBe(true)
  expect(compare(49)('Db3')).toBe(true)
  expect(compare(49)('C3')).toBe(false)
  expect(compare(48)('C4')).toBe(false)
})
