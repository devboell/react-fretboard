Fret example:

```js
const ContextProvider = require('styleguide/ContextProvider').default
const context = {
  skinType: 'strings',
  showNotes: true,
  showOctaves: true,
  showSelection: false,
  showEnharmonics: false,
  selectedNotes: [],
  selectedLocations: [],
  clickAction: () => {},
}

;<ContextProvider context={context}>
  <Fret
    note={'E2'}
    loc={{ str: 5, pos: 0}}
  />
</ContextProvider>

```
