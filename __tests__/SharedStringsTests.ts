
import {getFinLitQuestion, addCurrencyToGimiTestStrings} from '../SharedStrings'
import {getCurrencyConfig} from '../lib/CurrencyConfig'

jest.disableAutomock()

describe('SharedStringsTests', () => {
  test('it should convert $c{whatever} to correct currency', () => {
    let question = getFinLitQuestion(1, 3, 'en', 'SEK')
    expect(!question.includes('$c{')).toBeTruthy()
  })
  test('it should exchange correct currencies', () => {
    let SEK = addCurrencyToGimiTestStrings('$c{100}', 'SEK')
    let EUR = addCurrencyToGimiTestStrings('$c{100}', 'EUR')
    let USD = addCurrencyToGimiTestStrings('$c{100}', 'USD')
    expect(SEK).toEqual('100kr')
    expect(EUR).toEqual('€10')
    expect(USD).toEqual('$10')
  })
})
