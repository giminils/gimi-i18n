/* eslint-disable */
// @ts-nocheck
module.exports = function (api) {
  api.cache(true)
    let presets = [
      '@babel/preset-env'
    ]
  const plugins = []
  return {
    presets,
    plugins
  }
}
