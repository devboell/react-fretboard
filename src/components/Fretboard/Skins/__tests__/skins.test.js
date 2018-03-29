import {
  boardGraphic,
  // nutGraphic,
  fretWrapper,
} from '../skins'

describe('skins module', () => {
  it('boardGraphic', () => {
    expect(boardGraphic('strings').name).toBe('BoardGraphicStrings')
  })

  it('fretWrapper', () => {
    expect(fretWrapper('strings').name).toBe('StyledComponent')
  })
})
