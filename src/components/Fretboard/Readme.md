
### Selections
#### single note selection
```js
<Fretboard
  selectedNotes={['C4']}
/>
```
#### multiple pc selection
```js
<Fretboard
  skinType="strings"
  showSelectionLabels
  selectedNotes={['C', 'F']}
/>
```
#### multiple noteObj selection
```js
<Fretboard
  showSelectionLabels
  selectedNotes={[{ note: 'C4', label: 'root' }, { note: 'F4', label: '4P' }]}
/>
```
#### single locObj selection, with octaves
```js
<Fretboard
  skinType="strings"
  highlightOctaves
  showSelectionLabels
  selectedLocations={[{ loc: { str: 2, pos: 5 }, label: 'C4' }]}
/>
```

### No Selections
#### default fretboard
```js
<Fretboard
/>
```
```js
<Fretboard
  skinType="strings"
/>
```
#### showNotes
```js
<Fretboard
  showNotes
/>
```
```js
<Fretboard
  skinType="strings"
  showNotes
/>
```
#### highlightOctaves
```js
<Fretboard
  showNotes
  highlightOctaves
/>
```
```js
<Fretboard
  skinType="strings"
  showNotes
  highlightOctaves
/>
```

