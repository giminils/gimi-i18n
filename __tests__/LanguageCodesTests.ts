import {getTextStrings, getLanguageCodes} from '../index'
jest.disableAutomock()

describe('LanguageCodes', () => {
  it('it should return LanguageCodes', () => {
    expect(getLanguageCodes()).not.toBeUndefined()
  })

  it('it should return textStrings for all LanguageCodes', () => {
    let languageCodes = getLanguageCodes()
    languageCodes.forEach((languageCode: {code: string; name: string; nativeName: string}) =>
      expect(getTextStrings(languageCode.code)).not.toBeUndefined()
    )
  })
})
