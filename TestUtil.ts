
const IgnoredTextStrings = require('./IgnoredTextStrings.json')
import {supportedLanguageCodes} from './index'
import defaultTextStrings from './text_strings/client/default.json'
const fs = require('fs')
import * as path from 'path'

export const serverTextStringNames = [
  'task_group_name', 'task_group_description',
  'task_template_title', 'task_template_description', 'goal_group_name',
  'goal_group_description', 'goal_template_title',
  'goal_template_description'
]
export const PLZ_CHECK = 'PLZ_CHECK'
export const PLZ_TRANSLATE = 'PLZ_TRANSLATE'
export const PLZ_COPY = 'PLZ_COPY'

const annaTranslationTag = 'ANNA'
const emmaTranslationTag = 'EMMA'
const ignoredKeys = ['currency', 'currencyMinus', 'currencyPlus', 'aint_no_money_desc', 'no_money_pig_parent_text']

export const compareKeys = (firstLang: {[key: string]: string}, secondLang: {[key: string]: string}, firstLangName: string = '', secondLangName: string = '') => {
  const keys = Object.keys(firstLang)
  const errorMessages: Array<string> = []

  keys.forEach(key => {
    if ((secondLang[key] === undefined || secondLang[key] === '') && !IgnoredTextStrings.includes(key)) {
      errorMessages.push(`Lang: '${secondLangName}', Missing key: '${key}'`)
      return true
    }

    if (secondLang[key].indexOf('$ ') !== -1)
      errorMessages.push(`Lang: '${firstLangName}', Key: '${key}' has a $ and whitespace, do you mean $s, $d or $c ?`)

    if ((secondLang[key] === 'PLZ_CHECK' && firstLang[key] === 'PLZ_CHECK') && firstLangName !== 'sv' && secondLangName === 'sv') return true
    return true
  })

  expect(errorMessages).toEqual([])
}

export const findDuplicateKeyValues = (firstLang: {[key: string]: string}, secondLang: {[key: string]: string}, firstLangName: string = '', secondLangName: string = '') => {
  const keys = Object.keys(firstLang)
  const errorMessages: Array<string> = []
  let defaults: {[key: string]: string} = defaultTextStrings
  keys.forEach(key => {
    if (secondLang[key] === firstLang[key] && firstLangName === 'en' && secondLangName === 'sv' && !IgnoredTextStrings.includes(key) && !defaults[key] && supportedLanguageCodes.includes(firstLangName))
      errorMessages.push(`Lang: '${secondLang[key]}', Key: '${key}' is equal to: '${firstLang[key]}'`)

    return true
  })

  expect(errorMessages).toEqual([])
}

export const findDuplicateJSONKeys = (fileText: Array <string>, errors: Array<string>) => {
  const keys = fileText.map(line => line.split(':')[0]).sort()
  for (let i = 0; i < keys.length - 1; i++)
    if (keys[i + 1] === keys[i]) errors.push(keys[i])
  return errors
}

export const compareDollarSigns = (firstLang: {[key: string]: string}, secondLang: {[key: string]: string}, firstLangName: string = '', secondLangName: string = '', template: string = '$') => {
  const keys = Object.keys(firstLang)
  const errorMessages: Array<string> = []
  keys.forEach(key => {
    if (!IgnoredTextStrings.includes(key)) {
      if (firstLang[key] === undefined) return true
      if (secondLang[key] === undefined) return true
      if (!ignoredKeys.includes(key) && firstLang[key].split(template).length !== secondLang[key].split(template).length)
        errorMessages.push(`Lang: '${secondLangName}', Key: '${key}' has not the same amount of ${template} signs as text string in ${firstLangName} lang, plz check`)
    }
    return true
  })

  expect(errorMessages).toEqual([])
}

const testCompareKeysWithinTextString = (textString1: string, textString2: string, textStringName: string) => {
  let keys1 = textString1.match(/\{(.*?)\}/g) || []
  let keys2 = textString2.match(/\{(.*?)\}/g) || []

  // remove :possessive
  keys1 = keys1.map((key) => key.replace(':possessive', ''))
  keys2 = keys2.map((key) => key.replace(':possessive', ''))

  const errorMessages = keys1.map(key1 => {
    if (key1.indexOf(' ') !== -1)
      return undefined

    if (!keys2.includes(key1))
      return `Problem in Text string: ${textStringName}. Cant find {${key1}} in: '${textString2}, {${key1}} key was found in: '${textString1}'`

    return undefined
  })

  const errorMessage = errorMessages.find(errorMessage => errorMessage !== undefined)

  return errorMessage
}

