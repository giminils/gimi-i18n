import {getSupportedCurrencyInfos, getDefaultCurrencyCode} from '../index'
import _DefaultCurrencies from '../DefaultCurrencies'
import _ExchangeRates from '../ExchangeRates'
import Decimal from 'decimal.js-light'

const DefaultCurrencies = _DefaultCurrencies as Record<string, any>
const ExchangeRates = _ExchangeRates as Record<string, any>

jest.disableAutomock()

describe('Currencies', () => {
  it('it should return supported supportedCurrencyCodes', () => {
    expect(getSupportedCurrencyInfos()).not.toBeUndefined()
    expect(getSupportedCurrencyInfos()).toHaveLength(12)
    expect(getSupportedCurrencyInfos()).toMatchSnapshot()
  })

  it('it should return default currency', () => {
    expect(getDefaultCurrencyCode('FI')).toEqual('EUR')
    expect(getDefaultCurrencyCode('NO')).toEqual('NOK')
    expect(getDefaultCurrencyCode('GB')).toEqual('GBP')
    expect(getDefaultCurrencyCode('SE')).toEqual('SEK')
    expect(getDefaultCurrencyCode('BE')).toEqual('EUR')
    expect(getDefaultCurrencyCode()).toEqual('EUR')
  })

  it('all currencies in Default CurrencyCodes needs to be in supported Currency Codes', () => {
    Object.values(DefaultCurrencies).forEach((currencyCode) =>
      expect(getSupportedCurrencyInfos().find((currencyInfo) => currencyInfo.code === currencyCode)).toBeDefined()
    )
  })

  Object.keys(DefaultCurrencies).forEach((key) => {
    it(`Should be an exchange rate for ${key} (entry found in default currencies)`, () => {
      expect(ExchangeRates[DefaultCurrencies[key]]).toBeDefined()
    })
  })

  Object.values(getSupportedCurrencyInfos()).forEach((val) => {
    it(`All defined currencies should have conversion rate ${
      ExchangeRates[val.code]
    } `, () => {
      expect(ExchangeRates[val.code]).toBeDefined()
    })

    it(`All defined currencies should be a positive number ${
      ExchangeRates[val.code]
    } `, () => {
      let exchangeRate = new Decimal(ExchangeRates[val.code])

      expect(exchangeRate.isPositive()).toBeTruthy()
      expect(ExchangeRates[val.code]).toBeDefined()
    })
  })
})
