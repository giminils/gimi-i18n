
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import fs from 'fs'
let templateDir = ['./text_strings/server', './text_strings/templates', './text_strings/gimi-web', './text_strings/client', './text_strings/bot', './text_strings/bot-survey', './text_strings/education', './text_strings/faq', './text_strings/client_new_structure', './text_strings/shared']

let getPath = (filePath: string, file: string) => `${filePath}/${file}`

let runSaraWithNewStructure = (filePath: string, textStrings: object, _default: any): any => {
  fs.readdirSync(filePath).forEach((file) => {
    syncNewTextStrings(filePath, file, textStrings, _default)
  })
}

const syncNewTextStrings = (filePath: string, file: string, lang: object, _default: string) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  if (file === 'en.json') return
  const path = `${filePath}/${file}`
  const fileString = fs.readFileSync(path)
  const fileObj: object = JSON.parse(fileString)

  // move root keys to sub nodes
  addMissingKeyOnNode(fileObj, fileObj, lang)
  // delete extra keys
  const newFileString = JSON.stringify(fileObj, null, 2)
  fs.writeFileSync(path, newFileString, {encoding: 'utf8'})
}

const addMissingKeyOnNode = (rootObj: object, nodeObj: object, langNodeObj: object) => {
  Object.keys(langNodeObj)
    .forEach((key) => {
    if (typeof langNodeObj[key] === 'string') {
      if (!!nodeObj[key] && typeof nodeObj[key] === 'string') {
        // some params in translations had double PLZ_TRANSLATE
        nodeObj[key] = createPlzTranslateString(nodeObj[key])
        return
      }
      // migrate old
      if (!!rootObj[key] && typeof rootObj[key] === 'string') {
        nodeObj[key] = createPlzTranslateString(rootObj[key])
        delete rootObj[key]
        return
      }
      nodeObj[key] = createPlzTranslateString(langNodeObj[key])
      return
    }
    if (typeof langNodeObj[key] === 'object') {
      if (!nodeObj[key]) nodeObj[key] = {}
      if (!!nodeObj[key] && typeof nodeObj[key] === 'string') nodeObj[key] = {}
      addMissingKeyOnNode(rootObj, nodeObj[key], langNodeObj[key])
    }
  })
}

const createPlzTranslateString = (str: string) => {
  if (str.match(/PLZ_TRANSLATE /)) str = `PLZ_TRANSLATE ${str.replace(/PLZ_TRANSLATE /g, '')}`
  return str
}

let runSara = (filePath: string): any => {
  // let folderName = filePath.match(/\/[^\s/]*$/g) ? filePath.match(/\/[^\s/]*$/g)[0] + '/' : ''
  let defaultPath = getPath(filePath, 'default.json')
  let _default = fs.readFileSync(defaultPath, {encoding: 'utf8'})
  _default = JSON.parse(_default)
  let stringPath = getPath(filePath, 'en.json') // Edit here for what language to use
  let strings = fs.readFileSync(stringPath, {encoding: 'utf8'})
  strings = JSON.parse(strings)
  if (filePath.includes('new_structure') || filePath.includes('shared')) return runSaraWithNewStructure(filePath, strings, _default)
  fs.readdirSync(filePath).forEach((file) => syncTextStrings(filePath, file, strings, _default))

  // fix swedish TextStrings formatting
  strings = JSON.stringify(strings, undefined, 2)
  fs.unlinkSync(stringPath)
  return fs.writeFileSync(stringPath, strings, {encoding: 'utf8'})
}

let syncTextStrings = (filePath: string, file: string, lang: object, _default: any) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  let path = getPath(filePath, file)
  let textStrings = fs.readFileSync(path, {encoding: 'utf8'})
  let parsedStrings: object = JSON.parse(textStrings)
  // Delete Support
  Object.keys({ ...parsedStrings})
    .filter((key: string) => lang[key] === undefined)
    .forEach((key: string) => {
      delete textStrings[key]
      console.log(`Deleting key: '${key}' from ${filePath}/${file}`)
    })

  // Craete Support
  let newTextStrings = {...lang}

  switch (true) {
    case file.includes('sv.json'):
    case file.includes('en.json'): Object.keys(newTextStrings).forEach(key => (newTextStrings[key] = `PLZ_CHECK ${lang[key]}`)); break
    default: Object.keys(newTextStrings).forEach(key => (newTextStrings[key] = `PLZ_TRANSLATE ${lang[key]}`))
  }

  newTextStrings = { ...newTextStrings, ...parsedStrings}
  Object.keys(_default).forEach(key => delete parsedStrings[key])
  let newTextStringsLength = Object.keys(newTextStrings).length
  let TextStringsLength = Object.keys(textStrings).length
  let delta = newTextStringsLength - TextStringsLength

  if (delta > 0) console.log(`Updated ${delta} textstrings in ${filePath}`)

  // Save changes
  newTextStrings = JSON.stringify(newTextStrings, undefined, 2)
  fs.unlinkSync(path)
  fs.writeFileSync(path, newTextStrings, {encoding: 'utf8'})
}

templateDir.forEach((filePath) => {
  return runSara(filePath)
})