export const compareKeysWithinTextStrings = (firstLang: { [key: string]: string }, secondLang: {[key: string]: string}, firstLangName: string = '', secondLangName: string = '') => {
  const keys = Object.keys(firstLang)
  keys.forEach(key => {
    const errorMessage = testCompareKeysWithinTextString(firstLang[key], secondLang[key], key)
    expect(errorMessage).toBeUndefined()
  })
}

export const checkTemplateLenght = (langs: {[key: string]: string}, langName: string = '') => {
  const keys = Object.keys(langs)
  const patternTemplates = 'template_title'
  const errorMessages: Array<string> = []
  keys.forEach(key => {
    if (key.includes(patternTemplates) && !IgnoredTextStrings.includes(key)) {
      langs[key] = langs[key].replace(PLZ_TRANSLATE, '').replace(PLZ_CHECK, '')

      if (langs[key].length > 30)
        errorMessages.push(`Lang: '${langName}', String: '${key}' exeeds 30 characters '${langs[key].length}'`)
    }
  })
  expect(errorMessages).toEqual([])
}

export const checkTemplateRule = (langs: {[key: string]: string}, langName: string = '') => {
  const keys = Object.keys(langs)
  const errorMessages: Array<string> = []
  serverTextStringNames.forEach((serverSring) => {
    keys.forEach((key) => {
      if (!IgnoredTextStrings.includes(key)) {
        // constant false shitty tests
        // if (!key.indexOf(serverSring) === -1) {
          // errorMessages.push(`Lang: '${langName}', Key: '${key}`)
        // }
      }
    })
  })
  expect(errorMessages).toEqual([])
}

export const checkBirgittaInconsistencies = (firstLang: { [key: string]: string }, secondLang: {[key: string]: string}, firstLangName: string = '', secondLangName: string = '') => {
  const keys = Object.keys(firstLang)
  const errorMessages: Array<string> = []

  keys.forEach(key => {
    // if (firstLang[key].includes(PLZ_CHECK)) errorMessages.push(`lang: ${firstLangName} text_id:${key} contains ${PLZ_CHECK}`)
    // if (firstLang[key].startsWith(' ')) errorMessages.push(`lang: ${firstLangName} text_id:${key}  starts with a space`)
    if (firstLangName === 'en' && firstLang[key].includes(PLZ_TRANSLATE)) errorMessages.push(`lang: ${firstLangName} text_id:${key} contains ${PLZ_TRANSLATE}`)
  })

  return errorMessages
}

export const checkStringLenght = (firstLang: { [key: string]: string }, secondLang: {[key: string]: string}, firstLangName: string, secondLangName: string): Array < Object > => {
  const keys = Object.keys(firstLang)

  const longTextWarning: Array<string> = []
  const longTextSlackData: Array<object> = []
  keys.forEach(key => {
    if (firstLangName === 'en' && secondLangName !== 'en') {
      if (secondLang[key].includes(PLZ_TRANSLATE)) secondLang[key] = secondLang[key].replace(PLZ_TRANSLATE, '')
      const differencePerc = (firstLang[key].length - secondLang[key].length) / 100

      if (Math.abs(differencePerc) >= 0.20) {
        const actIncr = Math.abs(differencePerc)
        longTextWarning.push(`Lang: ${firstLangName}, Key: ${key} is 20% longer than: ${secondLangName} -> ${actIncr}`)
        longTextSlackData.push({lang: firstLangName, title: key, secLang: secondLangName, value: differencePerc, short: true})
      }
    }
    return true
  })

  if (longTextWarning.length > 0)
    // eslint-disable-next-line
    console.warn(longTextWarning)

  return longTextSlackData
}

export const countTranslationTemplates = (lang: {[key: string]: string}, langName: string): object => {
  const keys = Object.keys(lang)

  const countUsesCheck = []
  const countUsesTranslate = []
  keys.forEach(key => {
    if (lang[key].includes(PLZ_TRANSLATE))
      countUsesTranslate.push(`Lang: ${langName}, Key: ${key}`)

    if (lang[key].includes(PLZ_CHECK))
      countUsesCheck.push(`Lang: ${langName}, Key: ${key}`)
  })
  return {lang: langName, countTranslate: countUsesTranslate.length, countCheck: countUsesCheck.length}
}

