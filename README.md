# react-fretboard

A reusable react component that displays a fretboard, and lets you select notes, chords and scales.

## Installation

`yarn add react-fretboard`

or

`npm install react-fretboard`

## Usage

Besides the Fretboard component, this lib exports several functions (see [API](#functions)) that
help you select notes, chords, etc. `react-fretboard` uses the [Tonal music theory library](https://github.com/danigb/tonal/) internally, and adopts it's naming conventions for notes, chords, etc. Check out Tonal, because you might want to use it together with `react-fretboard`

```js
import React from 'react'
import Fretboard, { chordNotes } from 'react-fretboard'

const App = () =>
  <div>
    <Fretboard
      skinType="strings"
      selectedNotes={['C3', 'E3', 'G3']}
    />
  </div>

export default App
```

## Examples

There's a live demo with many examples here: https://react-fretboard-demo.herokuapp.com  
You can also clone the repo and run styleguidist (`yarn styleguide`), which will show interactive examples so you can experiment with the props.

## API

### props
  **tuning**  
  *arrayOf(string)*

  Array of pitch strings, from which all the fret notes are calculated. You can provide any tuning you want. Additionally the number of notes in the tuning array determine how many strings the fretboard will display.
  The default is standard tuning for a 6 string guitar.  
  Example: `tuning={['E2', 'A2', 'D3', 'G3', 'B3', 'E4']}`
  
  **nrOfFrets**  
  *number*

  This sets the width of the fretboard. The number includes the open position, so 12 frets will need `nrOfFrets={13}`. 13 is also the default.

  **skinType**  
  *oneOf(['boxes', 'strings'])*

  Determines the overall look of the fretboard. 'boxes' displays the frets as divs with a border, and 'strings' looks more like a standard fretboard diagram.  
  Default is 'boxes'

  **noteType**  
  *oneOf(['pc', 'pitch'])*

  Sets what type of note is displayed in the frets, f.i.: C (pc, short for pitch class), or C4 (pitch). This is purely a visual setting, you can still select pc's or pitches. (see selectedNotes below)  
  Default is 'pitch'

  **showNotes**  
  *bool*

  Determines whether to show the (unselected) note names in the fretboard, or not. (This is overridden by a label of a selected note if showSelectionLabels is true)  
  Default is false

  **showSelectionLabels**  
  *bool*


  Determines whether to show the selected note label. (This overrides the showNotes prop)  
  Default is true

  **highlightOctaves**  
  *bool*

  Determines whether to show a fret's octave background color. (Is overridden by highlightSelections). You can provide your own octave colors with the theme prop.  
  Default is false

  **highlightSelections**  
  *bool*

  Determines wether to show a selected fret's background color. (This overrides the octave color). (see selectedNotes below for more information)  
  Default is true

  **showEnharmonics**  
  *bool*

  If a note has a (simple) enharmonic, like C#, this prop lets you choose to display just 'C#' or 'C#/Db'. The note name may become too large for the smaller frets, in which case it is clipped. Check the theme's fontSize property for a bit more control of fitting a note name in a fret.  
  Default is false

  **showPositionLabels**  
  *bool*

  Shows the position markers underneath the fretboard (like: I, III, VII, X).  
  Default is true

  **selectedNotes**  
  *arrayOf(oneOfType([  
  &nbsp;&nbsp;  string,  
  &nbsp;&nbsp;  shape({  
  &nbsp;&nbsp;&nbsp;&nbsp;    note: string.isRequired,  
  &nbsp;&nbsp;&nbsp;&nbsp;    status: string,  // optional, default 'selected'  
  &nbsp;&nbsp;&nbsp;&nbsp;    label: string,   // optional, default note name  
   &nbsp;&nbsp; })  
  ]))*  

  This can get complicated, but basic usage is very simple. There are two ways to select notes:
  1. array of note names. Examples:  
    `selectedNotes={['C']}`, selects all C notes.  
    `selectedNotes={['A3', 'D4']}`, selects all A3 and D4 notes.  
    If you have highlightSlections true, it will look in the theme.statusMap.selected for the specified color, and use it to highlight the frets. If you have showSelectionLabels true, it will display note names.
  2. array of note objects. Examples of note objects:  
    `{ note: 'C', label: 'root', status: 'root' }`, will select all C's, label them with 'root', and use theme.statusMap.root for the highlight color (which you'll need to specify)  
    `{ note: 'C', status: 'root' }`, will select all C's, label them with 'C', and use the color under theme.statusMap.root.  
    An example of a C3 triad could be:  
    `selectedNotes={[{ note: 'C3', label: 'root', status: 'root' }, { note: 'E3', label: '3M', status: '3M' }, { note: 'G3', label: '5P', status: '5P' }]}`  
    `react-fretboard` exports a couple of functions that help with generating these note objects.


  **selectedLocations**  
  *arrayOf(oneOfType([  
&nbsp;&nbsp;    shape({  
&nbsp;&nbsp;&nbsp;&nbsp;      str: number.isRequired,  
&nbsp;&nbsp;&nbsp;&nbsp;      pos: number.isRequired,  
&nbsp;&nbsp;    }),   
&nbsp;&nbsp;    shape({  
&nbsp;&nbsp;&nbsp;&nbsp;      loc: shape({  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        str: number.isRequired,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        pos: number.isRequired,  
&nbsp;&nbsp;&nbsp;&nbsp;     }).isRequired,  
&nbsp;&nbsp;&nbsp;&nbsp;     status: string,  
&nbsp;&nbsp;&nbsp;&nbsp;     label: string,  
&nbsp;&nbsp;    })  
  ]))*  

Lets you select frets based on their location on the fretboard. The top (1st) string is `str: 0`, and bottom string is `str: tuning.length - 1`.
This prop behaves almost identically to selectedNotes, except that instead of the note string, you'd use a loc object.

  **theme**

  Specify a theme to customize the style of the fretboard. (see [CSS](#CSS))

  **clickAction**  
  *func*  

  Provide a callback that will be called when a fret is clicked. The args passed are (note, loc)  


### functions<a name="functions"></a>
  These are convenience functions, and you may not need to use them. F.i: these props have the equivalent result on the fretboard:  
  `selectedNotes={['C', 'E']}`  
  `selectedNotes={intervalNotes('C', 4)}`  

  or these:  
  `selectedNotes={['C', 'E', 'G']}`    
  `selectedNotes={Tonal.Chord.notes('CM')}` using the [Tonal library](https://github.com/danigb/tonal/)  
  `selectedNotes={chordNotes('CM')}`  

  They become more useful when, instead of note names, you want to show the relative intervals of selected notes, by using the `useIvlLabel` and `useIvlStatus` params. With `useIvlLabel = true` the selection labels will be set to interval names.  With `useIvlStatus = true` the highlight color will be theme.statusMap.[ivlName]. Check the examples below.
  
  **intervalNotes(note, ivl, useIvlLabel = false, useIvlStatus = false)**
  
  Examples:  
  `intervalNotes('C', 4)` - returns array of note objects, C and E, with label set to note name and status 'selected'  
  `intervalNotes('C', 4, true)` - returns array of note objects, C and E, with labels set to 1P and 3M, and status 'selected'.  
  `intervalNotes('C', 4, true, true)` - returns array of note objects, C and E, with labels and status set to 1P and 3M.  
    
  
  
  **chordNotes(chord, useIvlLabel = false, useIvlStatus = false)**  

  Examples:  
  `chordNotes('CM')` - returns array of note objects, C, E and G, with label set to note name and status 'selected'  
  `chordNotes('CM', true)` - returns array of note objects, C, E and G, with labels set to 1P, 3M and 5P, and status 'selected'.  
  `chordNotes('CM', true, true)` - returns array of note objects, C, E and G, with labels and status set to 1P, 3M and 5P.
 
  
  **scaleNotes(tonic, scale, useIvlLabel = false, useIvlStatus = false)**  

  Examples:  
  `scaleNotes('C', 'major')` - returns array of note objects of the C major scale, with label set to note name and status 'selected'  
  `scaleNotes('C', 'major', true)` - returns array of note objects of the C major scale, with labels set to their respective interval names, and status 'selected'.  
  `scaleNotes('C', 'major', true, true)` - returns array of note objects of the C major scale, with labels and status set to their respective interval names.
  



## CSS<a name="CSS"></a>

  `react-fretboard` uses [`styled-components`](https://github.com/styled-components/styled-components) for it's styling. You can provide your own theme by passing it through the theme prop. This is the default theme:
  ```js
  {
    background: 'white',
    statusMap: {
      selected: 'rgb(255, 252, 127)',
      unselected: 'white',
      '1P': '#1a0500',
      '2m': '#4d0f00',
      '2M': '#801a00',
      '3m': '#cc2900',
      '3M': '#e62e00',
      '4P': '#ff3300',
      '4A': '#ff5c33',
      '5P': '#ff704d',
      '6m': '#ff9980',
      '6M': '#ffb199',
      '7m': '#ffd8cc',
      '7M': '#ffebe6',
    },
    octaveMap: {
      2: 'rgb(95, 190, 244)',
      3: 'rgb(135, 219, 244)',
      4: 'rgb(205, 240, 247)',
      5: 'rgb(242, 246, 247)',
    },
    fontSize: 12,
    dimensions: {
      openWidth: 10,
      nutWidth: 0.75,
      stringHeight: 30,
    },
    skins: {
      strings: {
        highlightSize: 85,
        highlightBorder: '1px solid gray',
      },
    },
  }
  ```

  **fontSize** - in px  
  **dimensions.openWidth** - percentage width of the open position  
  **dimensions.nut** - percentage width of the nut  
  **dimensions.stringHeight** - height of strings in px  
  **skins.strings.highlightSize** - percentage of stringHeight  


  You can specify any theme attribute you want, as long as you keep the theme structure. It will be merged against the default theme.
