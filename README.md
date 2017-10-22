## Fretboard component

A reusable react component that displays a fretboard, and lets you select notes, chords and scales.

### installation

`yarn add fretboard-component`

or

`npm install fretboard-component`

### usage

Besides the Fretboard component, this lib exports several functions (see api) that
generate a fretMatrix. You simply pass this fretMatrix as a prop. fretboard-component uses the [Tonal music theory library] internally, and adopts it's naming conventions for notes, chords, etc. Check out Tonal

```
import React from 'react'
import Fretboard, { fretMatrixForChord } from 'react-fretboard'

const width = 13
const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

const App = () =>
  <div>
    <Fretboard
      fretMatrix={fretMatrixForChord(tuning, width, 'Cmaj7', true)}
    />
  </div>

export default App
```

### examples

There's a live demo with many examples here: https://react-fretboard-demo.herokuapp.com

### api

#### props

  <b>settings</b>

  Settings is an object that can have three different bool variables. These are the default settings:
  ```
  {
    showNotes: false,
    showOctaves: false,
    showPositions: true,
  }
  ```
  You can specify any number of settings, or none. They will be merged against the default settings.

  <b>fretMatrix</b>

  This prop is used to generate the Frets. See below for the functions by which you can create a fretMatrix. If no fretMatrix is supplied the Fretboard will use a default matrix of standard-tuning and width 13.

#### functions
  With these functions you can create a fretMatrix that has notes, intervals, chords and scales selected.
  All these function have three in common:
  - *tuning*: an array of note names. F.i:

    `const standard = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']`

    `const spanish = ['D2', 'G2', 'D3', 'G3', 'B3', 'D4']`
  - *width*: simply the number of frets. You can make it as small or big as you want. The fretboard is reponsive in the horizontal direction (using percentages for fret width, and width: 100% for the Fretboard itself).

  - *showName*:
