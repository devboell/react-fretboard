import BoardGraphicBoxes from 'components/Fretboard/Skins/BoardGraphicBoxes'
import BoardGraphicStrings from 'components/Fretboard/Skins/BoardGraphicStrings'
import FretWrapperBoxes from 'components/Fretboard/Skins/FretWrapperBoxes'
import FretWrapperStrings from 'components/Fretboard/Skins/FretWrapperStrings'

const skinsMap = {
  boxes: {
    board: BoardGraphicBoxes,
    // nut: NutGraphicBoxes,
    fret: FretWrapperBoxes,
  },
  strings: {
    board: BoardGraphicStrings,
    // nut: NutGraphicStrings,
    fret: FretWrapperStrings,
  },
}

export const boardGraphic = skinType => skinsMap[skinType].board
// export const nutGraphic = skinType => skinsMap[skinType].nut
export const fretWrapper = skinType => skinsMap[skinType].fret
