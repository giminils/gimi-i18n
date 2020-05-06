/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const fs = require('fs')
let templateDirs = ['./text_strings/server', './text_strings/templates', './text_strings/gimi-web', './text_strings/client', './text_strings/bot', './text_strings/bot-survey', './text_strings/education', './text_strings/faq']

let PLZ_CHECK = 'PLZ_CHECK'
let PLZ_COPY = 'PLZ_COPY'
let PLZ_TRANSLATE = 'PLZ_TRANSLATE'

let copyEn: Array<string> = []
let removePLzCopy = (enTextFile: {[key: string]: string}): any => {
  Object.keys(enTextFile).forEach(key => {
    if (enTextFile[key].includes(PLZ_COPY))

      enTextFile[key] = enTextFile[key].replace(PLZ_COPY + ' ', '')
  })
  return enTextFile
}

let removeAndSave = (filePath: string): any => {
  let getPath = (file: string) => `${filePath}/${file}`
  let langPath = getPath('en.json') // Edit here for what language to use
  let enTextFile = fs.readFileSync(langPath, {encoding: 'utf8'})
  let parsedText: {[key: string]: string} = JSON.parse(enTextFile)
  let updateEnTextFile = { ...parsedText}

  enTextFile = removePLzCopy(updateEnTextFile)
  updateEnTextFile = {...updateEnTextFile, ...parsedText}
  let strinigiedUpdateEnTextFile = JSON.stringify(updateEnTextFile, undefined, 2)

  fs.unlinkSync(langPath)
  fs.writeFileSync(langPath, strinigiedUpdateEnTextFile, {encoding: 'utf8'})
}
let runLili = (filePath: string): any => {
  let getPath = (file: string) => `${filePath}/${file}`
  let langPath = getPath('en.json') // Edit here for what language to use
  let lang = fs.readFileSync(langPath, {encoding: 'utf8'})
  let parsedLang: {[key: string]: string} = JSON.parse(lang)

  let syncTextStrings = (file: string) => {
    if (file.indexOf('.json') === -1) return
    if (file === 'default.json') return
    if (file === 'lang.json') return
    let path = getPath(file)
    let TextStrings = fs.readFileSync(path, {encoding: 'utf8'})// Textstings file
    let parsedTextStrings: {[key: string]: string} = JSON.parse(TextStrings)

    // Craete Support§
    let NewTextStrings = { ...parsedLang}
    Object.keys(lang).forEach(key => {
      if (parsedLang[key].includes(PLZ_COPY) && !file.includes('en.json')) {
        if (!file.includes('sv.json'))
          NewTextStrings[key] = NewTextStrings[key].replace(PLZ_COPY, PLZ_TRANSLATE)
        NewTextStrings[key] = NewTextStrings[key].replace(PLZ_COPY, PLZ_CHECK)
        parsedTextStrings[key] = `${NewTextStrings[key]}`
      }
    })

    NewTextStrings = {...NewTextStrings, ...parsedTextStrings}

    let NewTextStringsLength = Object.keys(NewTextStrings).length
    let TextStringsLength = Object.keys(TextStrings).length
    let delta = NewTextStringsLength - TextStringsLength

    if (delta > 0)
      console.log(`Updated ${delta} textstrings in ${file}`)

    // Save changes
    let newParsedTextStrings = JSON.stringify(NewTextStrings, undefined, 2)
    fs.unlinkSync(path)
    fs.writeFileSync(path, newParsedTextStrings, {encoding: 'utf8'})
  }

  fs.readdirSync(filePath).forEach((languageCode: string) => {
    if (languageCode.includes('en.json'))
      copyEn.push(filePath)
    syncTextStrings(languageCode)
  })

  copyEn.forEach(pathsa => {
    removeAndSave(pathsa)
  })

  // lang = JSON.stringify(lang, undefined, 2)
  // fs.unlinkSync(langPath)
  // fs.writeFileSync(langPath, lang, {encoding: 'utf8'})
}
templateDirs.forEach((filePath) => {
  runLili(filePath)
})
