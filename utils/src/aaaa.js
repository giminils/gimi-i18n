
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
var fs = require('fs')
let templateDirs = ['./text_strings/server', './text_strings/templates', './text_strings/gimi-web', './text_strings/client', './text_strings/bot', './text_strings/education']
let PLZ_CHECK = 'PLZ_CHECK'
let PLZ_COPY = 'PLZ_COPY'
let PLZ_TRANSLATE = 'PLZ_TRANSLATE'

let copyEn = []
let removePLzCopy = (enTextFile): * => {
  enTextFile = enTextFile.replace(PLZ_COPY + ' ', '')
  if (!enTextFile.includes(PLZ_COPY))
    return enTextFile
  else
    return removePLzCopy(enTextFile)
}
let removeAndSave = (filePath): * => {
  let getPath = (file) => `${filePath}/${file}`
  var langPath = getPath('en.json') // Edit here for what language to use

  var enTextFile = fs.readFileSync(langPath, {encoding: 'utf8'})

  enTextFile = removePLzCopy(enTextFile)

  fs.unlinkSync(langPath)
  fs.writeFileSync(langPath, enTextFile, {encoding: 'utf8'})
}
let RunLili = (filePath): * => {
  let getPath = (file) => `${filePath}/${file}`
  var langPath = getPath('en.json') // Edit here for what language to use
  var lang = fs.readFileSync(langPath, {encoding: 'utf8'})
  lang = JSON.parse(lang)

  let syncTextStrings = (file) => {
    if (file.indexOf('.json') === -1)
      return
    if (file === 'default.json') return
    if (file === 'lang.json')
      return
    var path = getPath(file)
    var TextStrings = fs.readFileSync(path, {encoding: 'utf8'})// Textstings file
    TextStrings = JSON.parse(TextStrings)

    // Craete Support§
    let NewTextStrings = {...lang}
    Object.keys(lang).forEach(key => {
      if (lang[key].includes(PLZ_COPY) && !file.includes('en.json')) {
        if (!file.includes('sv.json'))
          NewTextStrings[key] = NewTextStrings[key].replace(PLZ_COPY, PLZ_TRANSLATE)
        NewTextStrings[key] = NewTextStrings[key].replace(PLZ_COPY, PLZ_CHECK)
        TextStrings[key] = `${NewTextStrings[key]}`
      }
    })

    NewTextStrings = {...NewTextStrings, ...TextStrings}

    var NewTextStringsLength = Object.keys(NewTextStrings).length
    var TextStringsLength = Object.keys(TextStrings).length
    var delta = NewTextStringsLength - TextStringsLength

    if (delta > 0)
      console.log(`Updated ${delta} textstrings in ${file}`)

    // Save changes
    NewTextStrings = JSON.stringify(NewTextStrings, undefined, 2)
    fs.unlinkSync(path)
    fs.writeFileSync(path, NewTextStrings, {encoding: 'utf8'})
  }

  fs.readdirSync(filePath).forEach((languageCode) => {
    if (languageCode.includes('en.json'))
      copyEn.push(filePath)
    syncTextStrings(languageCode)
  })

  copyEn.forEach(pathsa => {
    removeAndSave(pathsa)
  })

  lang = JSON.stringify(lang, undefined, 2)
  fs.unlinkSync(langPath)
  fs.writeFileSync(langPath, lang, {encoding: 'utf8'})
}
templateDirs.forEach((filePath) => {
  RunLili(filePath)
})
