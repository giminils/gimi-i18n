
import {getTextStrings, getLangugageCodes} from '../index'
jest.disableAutomock()

describe('LanguageCodes', () => {
  it('it should return LanguageCodes', () => {
    expect(getLangugageCodes()).not.toBeUndefined()
  })

  it('it should return textStrings for all LanguageCodes', () => {
    let languageCodes = getLangugageCodes()
    languageCodes.forEach((languageCode: {code: string, name: string, nativeName: string}) => expect(getTextStrings(languageCode.code)).not.toBeUndefined())
  })
})
