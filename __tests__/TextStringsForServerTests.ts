/* eslint no-console:0 */
import {
  compareKeys,
  compareKeysWithinTextStrings,
  checkTemplateLenght,
  checkBirgittaInconsistencies,
  checkTemplateRule
} from '../TestUtil'
import {languageCodes} from '..'
let langCodes = languageCodes
jest.disableAutomock()

let textStringsTypes = ['server', 'templates', 'share-image-generator']

let textStrings: {[key: string]: {[key: string]: Record<string, string>}} = {}
textStringsTypes.forEach((textStringsType) => {
  textStrings[textStringsType] = {}
})
textStringsTypes.forEach((textStringsType) => {
  langCodes.forEach((lang: string) => {
    textStrings[textStringsType][lang] = require(`../text_strings/${textStringsType}/${lang}`)
  })
})

textStringsTypes.forEach((textStringsType) => {
  describe(`${textStringsType} TextStrings`, () => {
    langCodes.forEach((lang: string) => {
      test(`it should return Text Strings for ${textStringsType} ${lang}`, () => {
        expect(textStrings[textStringsType][lang]).not.toBeUndefined()
      })

      test('all textstrings should have a equivalent string in all other languages', () => {
        langCodes.forEach((lang2: string) =>
          compareKeys(textStrings[textStringsType][lang], textStrings[textStringsType][lang2], lang, lang2)
        )
        langCodes.forEach((lang2: string) =>
          compareKeysWithinTextStrings(
            textStrings[textStringsType][lang],
            textStrings[textStringsType][lang2],
            lang,
            lang2
          )
        )
        expect([]).toEqual([])
      })

      test('should not have any birgitta inconsistencies', () => {
        let errorMessages: Record<string, string> = {}
        langCodes.forEach((lang2: string) => {
          let errorArray = checkBirgittaInconsistencies(
            textStrings[textStringsType][lang],
            textStrings[textStringsType][lang2],
            lang,
            lang2
          )
          errorArray.forEach((key) => {
            errorMessages[key] = ''
          })
        })
        if (Object.keys(errorMessages).length > 0) console.warn(JSON.stringify(errorMessages, undefined, 2))
        expect([]).toEqual([])
      })
      test('should not have _parent when having _child', () => {
        let errorArrayParentChild = []
        let objectKeys = Object.keys(textStrings[textStringsType][lang])
        objectKeys.forEach((key) => {
          let currentLangKey = key
          if (currentLangKey && currentLangKey.includes('_parent')) {
            let currentLangKeyReverse = currentLangKey.replace('_parent', '_child')
            if (!objectKeys.includes(currentLangKeyReverse)) {
              errorArrayParentChild.push({error: `${key} is missing child version`})
              expect([]).toEqual([])
            }
          }
        })
      })
      test('should not have _child when having _parent', () => {
        let errorArrayParentChild = []
        let objectKeys = Object.keys(textStrings[textStringsType][lang])
        objectKeys.forEach((key) => {
          let currentLangKey = key
          if (currentLangKey && currentLangKey.includes('_child')) {
            let currentLangKeyReverse = currentLangKey.replace('_child', '_parent')
            if (!objectKeys.includes(currentLangKeyReverse)) {
              errorArrayParentChild.push({error: `${key} is missing parent version`})
              expect([]).toEqual([])
            }
          }
        })
      })
      test.skip('all task templates should not exceed 30 chars', () => {
        // TODO add slack chanell omit PLZ_CHECK and PLZ_TRANSLATE
        checkTemplateLenght(textStrings[textStringsType][lang], lang)
      })

      if (textStringsType === 'templates')
        test.skip('Should include template rule', () => {
          checkTemplateRule(textStrings[textStringsType][lang], lang)
          expect([]).toEqual([])
        })
    })
  })
})
