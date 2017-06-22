var symbolsThatShouldNotBeReplaced = ['%1$s', '%2$s', '%3$s', '%4$s', '%1$d', '%2$d', '%3$d', '%4$d', 'PLZ_TRANSLATE']
var hashPrefix = 8943894903403

let toHash = (text: string) => {
  symbolsThatShouldNotBeReplaced.forEach((symbol, index) => {
    var splits = text.split(symbol)
    text = splits.join(`${hashPrefix}${index}`)
  })

  return text
}

let fromHash = (text: string) => {
  symbolsThatShouldNotBeReplaced.forEach((symbol, index) => {
    var splits = text.split(`${hashPrefix}${index}`)
    text = splits.join(symbol)
  })

  return text
}

let toHashExperimental = (text: string) => {
  symbolsThatShouldNotBeReplaced.forEach((symbol, index) => {
    var splits = text.split(symbol)
    text = splits.join(`<span class="notranslate">${symbol}</span>`)
  })

  //support server strings
  text = text.replace(/{/g,'<span class="notranslate">{');
  text = text.replace(/}/g, '}</span>')

  return text
}

let fromHashExperimental = (text: string) => {
  text = text.replace(/<span class="notranslate">/g,'');
  text = text.replace(/<\/span>/g, '')
  return text
}


let translationHelpTemplate = 'PLZ_TRANSLATE'

let translateFrom = 'en.json'
module.exports = {toHash, fromHash, toHashExperimental, fromHashExperimental, translationHelpTemplate, translateFrom}
