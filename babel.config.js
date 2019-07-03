/* eslint-disable */
module.exports = function (api) {
  let presets = []
  api.cache(true)
    presets = [
      '@babel/preset-env'
    ]
  const plugins = [
    '@babel/plugin-transform-flow-strip-types'
  ]
  return {
    presets,
    plugins
  }
}
