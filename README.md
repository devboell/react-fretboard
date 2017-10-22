# Fretboard component

A reusable react component that displays a fretboard, and lets you select notes, chords and scales.

## Installation

`yarn add fretboard-component`

or

`npm install -S fretboard-component`

## Usage

Besides the Fretboard component, this lib exports several functions (see [API](#functions)) that
generate a fretMatrix. You simply pass this fretMatrix as a prop. `fretboard-component` uses the [Tonal music theory library](https://github.com/danigb/tonal/) internally, and adopts it's naming conventions for notes, chords, etc. Check out Tonal, because you might want to use it together with `fretboard-component`

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

## Examples

There's a live demo with many examples here: https://react-fretboard-demo.herokuapp.com

## API

### props

  **fretMatrix**

  This prop is used to generate the Frets. See below for the functions by which you can create a fretMatrix. If no fretMatrix is supplied the Fretboard will use a default matrix of standard-tuning and width 13.

  **settings**

  Settings is an object that can have three different bool variables. These are the default settings:
  ```
  {
    showNotes: false,
    showOctaves: false,
    showPositions: true,
  }
  ```
  You can specify any number of settings, or none. They will be merged against the default settings.

  **theme**

  Specify a theme to customise the style of the fretboard. (see [CSS](#CSS))

### functions<a name="functions"></a>
  With these functions you can create a fretMatrix that has notes, intervals, chords and scales selected.
  All these function have three params in common:
  - *tuning* (required): an array of note names. F.i:

    `const standard = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']`

    `const spanish = ['D2', 'G2', 'D3', 'G3', 'B3', 'D4']`
  - *width* (required): simply the number of frets. You can make it as small or big as you want. The fretboard is responsive in the horizontal direction (using percentages for fret width, and width: 100% for the Fretboard itself).

  - *showName* (optional): Use this setting to display the note name or interval name for a selected fret. Default is false.



**fretMatrixForPc(tuning, width, pc, showName)**
- *pc* (required): the pitch class to select. If you want for example to select all C's, then use 'C'. It's basically a note name without an octave.

**fretMatrixForNote(tuning, width, note, showName)**
  - *note* (required): the note to select. This is a note *with* an octave, like 'C3' or 'A#4'.


**fretMatrixForInterval(tuning, width, tonic, interval, showName)**
  - *tonic* (required): a pc or a note that is the root of the interval.
  - *interval* (required): the interval to select. (1P, 2m, 2M, 3m, 3M, 4P, 5P, 6m, 6M, 7m, 7M, 8P)

**fretMatrixForChord(tuning, width, chord, showName)**
  - *chord* (required): name of the chord. F.i: CM, Cmaj7, D#m, G3min7, etc. See Tonal.Chord.names() for all available chords.

**fretMatrixForScale(tuning, width, tonic, scale, showName)**
  - *tonic* (required): a pc or a note that is the root of the scale.
  - *scale* (required): name of the scale. F.i: major, minor, phrygian, bebop) See Tonal.Scale.names() for all available scales.

## CSS

  `fretboard-component` uses [`styled-components`](https://github.com/styled-components/styled-components) for it's styling. You can provide your own theme by passing it through the theme prop. This the default theme:
  ```
  {
    statusMap: {
      selected: 'yellow',
      unselected: 'white',
    },
    octaveMap: {
      2: 'rgb(95, 190, 244)',
      3: 'rgb(135, 219, 244)',
      4: 'rgb(205, 240, 247)',
      5: 'rgb(242, 246, 247)',
    },
  }
  ```
  You can specify any theme attribute you want, as long as you keep the theme structure. It will be merged against the default theme.
