/* eslint no-console:0 */
/* eslint jest/expect-expect:  0 */
import {getNativeErrorMessageStrings, supportedLanguageCodes, languageCodes} from '../index'
import {compareKeysForLanguages, findDuplicateJSONKeysInFolders} from '../TestUtil'

jest.disableAutomock()

describe('Native', () => {
  it('all native error strings should have a equivalent string in all other languages', () => {
    compareKeysForLanguages(supportedLanguageCodes, getNativeErrorMessageStrings, languageCodes)
  })

  it('should not have duplicate keys', () => {
    findDuplicateJSONKeysInFolders('./native/', () => true)
  })
})
