// checks if langKeys are pairing with new i18n structure
// options:
// --fix: Saves files with correct translation path

const fs = require('fs')

const enJson = require('../../../i18n/text_strings/client_new_structure/en.json')
const foldersToCheck = ['../components', '../hocs', '../libs', '../reducers']
const endMessages = []
const shouldFix = process.argv.filter(el => el === '--fix').length > 0

const getKeyMap = (json, path, keys = {}) => {
  Object.keys(json).forEach(key => {
    if (typeof json[key] === 'string') {
      if (!keys[key]) keys[key] = []
      keys[key].push(!path ? key : `${path}.${key}`)
      return
    }
    getKeyMap(json[key], key, keys)
  })
  return keys
}

const keyMap = getKeyMap(enJson)

const findLangKeysInFile = (filePath, langKey, fullLangKeys): any => {
  const fileString = fs.readFileSync(filePath, {encoding: 'utf8'})
  const matches = fileString.match(new RegExp(`'\w*.{0,1}${langKey}'`, 'g'))
  if (!matches) return
  matches.forEach(el => {
    let didMatch = false
    let i = 0
    while (!didMatch && i < fullLangKeys.length) {
      const res = el.match(fullLangKeys[i])
      if (res) didMatch = true
      i++
    }
    if (didMatch) return undefined
    if (!shouldFix && fullLangKeys.length === 1) return console.log(`\`${filePath}\`: \`${el}\` should be \`'${fullLangKeys[0]}'\``)
    if (!shouldFix) return console.log(`\`${filePath}\`: \`${el}\` should be one of \`${fullLangKeys.join(', ')}\``)
    if (fullLangKeys.length > 1) {
      const message = `Cannot fix \`${filePath}\`: Please manually fix \`${el}\` with one of \`${fullLangKeys.join(', ')}\``
      endMessages.push(message)
      return console.log(message)
    }
    console.log(`Fixing \`${filePath}\`: \`${el}\` -> \`'${fullLangKeys[0]}'\`...`)
    const newFileString = fileString.replace(new RegExp(`'${langKey}'`, 'g'), `'${fullLangKeys[0]}'`)
    return fs.writeFileSync(filePath, newFileString, {encoding: 'utf8'})
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

const checkAllFolders = () => {
  foldersToCheck.forEach(folderPath => {
    checkFolder(folderPath, keyMap)
  })
  console.log(`\n\n\nFinished with ${endMessages.length} warnings.`)
  console.log(endMessages.join('\n'))
}

checkAllFolders()
