
import {getFinLitTestQuestion} from '../SharedStrings'
import {getCurrencyConfig} from '../lib/CurrencyConfig'

jest.disableAutomock()

describe('SharedStringsTests', () => {
  test('it should onvert $c{whatever} to correct currency', () => {
    let question = getFinLitTestQuestion(1, 3, 'en', getCurrencyConfig('SEK'))
    expect(!question.includes('$c{')).toBeTruthy()
  })
})
