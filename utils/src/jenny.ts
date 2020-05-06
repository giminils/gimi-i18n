/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const fs1 = require('fs')
let keysToIgnore = [
  'child_about_data_tracking_title',
  'child_about_data_tracking_content',
  'parent_about_data_tracking_title',
  'parent_about_data_tracking_content',
  'child_advice_title',
  'child_advice_content',
  'parent_advice_title',
  'parent_advice_content',
  'data_knowledge_item_text',
  'knowledge_child_item_content',
  'knowledge_child_item_header',
  'data_tracking_assignment_threshold',
  '_permissions_denied',
  'vp_help_page_title',
  'vp_help_page_content',
  'transactions_help_page_title',
  'transactions_help_page_content',
  'task_editor_title_input_hint_example',
  'task_status',
  'category_name_1',
  'category_name_2',
  'category_name_3',
  'category_name_4',
  'category_name_5',
  'category_name_6',
  'category_name_7',
  'category_name_8',
  'category_name_9',
  'category_name_10',
  'category_name_11',
  'category_name_12',
  'category_name_13',
  'category_name_14',
  'category_name_15',
  'category_name_16',
  'category_name_17',
  'category_name_18',
  'category_name_19',
  'category_name_20',
  'category_name_21',
  'category_name_22',
  'category_name_23',
  'category_name_24',
  'category_name_25',
  'category_name_26',
  'category_name_27',
  'category_name_28',
  'category_name_29',
  'category_name_30',
  'category_name_31',
  'category_name_32',
  'category_name_33',
  'category_name_34',
  'category_name_35',
  'category_name_36',
  'category_name_37',
  'category_name_38',
  'category_name_39',
  'category_name_40',
  'category_name_41',
  'category_name_42',
  'category_name_43',
  'category_name_44',
  'category_name_45',
  'category_name_46',
  'category_name_47',
  'category_name_48',
  'permissions_contacts',
  'permissions_camera',
  'permissions_photo_library',
  'permissions_notification',
  'camera_permissions_restricted',
  'photo_permissions_restricted',
  'contacts_permissions_restricted',
  'notification_permissions_restricted'
]

let keysThatAreNotUsed: Array<string> = []
let keysToDelete: Array<string> = []
let removeMatchedKeys: Array<string> = []
let rootDir = '..'
let dirsToCheck = ['components', 'libs', 'hocs', 'i18n', 'config', 'reducers', 'consts']
let textStringsSvFilePath = './text_strings/client/sv.json'
let storeUnUsedTextStrings = './cleanup_strings/unusedLangkeys.json'
let TextStrings = fs1.readFileSync(textStringsSvFilePath, {encoding: 'utf8'})
let parsedTextStrings: {[key: string]: string} = JSON.parse(TextStrings)
let foundKeys = 0
let matchedKeys = 0
let ignoredKeys = 0

let checkFile = (file: string, key: string) => {
  let fileContents = fs1.readFileSync(file, {encoding: 'utf8'})

  let isOk = false

  if (fileContents.indexOf(key) !== -1) isOk = true

  if (key.includes('kid_faq_section_')) isOk = true
  if (key.indexOf('_parent') !== -1)
    if (fileContents.indexOf(key.split('_parent')[0]) !== -1) isOk = true

  if (key.indexOf('_child') !== -1)
    if (fileContents.indexOf(key.split('_child')[0]) !== -1) isOk = true

  return isOk
}
let checkIfTextStringIsObsolete = (key: string) => {
  let isOk = false
  dirsToCheck.forEach((dirName) => {
    let dir = `${rootDir}/${dirName}/`
    let files = fs1.readdirSync(dir)
    files.forEach((file: string) => {
      try {
        file = `${dir}/${file}`
        // console.log(`Reading file: "${file}"`)
        if (checkFile(file, key))
          isOk = true
      } catch (e) {
        // console.log(`Failed reading file: "${file}"`)
        // console.log(e.message)
      }
    })
  })

  // text string is probably obsolete
  if (!isOk)
    if (keysToIgnore.some(ignoredKey => key.indexOf(ignoredKey) !== -1)) { ignoredKeys++ } else {
      foundKeys++
      keysToDelete.push(key)
      console.log(`${key}\t\t\t\t\t\t${parsedTextStrings[key].replace('\n', '')}`)
    }
}

let checkIfIsStoredInUnUsed = (key: string) => {
  let isOk = true
  keysToDelete.forEach((notUsedKey) => {
   if (notUsedKey === key) isOk = false
  })
  // text string is probably obsolete
  if (isOk)
   if (keysToIgnore.some(ignoredKey => key.indexOf(ignoredKey) !== -1)) { ignoredKeys++ } else {
      removeMatchedKeys.push(key)
      console.log(` string is used \t\t${key}\t\t\t`)
    }
  if (!isOk)
    if (keysToIgnore.some(ignoredKey => key.indexOf(ignoredKey) !== -1)) { ignoredKeys++ } else {
      matchedKeys++
      keysThatAreNotUsed.push(key)
      console.log(`strings is not used \t\t${key}\t\t\t`)
    }
}
console.log('****** Begin Scan ********\n')

