### Generated examples

```js
const ContextProvider = require('styleguide/ContextProvider').default
const testSuites = require('styleguide/fixtures').default

testSuites.map(suite =>
  <div key={suite.key}>
    <h4>{suite.description}</h4>
    {suite.testCases.map((cs) => {
      const context = Object.assign({}, suite.context, cs.context)

      return (
        <ContextProvider key={`${suite.key}=${cs.key}`} context={context}>
          <h5>{cs.description}</h5>
          <div style={{ width: 80, height: 30 }}>
            <Fret {...suite.props} />
          </div>
        </ContextProvider>
      )
      })
    }
    <br /><br /><br />
  </div>
)
```
