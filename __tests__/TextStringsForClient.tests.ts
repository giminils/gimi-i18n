/* eslint no-console:0 */
/* eslint jest/expect-expect:  0 */
import fs from 'fs'
import path from 'path'
import {getText, getTextStrings, languageCodes, supportedLanguageCodes} from '../index'
import {
  checkBirgittaInconsistencies,
  checkStringLength,
  compareDollarSigns,
  compareKeysForLanguages,
  findDuplicateJSONKeys,
  findDuplicateJSONKeysInFolders
} from '../TestUtil'

jest.disableAutomock()
// let flatten = require('flat')

describe('TextStrings', () => {
  it('should not allow duplicate keys in client JSON', () => {
    languageCodes.forEach((lang) => {
      const fileText = fs
        .readFileSync(path.join(__dirname, `../text_strings/client/${lang}.json`), {encoding: 'utf8'})
        // remove any carriage return characters
        .replace(/\r/, '')
        .split('\n')
      const errors = findDuplicateJSONKeys(fileText, [], lang)
      expect(errors).toEqual([])
    })
  })

  it('should not have duplicate keys in textStrings', () => {
    findDuplicateJSONKeysInFolders(
      './text_strings/',
      (dir) =>
        dir !== 'ios' && dir !== 'server' && dir !== 'templates' && dir !== 'bot_new_structure' && dir !== 'shared'
    )
  })
  it('all textstrings should have a equivalent string in all other languages', () => {
    compareKeysForLanguages(supportedLanguageCodes, getTextStrings, languageCodes)
  })

  // Test for including all %1$d, %2$d, %3$d etc..
  // pretty slow test, takes around 8 seconds at the time test was written

  it('all languages should have english as default', () => {
    expect(getTextStrings('en')).toEqual(getTextStrings(''))
  })

  describe('TextStrings Matching tests', () => {
    const validateHTMLTag = (testString: string): boolean => {
      const htmlTagPairs = [
        ['<b>', '</b>'],
        ['<boldGreen>', '</boldGreen>'],
        ['<boldRed>', '</boldRed>'],
        ['<underline>', '</underline>'],
        ['<boldBlueUnderline>', '</boldBlueUnderline>']
      ]

      return !htmlTagPairs.some(
        (pair) => pair.some((tag) => testString.includes(tag)) && !pair.every((tag) => testString.includes(tag))
      )
    }

    let index = 0
    while (index < supportedLanguageCodes.length) {
      index++
      const lang = supportedLanguageCodes[index]
      if (!lang) {
        return
      }

      it('should return Text Strings', () => {
        expect(getTextStrings(lang)).toBeDefined()
      })

      it('all textstrings should have right amount of $d and $c and $s signs signs', () => {
        if (lang === 'sv') {
          supportedLanguageCodes.forEach((lang2) => {
            if (lang2 === 'en') {
              compareDollarSigns(getTextStrings(lang), getTextStrings(lang2), lang, lang2, '$')
            }
          })
        }

        if (lang === 'sv') {
          supportedLanguageCodes.forEach((lang2) => {
            if (lang2 === 'en') {
              compareDollarSigns(getTextStrings(lang), getTextStrings(lang2), lang, lang2, '$d')
            }
          })
        }

        if (lang === 'sv') {
          supportedLanguageCodes.forEach((lang2) => {
            if (lang2 === 'en') {
              compareDollarSigns(getTextStrings(lang), getTextStrings(lang2), lang, lang2, '$s')
            }
          })
        }
      })

      it.skip('Text strings should not be more than 20% longer in other languages', () => {
        checkStringLength(getTextStrings('en'), getTextStrings(lang), 'en', lang)
      })

      it('should not have any birgitta inconsistencies', () => {
        const errorMessages: Record<string, string> = {}

        supportedLanguageCodes.forEach((lang2, j) => {
          const errorArray = checkBirgittaInconsistencies(getTextStrings(lang), getTextStrings(lang2), lang, lang2)
          errorArray.forEach((key) => {
            errorMessages[key] = ''
          })
        })
        // console.warn(JSON.stringify(errorMessages, undefined, 2))
      })

      it('should not have unclosed brackers', () => {
        let leftSide = 0
        let rightSide = 0
        const error: string[] = []

        const textString = JSON.stringify(getTextStrings(lang))

        leftSide = textString.split('[').length - 1
        rightSide = textString.split(']').length - 1
        if (leftSide !== rightSide) {
          error.push(lang)
        }
        if (error.length > 0) {
          console.warn(error)
        }
        expect(error).toEqual([])
      })

      it('should have valid html tags', () => {
        const errors: string[] = []

        const textStrings: Record<string, string> = getTextStrings(lang)
        Object.keys(textStrings).forEach((key) => {
          const text = textStrings[key]
          const valid = validateHTMLTag(text)
          if (!valid) {
            errors.push(`No valid tags (<b>, </b> etc) in text: ${text}`)
          }
        })

        // console.warn(JSON.stringify(error[0], undefined, 2))
        // if (error.lenght > 0) console.warn(error, undefined, 2)
        expect(JSON.stringify(errors, undefined, 2)).toBe('[]')
      })

      describe('should have proper textStrings', () => {
        const enTextStrings = getTextStrings('en')
        Object.keys(enTextStrings).forEach((key) => {
          if (lang === 'en' || lang === 'el') {
            return undefined
          } // skip greek since we handle names a bit differently
          const testingString = getText(key, [], 'capitalize', enTextStrings)
          const variablePartialMatches = testingString.match(/\$d/gm) || []
          const variableMatches = testingString.match(/%\d\$d/gm) || []
          it('should have variable match %d$d', () => {
            expect(variablePartialMatches).toHaveLength(variableMatches.length)
          })
          if (!variableMatches || variableMatches.length === 0) {
            return undefined
          }
          const compareString = getText(key, [], 'capitalize', getTextStrings(lang))
          const comparingStringMatches = compareString.match(/%\d\$d/gm) || []
          it(key + ' in ' + lang + '.json is missing ', () => {
            expect(variableMatches).toHaveLength(comparingStringMatches.length)
          })
          return undefined
          /* better descriptive but more taxing
          return variableMatches.forEach(match => {
            test(key + ' in ' + lang + '.json is missing ' + match, () => {
              const includesVariableMatch = compareString.indexOf(match) >= 0
              expect(includesVariableMatch).toEqual(true)
            })
          })
          */
        })
      })
    }

    it('should be able to validate tag', () => {
      expect(validateHTMLTag('<b>iodfoi')).toBe(false)
      expect(validateHTMLTag('iodfoi')).toBe(true)
      expect(validateHTMLTag('iodfoi</b>')).toBe(false)
      expect(validateHTMLTag('<b>iodfoi< /b>')).toBe(false)
      expect(validateHTMLTag('<b >iodfoi</b>')).toBe(false)
      expect(validateHTMLTag('<underline >iodfoi</underline>')).toBe(false)
      expect(validateHTMLTag('< b>iodfoi</b>')).toBe(false)
      expect(validateHTMLTag('<b>iodfoi</b>')).toBe(true)
    })
  })
})
