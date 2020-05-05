/* eslint jest/expect-expect: 0 */
/* eslint no-console:0 */
import {compareKeys, compareKeysWithinTextStrings} from '../TestUtil'
import {gimiWebLanguageCodes} from '../index'

jest.disableAutomock()

let textStringsTypes = ['gimi-web']

let textStrings = {}
textStringsTypes.forEach(textStringsType => { textStrings[textStringsType] = {} })
textStringsTypes.forEach(textStringsType => {
  gimiWebLanguageCodes.forEach(lang => {
    let url = `../text_strings/${textStringsType}/${lang}`
    try {
      textStrings[textStringsType][lang] = require(url)
    } catch (e) {
      throw new Error(`Cant parse: ${url}`)
    }
  })
})
textStringsTypes.forEach(textStringsType => {
  describe(`${textStringsType} TextStrings`, () => {
    gimiWebLanguageCodes.forEach(lang => {
      it('all textstrings should have a equivalent string in all other languages', () => {
        gimiWebLanguageCodes.forEach(lang2 => compareKeys(textStrings[textStringsType][lang], textStrings[textStringsType][lang2], lang, lang2))
        gimiWebLanguageCodes.forEach(lang2 => compareKeysWithinTextStrings(textStrings[textStringsType][lang], textStrings[textStringsType][lang2], lang, lang2))
      })
    })
  })
})
