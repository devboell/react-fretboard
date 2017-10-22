import {
  entities,
} from '../fretboard'

// const width = 13
// const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']


it('entities pc', () => {
  expect(entities.pc('C')).toEqual([['C', 'C']])
})

it('entities pitch', () => {
  expect(entities.pitch('C3')).toEqual([['C3', 'C3']])
})

it('entities interval', () => {
  expect(entities.interval('C', '2m')).toEqual([['C', '1P'], ['Db', '2m']])
  expect(entities.interval('C3', '2m')).toEqual([['C3', '1P'], ['Db3', '2m']])
})

it('entities chord', () => {
  expect(entities.chord('CM')).toEqual([['C', '1P'], ['E', '3M'], ['G', '5P']])
  expect(entities.chord('C3M')).toEqual([['C3', '1P'], ['E3', '3M'], ['G3', '5P']])
  expect(entities.chord('A3M')).toEqual([['A3', '1P'], ['C#4', '3M'], ['E4', '5P']])
})
