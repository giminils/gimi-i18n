
import {languageCodes, languageCodesForTranslation} from '../index'
import {searchPlzTranslate, searchBreakingSymbols, checkUpperCaseLetters, searchPlzCopy, checkStringEmptySpace} from '../TestUtil'
let stringTagData = []
let jsonDataTranslate = []
let jsonDataCopy = []

let jsonBreakingSumbols = []
let jsonArrayUpperCase = []
let jsonArrayEmptySpaces = []

let textStringsTypes = ['server', 'templates', 'client', 'share-image-generator', 'gimi-web-redux', 'bot'] //  'gimi-web',

let textStrings = {}
textStringsTypes.forEach(textStringsType => {
  textStrings[textStringsType] = {}
})
textStringsTypes.forEach(textStringsType => {
  let languageCodesHolder = languageCodes
  if (textStringsType === 'client') languageCodesHolder = languageCodes
  if (textStringsType === 'gimi-web-redux') languageCodesHolder = ['sv', 'en']
  if (textStringsType === 'gimi-web') languageCodesHolder = ['no', 'de', 'fi', 'fr', 'da', 'nl', 'it', 'es', 'sv', 'en']
  if (textStringsType !== 'gimi-web' && textStringsType !== 'gimi-web-redux' &&
  textStringsType !== 'client') languageCodesHolder = languageCodesForTranslation

  languageCodesHolder.forEach(lang => {
    try {
      textStrings[textStringsType][lang] = require(`../text_strings/${textStringsType}/${lang}`)
    } catch (e) { expect(`Cant parse ${textStringsType}/${lang} ${e.message}`).toEqual('') }
  })
})
// server and templates string data
textStringsTypes.forEach(textStringsType => {
  let languageCodesHolder = languageCodes
  if (textStringsType === 'client') languageCodesHolder = languageCodes
  if (textStringsType === 'gimi-web-redux') languageCodesHolder = ['sv', 'en']
  if (textStringsType === 'gimi-web') languageCodesHolder = ['no', 'de', 'fi', 'fr', 'da', 'nl', 'it', 'es', 'sv', 'en']
  if (textStringsType !== 'gimi-web' &&
    textStringsType !== 'gimi-web-redux' &&
    textStringsType !== 'client') languageCodesHolder = languageCodesForTranslation

  languageCodesHolder.forEach(languageCode => {
    if (languageCode === 'sv' || languageCode === 'en')
      stringTagData.push(searchPlzTranslate(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(searchPlzCopy(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(searchBreakingSymbols(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(checkStringEmptySpace(textStrings[textStringsType][languageCode], languageCode, textStringsType))

    if (languageCode === 'en' && textStringsType !== 'gimi-web' && textStringsType !== 'gimi-web-redux' && textStringsType !== 'server')
      stringTagData.push(checkUpperCaseLetters(textStrings[textStringsType][languageCode], languageCode, textStringsType))
  })
})

// get plzTransalte
stringTagData.forEach(data => {
  if (data) {
    if (data.plzTrans > 0) {
      const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
      jsonDataTranslate.push(foo)
    }
    if (data.plzCopy > 0) {
      const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
      jsonDataCopy.push(foo)
    }
    if (data.count > 0) {
      const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
      jsonBreakingSumbols.push(foo)
    }
    if (data.countUpperCase > 0) {
      const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
      jsonArrayUpperCase.push(foo)
    }
    if (data.countStartsEmptySpace > 0) {
      const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
      jsonArrayEmptySpaces.push(foo)
    }
  }
})

it('it should not have breaking sumbols', () => {
  expect(jsonBreakingSumbols).toEqual([])
})

it('it should not have PLZ_COPY', () => {
  expect(jsonDataCopy).toEqual([])
})

it('it should not have PLZ_TRANSLATE in sv and en', () => {
  expect(jsonDataTranslate).toEqual([])
})

it('it should not have uppercase in string keys', () => {
  expect(jsonArrayUpperCase).toEqual([])
})

xit('it should not start with empty space', () => {
  expect(jsonArrayEmptySpaces).toEqual([])
})
