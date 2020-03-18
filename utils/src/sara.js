
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
let fs = require('fs')
let flatten = require('flat')
let templateDir = ['./text_strings/server', './text_strings/templates', './text_strings/gimi-web', './text_strings/client', './text_strings/bot', './text_strings/bot-survey', './text_strings/education', './text_strings/faq', './text_strings/client_new_structure', './text_strings/shared']

let getPath = (filePath: string, file: string) => `${filePath}/${file}`

let runSaraWithNewStructure = (filePath: string, textStrings: string, _default: *): * => {
  fs.readdirSync(filePath).forEach((file) => {
    syncNewTextStrings(filePath, file, textStrings, _default)
  })
}

const syncNewTextStrings = (filePath: string, file: string, lang: string, _default: *) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  if (file === 'en.json') return

  const path = `${filePath}/${file}`
  const fileString = fs.readFileSync(path)
  const fileObj = JSON.parse(fileString)

  addMissingKeyOnNode(fileObj, lang)
  const newFileString = JSON.stringify(fileObj, null, 2)
  fs.writeFileSync(path, newFileString, {encoding: 'utf8'})
}

const addMissingKeyOnNode = (nodeObj: Object, langNodeObj: Object) => {
  Object.keys(langNodeObj).forEach(key => {
    if (!!nodeObj[key]) {
      if (typeof nodeObj[key] === 'object' && typeof langNodeObj[key] === 'object') addMissingKeyOnNode(nodeObj[key], langNodeObj[key])
      return
    }
    if (typeof langNodeObj[key] === 'string') {
      nodeObj[key] = `PLZ_TRANSLATE ${langNodeObj[key]}`
    }
    if (typeof langNodeObj[key] === 'object') {
      nodeObj[key] = {}
      addMissingKeyOnNode(nodeObj[key], langNodeObj[key])
    }
  })
}

let syncNewStructureTextStrings = (filePath: string, file: string, lang: string, _default: *) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  let path = getPath(filePath, file)
  let textStrings = fs.readFileSync(path, {encoding: 'utf8'})
  textStrings = JSON.parse(textStrings)

  let client_orig_path = getPath('./text_strings/client', file)
  let client_orig_textStrings = fs.readFileSync(client_orig_path, {encoding: 'utf8'})
  client_orig_textStrings = JSON.parse(client_orig_textStrings)
  let client_orig_langKeys = Object.keys({...client_orig_textStrings})
  let flatStrings = flatten(textStrings)

  // Delete Support

  /* Object.keys({ ...textStrings })
    .filter((key) => lang[key] === undefined)
    .forEach((key) => {
      delete textStrings[key]
      console.log(`Deleting key: '${key}' from ${filePath}/${file}`)
    }) */

  // Add to new structure
  let existingLangKeys = Object.keys({...flatStrings}).map(key => {
    let langKey = key.split('.')
    langKey = langKey[langKey.length - 1]
    return langKey
  })

  let missingLangKeys = client_orig_langKeys.filter((clientLangKey) => !existingLangKeys.includes(clientLangKey))

  if (missingLangKeys && missingLangKeys.length > 0)
    missingLangKeys.forEach(missingKey => {
      console.log(`adding ${missingKey} to ${path}`)
      lang[missingKey] = client_orig_textStrings[missingKey]
    })

  let newTextStrings = {...lang}

  switch (true) {
    case file.includes('sv.json'):
    case file.includes('en.json'): Object.keys(newTextStrings).forEach(key => (newTextStrings[key] = `PLZ_CHECK ${lang[key]}`)); break
    default: Object.keys(newTextStrings).forEach(key => (newTextStrings[key] = `PLZ_TRANSLATE ${lang[key]}`))
  }

  newTextStrings = {...newTextStrings, ...textStrings}
  Object.keys(_default).forEach(key => delete newTextStrings[key])
  let newTextStringsLength = Object.keys(newTextStrings).length
  let TextStringsLength = Object.keys(textStrings).length
  let delta = newTextStringsLength - TextStringsLength

  if (delta > 0) {
    let folderName = filePath.match(/\/[^\s\/]*$/g) ? filePath.match(/\/[^\s\/]*$/g)[0] + '/' : ''
    console.log(`Updated ${delta} textstrings in ${folderName}${file}`)
  }

  // Save changes
  newTextStrings = JSON.stringify(newTextStrings, undefined, 2)
  fs.unlinkSync(path)
  fs.writeFileSync(path, newTextStrings, {encoding: 'utf8'})
}

let runSara = (filePath: string): * => {
  let folderName = filePath.match(/\/[^\s/]*$/g) ? filePath.match(/\/[^\s/]*$/g)[0] + '/' : ''
  let defaultPath = getPath(filePath, 'default.json')
  let _default = fs.readFileSync(defaultPath, {encoding: 'utf8'})
  _default = JSON.parse(_default)
  let stringPath = getPath(filePath, 'en.json') // Edit here for what language to use
  let strings = fs.readFileSync(stringPath, {encoding: 'utf8'})
  strings = JSON.parse(strings)
  if (filePath.includes('new_structure' || 'shared')) return runSaraWithNewStructure(filePath, strings, _default)
  fs.readdirSync(filePath).forEach((file) => syncTextStrings(filePath, file, strings, _default))

  // fix swedish TextStrings formatting
  strings = JSON.stringify(strings, undefined, 2)
  fs.unlinkSync(stringPath)
  fs.writeFileSync(stringPath, strings, {encoding: 'utf8'})
}

let syncTextStrings = (filePath: string, file: string, lang: string, _default: *) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  let path = getPath(filePath, file)
  let textStrings = fs.readFileSync(path, {encoding: 'utf8'})
  textStrings = JSON.parse(textStrings)
  // Delete Support
  Object.keys({...textStrings})
    .filter((key) => lang[key] === undefined)
    .forEach((key) => {
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

  newTextStrings = {...newTextStrings, ...textStrings}
  Object.keys(_default).forEach(key => delete newTextStrings[key])
  let newTextStringsLength = Object.keys(newTextStrings).length
  let TextStringsLength = Object.keys(textStrings).length
  let delta = newTextStringsLength - TextStringsLength

  if (delta > 0) {
    let folderName = filePath.match(/\/[^\s\/]*$/g) ? filePath.match(/\/[^\s\/]*$/g)[0] + '/' : ''
    console.log(`Updated ${delta} textstrings in ${folderName}${file}`)
  }

  // Save changes
  newTextStrings = JSON.stringify(newTextStrings, undefined, 2)
  fs.unlinkSync(path)
  fs.writeFileSync(path, newTextStrings, {encoding: 'utf8'})
}

templateDir.forEach((filePath) => {
  return runSara(filePath)
})
