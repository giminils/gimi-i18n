import {languageCodes, languageCodesForTranslation, gimiWebLanguageCodes} from '../index'
import {
  searchBreakingSymbols,
  checkUpperCaseLetters,
  searchPlzCopy,
  checkStringEmptySpace,
  searchBrokenPlzCopy,
  searchBrokenPlzTranslate,
  searchHtml
} from '../TestUtil'

type DataStruct = {key: string; lang: string; path: string}

let stringTagData: Array<{
  data: Array<DataStruct>
  count?: number | undefined
  plzCopy?: number | undefined
  countUpperCase?: number | undefined
  countStartsEmptySpace?: number | undefined
  brokenPLZCopy?: number | undefined
  brokenPLZTranslate?: number | undefined
  countHtmlStrings?: number | undefined
}> = []
let jsonDataCopy: Array<object> = []
let jsonDataBrokenCopy: Array<object> = []
let jsonDataBrokenTranslate: Array<object> = []
let jsonBreakingSumbols: Array<object> = []
let jsonArrayUpperCase: Array<object> = []
let jsonArrayEmptySpaces: Array<object> = []
let jsonDataHtml: Array<object> = []

let textStringsTypes: Array<string> = ['server', 'templates', 'client', 'share-image-generator', 'bot', 'gimi-web']
let textStrings: {[key: string]: {[key: string]: Record<string, string>}} = {}
textStringsTypes.forEach((textStringsType) => {
  textStrings[textStringsType] = {}
})
describe('should be able to find files', () => {
  textStringsTypes.forEach((textStringsType) => {
    let languageCodesHolder = languageCodes
    if (textStringsType === 'client') languageCodesHolder = languageCodes
    if (textStringsType === 'gimi-web') languageCodesHolder = gimiWebLanguageCodes
    if (textStringsType !== 'gimi-web' && textStringsType !== 'client')
      languageCodesHolder = languageCodesForTranslation
    languageCodesHolder.forEach((lang) => {
      try {
        textStrings[textStringsType][lang] = require(`../text_strings/${textStringsType}/${lang}`)
      } catch (err) {
        const e = err as Error
        test('should not have not defined strings', () => {
          expect(`Cant parse ${textStringsType}/${lang} ${e.message}`).toEqual('')
        })
      }
    })
  })
})
// server and templates string data
textStringsTypes.forEach((textStringsType) => {
  let languageCodesHolder = languageCodes
  if (textStringsType === 'client') languageCodesHolder = languageCodes
  if (textStringsType === 'gimi-web') languageCodesHolder = gimiWebLanguageCodes
  if (textStringsType !== 'gimi-web' && textStringsType !== 'client') languageCodesHolder = languageCodesForTranslation

  languageCodesHolder.forEach((languageCode) => {
    stringTagData.push(searchPlzCopy(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(searchBreakingSymbols(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(checkStringEmptySpace(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(searchBrokenPlzCopy(textStrings[textStringsType][languageCode], languageCode, textStringsType))
    stringTagData.push(
      searchBrokenPlzTranslate(textStrings[textStringsType][languageCode], languageCode, textStringsType)
    )
    stringTagData.push(searchHtml(textStrings[textStringsType][languageCode], languageCode, textStringsType))

    if (languageCode === 'en' && textStringsType !== 'gimi-web' && textStringsType !== 'server')
      stringTagData.push(
        checkUpperCaseLetters(textStrings[textStringsType][languageCode], languageCode, textStringsType)
      )
  })
})

stringTagData.forEach((data) => {
  if (!data) return
  if (!!data.plzCopy && data.plzCopy > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonDataCopy.push(foo)
  }
  if (!!data.count && data.count > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonBreakingSumbols.push(foo)
  }
  if (!!data.countUpperCase && data.countUpperCase > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonArrayUpperCase.push(foo)
  }
  if (!!data.countStartsEmptySpace && data.countStartsEmptySpace > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonArrayEmptySpaces.push(foo)
  }
  if (!!data.brokenPLZCopy && data.brokenPLZCopy > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonDataBrokenCopy.push(foo)
  }
  if (!!data.brokenPLZTranslate && data.brokenPLZTranslate > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonDataBrokenTranslate.push(foo)
  }
  if (!!data.countHtmlStrings && data.countHtmlStrings > 0) {
    const foo = data.data.map(({key, lang, path}) => `key: ${key}, path: ${path}, lang: ${lang}`)
    jsonDataHtml.push(foo)
  }
})

test('it should not have breaking sumbols', () => {
  expect(jsonBreakingSumbols).toEqual([])
})

test('it should not have PLZ_COPY', () => {
  expect(jsonDataCopy).toEqual([])
})

test('it should not have broken PLZ_COPY', () => {
  expect(jsonDataBrokenCopy).toEqual([])
})

test('it should not have broken PLZ_TRANSLATE', () => {
  expect(jsonDataBrokenTranslate).toEqual([])
})

test('it should not have uppercase in string keys', () => {
  expect(jsonArrayUpperCase).toEqual([])
})

it.skip('it should not start with empty space', () => {
  expect(jsonArrayEmptySpaces).toEqual([])
})

test('it should not contain html', () => {
  expect(jsonDataHtml).toEqual([])
})
