
import {getTextStrings, getLangugageCodes} from '../index'
jest.disableAutomock()

describe('LanguageCodes', () => {
  it('it should return LanguageCodes', () => {
    expect(getLangugageCodes()).not.toBeUndefined()
  })

  it('it should return textStrings for all LanguageCodes', () => {
    let languageCodes = getLangugageCodes()
    languageCodes.forEach(languageCode => expect(getTextStrings(languageCode.code)).not.toBeUndefined())
  })
})
