/* eslint-disable */
module.exports = function (api: any) {
  let presets = []
  api.cache(true)
    presets = [
      '@babel/preset-env'
    ]
  const plugins: Array<string> = []
  return {
    presets,
    plugins
  }
}
