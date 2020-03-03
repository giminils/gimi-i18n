
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
let fs = require('fs')
let templateDir = ['./text_strings/server', './text_strings/templates', './text_strings/gimi-web', './text_strings/client', './text_strings/bot', './text_strings/bot-survey', './text_strings/education', './text_strings/faq''./text_strings/client_new_structure'], 

let RunSara = (filePath): * => {
  let getPath = (file) => `${filePath}/${file}`
  let folderName = filePath.match(/\/[^\s/]*$/g) ? filePath.match(/\/[^\s/]*$/g)[0] + '/' : ''
  let defaultPath = getPath('default.json')
  let _default = fs.readFileSync(defaultPath, {encoding: 'utf8'})
  _default = JSON.parse(_default)

  let langPath = getPath('en.json') // Edit here for what language to use
  let lang = fs.readFileSync(langPath, {encoding: 'utf8'})
  lang = JSON.parse(lang)

  let syncTextStrings = (file) => {
    if (file.indexOf('.json') === -1)
      return

    if (file === 'default.json') return

    if (file === 'lang.json')
      return

    let path = getPath(file)

    let TextStrings = fs.readFileSync(path, {encoding: 'utf8'})
    TextStrings = JSON.parse(TextStrings)

    // Delete Support
    Object.keys({...TextStrings})
      .filter((key) => lang[key] === undefined)
      .forEach((key) => {
        delete TextStrings[key]
        console.log(`Deleting key: '${key}' from ${folderName}${file}`)
      })

    // Craete Support
    let NewTextStrings = {...lang}

    switch (true) {
      case file.includes('sv.json'):
      case file.includes('en.json'): Object.keys(NewTextStrings).forEach(key => (NewTextStrings[key] = `PLZ_CHECK ${lang[key]}`)); break
      default: Object.keys(NewTextStrings).forEach(key => (NewTextStrings[key] = `PLZ_TRANSLATE ${lang[key]}`))
    }

    NewTextStrings = {...NewTextStrings, ...TextStrings}
    Object.keys(_default).forEach(key => delete NewTextStrings[key])
    let NewTextStringsLength = Object.keys(NewTextStrings).length
    let TextStringsLength = Object.keys(TextStrings).length
    let delta = NewTextStringsLength - TextStringsLength

    if (delta > 0) {
      let folderName = filePath.match(/\/[^\s\/]*$/g) ? filePath.match(/\/[^\s\/]*$/g)[0] + '/' : ''
      console.log(`Updated ${delta} textstrings in ${folderName}${file}`)
    }

    // No update support atm :(

    // Save changes
    NewTextStrings = JSON.stringify(NewTextStrings, undefined, 2)
    fs.unlinkSync(path)
    fs.writeFileSync(path, NewTextStrings, {encoding: 'utf8'})
  }

  fs.readdirSync(filePath).forEach((languageCode) => syncTextStrings(languageCode))

  // fix swedish TextStrings formatting
  lang = JSON.stringify(lang, undefined, 2)
  fs.unlinkSync(langPath)
  fs.writeFileSync(langPath, lang, {encoding: 'utf8'})
}
templateDir.forEach((filePath) => {
  RunSara(filePath)
})