export const stringLenghtStatistic = (firstLang: {[key: string]: string}, secondLang: {[key: string]: string}, firstLangName: string, secondLangName: string): object => {
  const keys = Object.keys(firstLang)

  const longTextWarning: Array<string> = []
  const longTextSlackData: Array<object> = []
  let veryLongText = false
  keys.forEach(key => {
    if (firstLangName === 'en' && secondLangName !== 'en') {
      if (secondLang[key].includes(PLZ_TRANSLATE)) secondLang[key] = secondLang[key].replace(PLZ_TRANSLATE, '')
      let differencePerc = (firstLang[key].length - secondLang[key].length) / 100

      if (Math.abs(differencePerc) >= 0.25) {
        if (Math.abs(differencePerc) >= 0.80) veryLongText = true
        differencePerc = differencePerc * 100
        const actIncr = Math.abs(differencePerc) + '%'
        longTextWarning.push(`Lang: ${firstLangName}, Key: ${key} is 20% longer than: ${secondLangName} -> ${actIncr}`)
        longTextSlackData.push({title: key, value: actIncr, short: true})
      }
    }
  })
  return {data: longTextSlackData, status: veryLongText}
}

export const stringTranslationTags = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)
  let numberPlzCheck = 0
  let numberPlzTransalte = 0
  let numberAnnaTranslation = 0
  let numberEmmaStrings = 0
  keys.forEach(key => {
    if (languageCode) {
      if (lang[key].includes(PLZ_CHECK)) numberPlzCheck++
      if (lang[key].includes(PLZ_TRANSLATE)) numberPlzTransalte++
      if (lang[key].includes(annaTranslationTag)) numberAnnaTranslation++
      if (lang[key].includes(emmaTranslationTag)) numberEmmaStrings++
    }
  })
  return {plzCheck: numberPlzCheck, plzTrans: numberPlzTransalte, lang: languageCode, path: textStringsType, annaTag: numberAnnaTranslation, emmaTag: numberEmmaStrings}
}

export const searchPlzTranslate = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): { data: Array<{key: string, lang: string, path: string}>, plzTrans: number} => {
  const keys = Object.keys(lang)
  const arrayPlzTranslate: Array<{key: string, lang: string, path: string}> = []
  let numberPlzTransalte = 0
  keys.forEach(key => {
    if (languageCode)
      if (lang[key].includes(PLZ_TRANSLATE)) {
        numberPlzTransalte++
        arrayPlzTranslate.push({key: key, lang: languageCode, path: textStringsType})
      }
  })
  return {data: arrayPlzTranslate, plzTrans: numberPlzTransalte}
}

export const searchPlzCopy = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)

  const arrayPlzCopy: Array<Object> = []

  let numberPlzCopy = 0
  keys.forEach(key => {
    if (languageCode)
      if (lang[key].includes(PLZ_COPY)) {
        numberPlzCopy++
        arrayPlzCopy.push({key: key, lang: languageCode, path: textStringsType})
      }
  })
  return {data: arrayPlzCopy, plzCopy: numberPlzCopy}
}
export const searchBrokenPlzCopy = (lang: {[key: string]: string} , languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)

  const arrayPlzCopy: Array<object> = []

  let numberBrokenPlzCopy = 0
  keys.forEach(key => {
    if (languageCode)
      if ((lang[key].indexOf('PLZ') !== -1 || lang[key].indexOf('COPY') !== -1) && (lang[key].indexOf('TRANSLATE') === -1 && lang[key].indexOf('CHECK') === -1)) {
        if (!lang[key].includes(PLZ_COPY)) {
          numberBrokenPlzCopy++
          arrayPlzCopy.push({key: key, lang: languageCode, path: textStringsType})
        }
      }
  })
  return {data: arrayPlzCopy, brokenPLZCopy: numberBrokenPlzCopy}
}

export const searchBrokenPlzTranslate = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)

  const arrayPlzTranslate: Array<object> = []

  let numberBrokenPlzTranslate = 0
  keys.forEach(key => {
    if (languageCode)
      if ((lang[key].indexOf('PLZ') !== -1 || lang[key].indexOf('TRANSLATE') !== -1) && (lang[key].indexOf('COPY') === -1 && lang[key].indexOf('CHECK') === -1)) {
        if (!lang[key].includes(PLZ_TRANSLATE)) {
          numberBrokenPlzTranslate++
          arrayPlzTranslate.push({key: key, lang: languageCode, path: textStringsType})
        }
      }
  })
  return {data: arrayPlzTranslate, brokenPLZTranslate: numberBrokenPlzTranslate}
}

