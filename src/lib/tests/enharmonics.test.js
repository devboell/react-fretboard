import { enharmonics, hasAcc } from '../enharmonics'

it('hasAcc', () => {
  expect(hasAcc('C')).toBe(false)
  expect(hasAcc('C#')).toBe(true)
  expect(hasAcc('Db')).toBe(true)
})

it('enharmonics', () => {
  expect(enharmonics('C#')).toEqual(['C#', 'Db'])
  expect(enharmonics('Db')).toEqual(['C#', 'Db'])
})
