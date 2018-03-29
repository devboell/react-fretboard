const path = require('path')

module.exports = {
  components: 'src/components/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/ThemeWrapper'),
  },
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    const indexRegex = /index\.jsx?$/
    return componentPath.match(indexRegex)
      ? componentPath.replace(indexRegex, 'Readme.md')
      : componentPath.replace(/\.jsx?$/, '.md')
  },
}