Object.keys(parsedTextStrings).forEach(key => checkIfTextStringIsObsolete(key))

console.log('****** Scan Complete ********')
console.log(
  `
  Ignored text_strings: ${ignoredKeys}
  Found text_strings to delete: ${foundKeys}`)
if (process.argv.some(x => x === 'f')) {
  /** ****** Deleting TextStrings *******/
  console.log(`Removing ${foundKeys} text_strings from ${textStringsSvFilePath} ..`)

  keysToDelete.forEach((key) => {
    delete parsedTextStrings[key]
  })

  TextStrings = JSON.stringify(TextStrings, undefined, 2)
  fs1.unlinkSync(textStringsSvFilePath)
  fs1.writeFileSync(textStringsSvFilePath, TextStrings, {encoding: 'utf8'})

  console.log(`Done`)
} else
  console.log(`
  run with f to remove ${foundKeys} text_strings from ${textStringsSvFilePath}
  `)

  if (process.argv.some(x => x === 's')) {
  /** ****** Storing TextStrings that can be matched  to new enviroment *******/
  console.log(`Storing ${foundKeys} text_strings from ${textStringsSvFilePath} to ${textStringsSvFilePath} ..`)
  let storeStrings = fs1.readFileSync(storeUnUsedTextStrings, {encoding: 'utf8'})
  let parsedStoreStrings: {[key: string]: string} = JSON.parse(storeStrings)

  keysToDelete.forEach((key) => {
    parsedStoreStrings[key] = `${parsedTextStrings[key]}`
  })
  let storeStringstoSave = JSON.stringify(parsedStoreStrings, undefined, 2)

  fs1.unlinkSync(storeStringstoSave)
  fs1.writeFileSync(storeStringstoSave, storeStrings, {encoding: 'utf8'})

  console.log(`Done`)
}

if (process.argv.some(x => x === 'm')) {
/** ****** Matching Text strings and removing used strings *******/
  console.log(`Matching text_strings from ${textStringsSvFilePath} to saved strings ${storeUnUsedTextStrings}`)
  let storeStrings = fs1.readFileSync(storeUnUsedTextStrings, {encoding: 'utf8'})
  let parsedStoreStrings: {[key: string]: string} = JSON.parse(storeStrings)
  Object.keys(storeStrings).forEach(key => checkIfIsStoredInUnUsed(key))

  removeMatchedKeys.forEach((key) => {
    // console.log(`remove matched key', ${key}`)
    delete parsedStoreStrings[key]
  })
  let storeStringsToSave = JSON.stringify(storeStrings, undefined, 2)
  fs1.unlinkSync(storeStringsToSave)
  fs1.writeFileSync(storeStringsToSave, storeStrings, {encoding: 'utf8'})

  console.log(`Done`)
} else
  console.log(`
  run with d to remove ${matchedKeys} text_strings from ${storeUnUsedTextStrings}
  `)

if (process.argv.some(x => x === 'd')) {
  /** ****** Deleting TextStrings *******/
  console.log(`Removing ${matchedKeys} text_strings from ${textStringsSvFilePath} ..`)
  let storeStrings = fs1.readFileSync(storeUnUsedTextStrings, {encoding: 'utf8'})
  let parsedStoreStrings: {[key: string]: string} = JSON.parse(storeStrings)
  Object.keys(storeStrings).forEach(key => checkIfIsStoredInUnUsed(key))

  keysThatAreNotUsed.forEach((key) => {
    delete parsedStoreStrings[key]
    delete parsedTextStrings[key]
  })

  storeStrings = JSON.stringify(storeStrings, undefined, 2)
  fs1.unlinkSync(storeUnUsedTextStrings)
  fs1.writeFileSync(storeUnUsedTextStrings, storeStrings, {encoding: 'utf8'})

  TextStrings = JSON.stringify(TextStrings, undefined, 2)
  fs1.unlinkSync(textStringsSvFilePath)
  fs1.writeFileSync(textStringsSvFilePath, TextStrings, {encoding: 'utf8'})
  console.log(`run with f to remove found strings`)
  console.log(`run with s to store found strings`)
  console.log(`run with m match strings found and stored`)
  console.log(`run with d to remove stored strings`)
}

if (process.argv.some(x => x === 'a')) {
  let exec = require('child_process').exec
  let log = (output: string) => console.log(output)
  let execute = (command: string, callback: (message: string) => void) => {
    // eslint-disable-next-line
    exec(command, function (error: () => void, stdout: string, stderr: () => void) {
      callback(stdout)
    })
  }
  execute('git checkout master', console.log)
  execute('npm run jenny s', console.log)
  console.log('jenny stored')
  execute('cd ..', console.log)
  execute('git checkout stage', console.log)
  console.log('stage')
  execute('cd i18n', console.log)
  execute('npm run jenny m', console.log)
  console.log('jenny matched stage')
  execute('cd ..', console.log)
  execute('git checkout dev', console.log)
  console.log('dev')
  execute('cd i18n', console.log)
  execute('npm run jenny m', console.log)
  console.log('jenny matched dev')
  execute('npm run jenny d', console.log)
}
