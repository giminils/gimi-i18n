// checks if langKeys are pairing with new i18n structure

const fs = require('fs')

const enJson = require('../../../i18n/text_strings/client_new_structure/en.json')
const foldersToCheck = ['../components', '../hocs', '../libs', '../reducers']

const getKeyMap = (json, path, keys = {}) => {
  Object.keys(json).forEach(key => {
    if (typeof json[key] === 'string') {
      keys[key] = !path ? key : `${path}.${key}`
      return
    }
    getKeyMap(json[key], key, keys)
  })
  return keys
}

const keyMap = getKeyMap(enJson)
let hasError = false

const findLangKeysInFile = (filePath, langKey, fullLangKey) => {
  const fileString = fs.readFileSync(filePath, {encoding: 'utf8'})
  const matches = fileString.match(new RegExp(`'\w*.{0,1}${langKey}'`, 'g'))
  if (!matches) return
  matches.forEach(el => {
    const res = el.match(fullLangKey)
    if (!res) {
      console.log(`${filePath}: \`${el}\` should be \`${fullLangKey}\``)
      hasError = true
    }
  })
}

const checkFile = (filePath, keyMap) => {
  Object.keys(keyMap).forEach(key => {
    findLangKeysInFile(filePath, key, keyMap[key])
  })
}

const checkFolder = (folderPath, keyMap) => {
  fs.readdirSync(folderPath).forEach(filePath => {
    if (!filePath.match('.js')) return
    checkFile(`${folderPath}/${filePath}`, keyMap)
  })
}

foldersToCheck.forEach(folderPath => {
  checkFolder(folderPath, keyMap)
  if (!hasError) console.log('No errors!')
})
