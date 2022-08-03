import fs from 'fs'
let templateDir = [
  './text_strings/server',
  './text_strings/templates',
  './text_strings/gimi-web',
  './text_strings/client',
  './text_strings/bot',
  './text_strings/bot-survey',
  './text_strings/education',
  './text_strings/faq',
  './text_strings/shared',
  './text_strings/school',
  './text_strings/dictionary'
]

let getPath = (filePath: string, file: string) => `${filePath}/${file}`

const syncNewTextStrings = (filePath: string, file: string, lang: Record<string, string>, _default: string) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  if (file === 'en.json') return
  const path = `${filePath}/${file}`
  const fileString = fs.readFileSync(path).toString().replace(/\r/, '')
  let bufferString: string = fileString.toString()
  const fileObj: Record<string, string> = JSON.parse(bufferString)

  // move root keys to sub nodes
  addMissingKeyOnNode(fileObj, fileObj, lang)
  // delete extra keys
  const newFileString = JSON.stringify(fileObj, null, 2)
  fs.writeFileSync(path, newFileString, {encoding: 'utf8'})
}

const addMissingKeyOnNode = (
  rootObj: Record<string, string>,
  nodeObj: Record<string, string>,
  langNodeObj: Record<string, string>
) => {
  Object.keys(langNodeObj).forEach((key) => {
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
    }
    /* if (typeof langNodeObj[key] === 'object') {
      if (!nodeObj[key]) nodeObj[key] = {}
      if (!!nodeObj[key] && typeof nodeObj[key] === 'string') nodeObj[key] = {}
      addMissingKeyOnNode(rootObj, nodeObj[key], langNodeObj[key])
    } */
  })
}

const createPlzTranslateString = (str: string) => {
  if (str.match(/PLZ_TRANSLATE /)) str = `PLZ_TRANSLATE ${str.replace(/PLZ_TRANSLATE /g, '')}`
  return str
}

let runAddNewTranslations = (filePath: string): any => {
  // let folderName = filePath.match(/\/[^\s/]*$/g) ? filePath.match(/\/[^\s/]*$/g)[0] + '/' : ''
  let defaultPath = getPath(filePath, 'default.json')
  let _default = fs.readFileSync(defaultPath, {encoding: 'utf8'}).replace(/\r/, '')
  let parsed_default: Record<string, string> = JSON.parse(_default)
  let stringPath = getPath(filePath, 'en.json') // Edit here for what language to use
  let strings = fs.readFileSync(stringPath, {encoding: 'utf8'}).replace(/\r/, '')
  let parsedStrings: Record<string, string> = JSON.parse(strings)
  fs.readdirSync(filePath).forEach((file: string) => syncTextStrings(filePath, file, parsedStrings, parsed_default))

  // fix swedish TextStrings formatting
  let boll = JSON.stringify(parsedStrings, undefined, 2)
  fs.unlinkSync(stringPath)
  return fs.writeFileSync(stringPath, strings, {encoding: 'utf8'})
}

let syncTextStrings = (
  filePath: string,
  file: string,
  lang: Record<string, string>,
  _default: Record<string, string>
) => {
  if (file.indexOf('.json') === -1) return
  if (file === 'default.json') return
  if (file === 'lang.json') return
  let path = getPath(filePath, file)
  let textStrings = fs.readFileSync(path, {encoding: 'utf8'}).replace(/\r/, '')
  let parsedStrings: Record<string, string> = JSON.parse(textStrings)
  // Delete Support
  Object.keys({...parsedStrings})
    .filter((key: string) => lang[key] === undefined)
    .forEach((key: string) => {
      delete parsedStrings[key]
      console.log(`Deleting key: '${key}' from ${filePath}/${file}`)
    })

  // Craete Support
  let newTextStrings = {...lang}

  switch (true) {
    case file.includes('sv.json'):
    case file.includes('en.json'):
      Object.keys(newTextStrings).forEach((key) => (newTextStrings[key] = `PLZ_CHECK ${lang[key]}`))
      break
    default:
      Object.keys(newTextStrings).forEach((key) => (newTextStrings[key] = `PLZ_TRANSLATE ${lang[key]}`))
  }

  newTextStrings = {...newTextStrings, ...parsedStrings}
  Object.keys(_default).forEach((key) => delete parsedStrings[key])
  let newTextStringsLength = Object.keys(newTextStrings).length
  let TextStringsLength = Object.keys(textStrings).length
  let delta = newTextStringsLength - TextStringsLength

  if (delta > 0) console.log(`Updated ${delta} textstrings in ${filePath}`)

  // Save changes
  let stringsToSave = JSON.stringify(newTextStrings, undefined, 2)
  fs.unlinkSync(path)
  fs.writeFileSync(path, stringsToSave, {encoding: 'utf8'})
}

templateDir.forEach((filePath) => {
  return runAddNewTranslations(filePath)
})
