
/* eslint no-console:0 */
/* eslint jest/expect-expect:  0 */
import {getTextStrings, getText, supportedLanguageCodes, gimiWebLanguageCodes, languageCodes} from '../index'
import {compareKeysForLanguages, findDuplicateJSONKeysInFolders, findDuplicateJSONKeys, compareDollarSigns, checkBirgittaInconsistencies, checkStringLenght} from '../TestUtil'
import fs from 'fs'
import * as path from 'path'
jest.disableAutomock()
// let flatten = require('flat')

describe('TextStrings', () => {
  test('should not allow duplicate keys in JSON', () => {
    gimiWebLanguageCodes.forEach(lang => {
      let fileText = fs.readFileSync(path.join(__dirname, `../text_strings/gimi-web/${lang}.json`), {encoding: 'utf8'}).split('\n')
      const errors = findDuplicateJSONKeys(fileText, [])
      expect(errors).toEqual([])
    })

    languageCodes.forEach(lang => {
      let fileText = fs.readFileSync(path.join(__dirname, `../text_strings/client/${lang}.json`), {encoding: 'utf8'}).split('\n')
      const errors = findDuplicateJSONKeys(fileText, [])
      expect(errors).toEqual([])
    })
  })

  test('should not have duplicate keys in textStrings', () => {
    findDuplicateJSONKeysInFolders('./text_strings/', (dir) => dir !== 'ios' && dir !== 'server' && dir !== 'templates' && dir !== 'gimi-web' && dir !== 'gimi-web-redux' && dir !== 'bot_new_structure' && dir !== 'client_new_structure' && dir !== 'shared'
    )
  })
  test('all textstrings should have a equivalent string in all other languages', () => {
    compareKeysForLanguages(supportedLanguageCodes, getTextStrings, languageCodes)
  })

  // Test for including all %1$d, %2$d, %3$d etc..
  // pretty slow test, takes around 8 seconds at the time test was written

  test('all languages should have english as default', () => {
    expect(getTextStrings('en')).toEqual(getTextStrings(''))
  })

  describe('TextStrings Matching tests', () => {
    let validateHTMLTag = (testString: string): boolean => {
      let htmlTagPairs = [
        ['<b>', '</b>'],
        ['<boldGreen>', '</boldGreen>'],
        ['<boldRed>', '</boldRed>'],
        ['<underline>', '</underline>'],
        ['<boldBlueUnderline>', '</boldBlueUnderline>']
      ]

      return !htmlTagPairs.some(pair =>
        pair.some((tag) => testString.includes(tag)) &&
        !pair.every((tag) => testString.includes(tag)))
    }

    let index = 0
    while (index < supportedLanguageCodes.length) {
      index++
      let lang = supportedLanguageCodes[index]
      if (!lang) return

      test('should return Text Strings', () => {
      // eslint-disable-next-line jest/prefer-to-be-undefined
        expect(getTextStrings(lang)).not.toEqual(undefined)
      })

      test('all textstrings should have right amount of $d and $c and $s signs signs', () => {
        if (lang === 'sv')
          supportedLanguageCodes.forEach(lang2 => {
            if (lang2 === 'en') compareDollarSigns(getTextStrings(lang), getTextStrings(lang2), lang, lang2, '$')
          })

        if (lang === 'sv')
          supportedLanguageCodes.forEach(lang2 => {
            if (lang2 === 'en') compareDollarSigns(getTextStrings(lang), getTextStrings(lang2), lang, lang2, '$d')
          })

        if (lang === 'sv')
          supportedLanguageCodes.forEach(lang2 => {
            if (lang2 === 'en') compareDollarSigns(getTextStrings(lang), getTextStrings(lang2), lang, lang2, '$s')
          })
      })

      test.skip('Text strings should not be more than 20% longer in other languages', () => {
        checkStringLenght(getTextStrings('en'), getTextStrings(lang), 'en', lang)
      })

      test('should not have any birgitta inconsistencies', () => {
        let errorMessages: {[key: string]: string} = {}

        supportedLanguageCodes.forEach((lang2, j) => {
          let errorArray = checkBirgittaInconsistencies(getTextStrings(lang), getTextStrings(lang2), lang, lang2)
          errorArray.forEach(key => {
            errorMessages[key] = ''
          })
        })
        console.warn(JSON.stringify(errorMessages, undefined, 2))
      })

      test('should not have unclosed brackers', () => {
        let leftSide = 0
        let rightSide = 0
        let error: Array<string> = []

        let textString = JSON.stringify(getTextStrings(lang))

        leftSide = textString.split('[').length - 1
        rightSide = textString.split(']').length - 1
        if (leftSide !== rightSide) error.push(lang)
        if (error.length > 0) console.warn(error)
        expect(error).toEqual([])
      })

      test('should have valid html tags', () => {
        let errors: Array<string> = []

        let textStrings: {[key: string]: string} = getTextStrings(lang)
        Object.keys(textStrings).forEach((key) => {
          let text = textStrings[key]
          let valid = validateHTMLTag(text)
          if (!valid) errors.push(`No valid tags (<b>, </b> etc) in text: ${text}`)
        })

        // console.warn(JSON.stringify(error[0], undefined, 2))
        // if (error.lenght > 0) console.warn(error, undefined, 2)
        expect(JSON.stringify(errors, undefined, 2)).toEqual('[]')
      })

      describe('should have proper textStrings', () => {
        const enTextStrings = getTextStrings('en')
        Object.keys(enTextStrings).forEach(key => {
          if (lang === 'en') return undefined
          const testingString = getText(key, [], 'capitalize', enTextStrings)
          const variablePartialMatches = testingString.match(/\$d/gm) || []
          const variableMatches = testingString.match(/%\d\$d/gm) || []
          test('should have variable match %d$d', () => {
            expect(variablePartialMatches).toHaveLength(variableMatches.length)
          })
          if (!variableMatches || variableMatches.length < 1) return undefined
          const compareString = getText(key, [], 'capitalize', getTextStrings(lang))
          const comparingStringMatches = compareString.match(/%\d\$d/gm) || []
          test(key + ' in ' + lang + '.json is missing ', () => {
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

    test('should be able to validate tag', () => {
      expect(validateHTMLTag('<b>iodfoi')).toEqual(false)
      expect(validateHTMLTag('iodfoi')).toEqual(true)
      expect(validateHTMLTag('iodfoi</b>')).toEqual(false)
      expect(validateHTMLTag('<b>iodfoi< /b>')).toEqual(false)
      expect(validateHTMLTag('<b >iodfoi</b>')).toEqual(false)
      expect(validateHTMLTag('<underline >iodfoi</underline>')).toEqual(false)
      expect(validateHTMLTag('< b>iodfoi</b>')).toEqual(false)
      expect(validateHTMLTag('<b>iodfoi</b>')).toEqual(true)
    })
  })
})