export const searchBrokenPlzCheck = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)

  const arrayPlzCheck: Array<object> = []

  let numberBrokenPlzCheck = 0
  keys.forEach(key => {
    if (languageCode)
      if ((lang[key].indexOf('PLZ') !== -1 || lang[key].indexOf('CHECK') !== -1) && (lang[key].indexOf('COPY') === -1 && lang[key].indexOf('TRANSLATE') === -1)) {
        if (!lang[key].includes(PLZ_CHECK)) {
          numberBrokenPlzCheck++
          arrayPlzCheck.push({key: key, lang: languageCode, path: textStringsType})
        }
      }
  })
  return {data: arrayPlzCheck, brokenPLZCheck: numberBrokenPlzCheck}
}

export const checkStringEmptySpace = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)

  const arrayEmptySpace: Array<object> = []

  let numberEmptySpace = 0
  keys.forEach(key => {
    if (languageCode)
      if (lang[key].startsWith(' ')) {
        numberEmptySpace++
        arrayEmptySpace.push({key: key, lang: languageCode, path: textStringsType})
      }
  })
  return {data: arrayEmptySpace, countStartsEmptySpace: numberEmptySpace}
}
export const searchBreakingSymbols = (lang: {[key: string]: string}, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)
  const arrayBreakingSymbols: Array<object> = []
  let numberBreakingSymbols = 0
  keys.forEach(key => {
    if (languageCode)
      if (lang[key].includes('&#')) {
        numberBreakingSymbols++
        arrayBreakingSymbols.push({key: key, lang: languageCode, path: textStringsType})
      }
  })
  return {data: arrayBreakingSymbols, count: numberBreakingSymbols}
}
export const checkUpperCaseLetters = (lang: object, languageCode: string, textStringsType: string): object => {
  const keys = Object.keys(lang)
  const arrayUpperCase: Array<object> = []
  let numberUpperCaseKeys = 0
  keys.forEach(key => {
    if (hasUpperCase(key)) {
      numberUpperCaseKeys++
      arrayUpperCase.push({key: key, lang: languageCode, path: textStringsType})
    }
  })
  return {data: arrayUpperCase, countUpperCase: numberUpperCaseKeys}
}

export const compareKeysForLanguages = (languages: Array<string>, getStrings: (arg0: string) => {[key: string]: string}, languageCodes: Array<string>) => {
  languages.forEach(lang1 => {
    languages.forEach(lang2 => {
      compareKeys(getStrings(lang1), getStrings(lang2), lang1, lang2)
      if (!languageCodes.includes(lang1)) findDuplicateKeyValues(getStrings(lang1), getStrings(lang2), lang1, lang2)
    })
  })
}

export const findDuplicateJSONKeysInFolders = (dirPath: string, filterDirectories: (arg0: string) => boolean) => {
  let dirs = fs.readdirSync(path.join(__dirname, dirPath))
  let allStrings: Array<string> = []
  dirs = dirs.filter(filterDirectories)
  dirs.map((file: string) => {
    if (file === '.DS_Store') return
    const blaj = fs.readFileSync(path.join(__dirname, `${dirPath}/${file}/en.json`), {encoding: 'utf8'}).split('\n')
    allStrings = allStrings.concat(blaj)
  })
  const ignorePattern = ['', '{', '}']
  allStrings = allStrings.filter((text) => ignorePattern.indexOf(text) === -1)
  const errors = findDuplicateJSONKeys(allStrings, [])
  expect(errors).toEqual([])
}

const hasUpperCase = (str: string) => {
  return str.toLowerCase() !== str
}

export const searchHtml = (lang: {[key: string]: string}, languageCode: string, textStringsType: string) => {
  // eslint-disable-next-line no-useless-escape
  const isHtml = new RegExp('<[a-z\/][\s\S]*>')
  const keys = Object.keys(lang)
  const arrayContainsHtml: Array<object> = []
  let numberHtmlStrings = 0
  keys.forEach(key => {
    if (languageCode)
      if (lang[key].match(isHtml)) {
        numberHtmlStrings++
        arrayContainsHtml.push({key: key, lang: languageCode, path: textStringsType})
      }
  })
  return {data: arrayContainsHtml, countHtmlStrings: numberHtmlStrings}
}
