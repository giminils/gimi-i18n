/* eslint-disable */
module.exports = function (api) {
  let presets = []
  api.cache(true)
    presets = [
      '@babel/preset-env',
      'module:metro-react-native-babel-preset'
    ]
  const plugins = [
    '@babel/plugin-transform-flow-strip-types'
  ]
  return {
    presets,
    plugins
  }
}
