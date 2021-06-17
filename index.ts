// calendar
import defaultCalendar from './text_strings/calendar/default.json'
// native error messages
import defaultNativeErrorMessages from './native/error-messages/default.json'

const Accounting = require('accounting')
const CountryCodes = require('./CountryCodes.json')
import Regions from './Regions.json'
import {getCardQuestion, getCardAnswer, getInfluencerPortalAnswer, getFinLitQuestion, getFinLitAnswer} from './SharedStrings'
const Cities = require('./Cities.json')
import Timezones from './TimeZones.json'
const LanguageCodes = require('./LanguageCodes.json')
const countryCodes2PhoneNumberPrefixes = require('./countryCodes2PhoneNumberPrefixes.json')
import ExchangeRates from './ExchangeRates'
import DefaultCurrencies from './DefaultCurrencies'
import ExperimentalCourses from './Education'
import * as School from './school/School'
import AllowanceSuggestions from './AllowanceSuggestions'

export let supportedLanguageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'be', 'it', 'es', 'de', 'et']
export let gimiWebLanguageCodes = ['en', 'sv', 'no']
export let supportedTimeZonesAndroid =
  ['Europe/Stockholm', 'Europe/Oslo', 'Europe/Helsinki', 'Europe/Copenhagen', 'Europe/Prague', 'Europe/London', 'America/New_York', 'America/Los_Angeles',
    'America/Vancouver', 'America/Panama', 'Pacific/Guam', 'Pacific/Palau', 'America/Puerto_Rico', 'Africa/Windhoek', 'Australia/Sydney', 'America/Toronto',
    'Pacific/Auckland', 'Asia/Calcutta', 'Africa/Cairo']

export let languageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'it', 'es', 'de']

export const languageCodesForTranslation = ['nb', 'de', 'fi', 'fr', 'da', 'nl', 'it', 'es', 'sv', 'en']

export const getSupportedCurrencyInfos = (): Array<{code: string, name: string, langKey: string}> => [
  {code: 'SEK', name: 'Swedish Krona', langKey: 'currency_sek'},
  {code: 'NOK', name: 'Norwegian Krone', langKey: 'currency_nok'},
  {code: 'DKK', name: 'Danish Krone', langKey: 'currency_dkk'},
  {code: 'GBP', name: 'Pound Sterling', langKey: 'currency_gbp'},
  {code: 'USD', name: 'US Dollar', langKey: 'currency_usd'},
  {code: 'EUR', name: 'Euro', langKey: 'currency_eur'},
  {code: 'INR', name: 'Indian Rupee', langKey: 'currency_inr'},
  {code: 'AUD', name: 'Australian Dollar', langKey: 'currency_aud'},
  {code: 'CAD', name: 'Canadian Dollar', langKey: 'currency_cad'},
  {code: 'NZD', name: 'New Zealand Dollar', langKey: 'currency_nzd'},
  {code: 'ISK', name: 'Iceland Krona', langKey: 'currency_isk'},
  {code: 'CHF', name: 'Swiss Franc', langKey: 'currency_chf'}
]

export const getEducationStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return require('./text_strings/education/sv.json')
    case 'nb':
    case 'nn': return require('./text_strings/education/nb.json')
    case 'da': return require('./text_strings/education/da.json')
    case 'fr': return require('./text_strings/education/fr.json')
    case 'nl': return require('./text_strings/education/nl.json')
    case 'fi': return require('./text_strings/education/fi.json')
    case 'it': return require('./text_strings/education/it.json')
    case 'es': return require('./text_strings/education/es.json')
    case 'de': return require('./text_strings/education/de.json')
    default: return require('./text_strings/education/en.json')
  }
}

export const getTextStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/sv.json'), ...require('./text_strings/bot/sv.json'), ...require('./text_strings/bot-survey/sv.json'), ...require('./text_strings/education/sv.json'), ...require('./text_strings/faq/sv.json'), ...require('./text_strings/school/sv.json')} // sweden
    case 'nb':
    case 'nn': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/nb.json'), ...require('./text_strings/bot/nb.json'), ...require('./text_strings/bot-survey/nb.json'), ...require('./text_strings/education/nb.json'), ...require('./text_strings/faq/nb.json'), ...require('./text_strings/school/nb.json')} // norway
    case 'da': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/da.json'), ...require('./text_strings/bot/da.json'), ...require('./text_strings/bot-survey/da.json'), ...require('./text_strings/education/da.json'), ...require('./text_strings/faq/da.json'), ...require('./text_strings/school/da.json')} // danish
    case 'fr': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/fr.json'), ...require('./text_strings/bot/fr.json'), ...require('./text_strings/bot-survey/fr.json'), ...require('./text_strings/education/fr.json'), ...require('./text_strings/faq/fr.json'), ...require('./text_strings/school/fr.json')} // france
    case 'it': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/it.json'), ...require('./text_strings/bot/it.json'), ...require('./text_strings/bot-survey/it.json'), ...require('./text_strings/education/it.json'), ...require('./text_strings/faq/it.json'), ...require('./text_strings/school/it.json')} // Italian
    case 'nl': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/nl.json'), ...require('./text_strings/bot/nl.json'), ...require('./text_strings/bot-survey/nl.json'), ...require('./text_strings/education/nl.json'), ...require('./text_strings/faq/nl.json'), ...require('./text_strings/school/nl.json')} // netherlands
    case 'fi': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/fi.json'), ...require('./text_strings/bot/fi.json'), ...require('./text_strings/bot-survey/fi.json'), ...require('./text_strings/education/fi.json'), ...require('./text_strings/faq/fi.json'), ...require('./text_strings/school/fi.json')} // finish
    case 'es': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/es.json'), ...require('./text_strings/bot/es.json'), ...require('./text_strings/bot-survey/es.json'), ...require('./text_strings/education/es.json'), ...require('./text_strings/faq/es.json'), ...require('./text_strings/school/es.json')} // spanish
    case 'de': return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/de.json'), ...require('./text_strings/bot/de.json'), ...require('./text_strings/bot-survey/de.json'), ...require('./text_strings/education/de.json'), ...require('./text_strings/faq/de.json'), ...require('./text_strings/school/de.json')} // german
    default: return {...require('./text_strings/client/default.json'), ...require('./text_strings/client/en.json'), ...require('./text_strings/bot/en.json'), ...require('./text_strings/bot-survey/en.json'), ...require('./text_strings/education/en.json'), ...require('./text_strings/faq/en.json'), ...require('./text_strings/school/en.json')}
  }
}

export const getCalendarStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {...defaultCalendar, ...require('./text_strings/calendar/da.json')} // sweden
    case 'da': return {...defaultCalendar, ...require('./text_strings/calendar/da.json')} // danish
    case 'nb':
    case 'nn': return {...defaultCalendar, ...require('./text_strings/calendar/nb.json')} // norway
    case 'fr': return {...defaultCalendar, ...require('./text_strings/calendar/fr.json')} // france
    case 'nl': return {...defaultCalendar, ...require('./text_strings/calendar/nl.json')} // netherlands
    case 'be': return {...defaultCalendar, ...require('./text_strings/calendar/be.json')} // belgian
    case 'fi': return {...defaultCalendar, ...require('./text_strings/calendar/fi.json')} // finish
    case 'it': return {...defaultCalendar, ...require('./text_strings/calendar/it.json')} // italian
    case 'es': return {...defaultCalendar, ...require('./text_strings/calendar/es.json')} // spanish
    case 'de': return {...defaultCalendar, ...require('./text_strings/calendar/de.json')} // german
    case 'is': return {...defaultCalendar, ...require('./text_strings/calendar/is.json')} // island
    case 'et': return {...defaultCalendar, ...require('./text_strings/calendar/et.json')} // Estonia
    default: return {...defaultCalendar, ...require('./text_strings/calendar/en.json')}
  }
}

export const getFAQStrings = (lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv': return require('./text_strings/faq/sv.json') // sweden
    case 'nb':
    case 'nn': return require('./text_strings/faq/nb.json') // norway
    case 'da': return require('./text_strings/faq/da.json') // danish
    case 'fr': return require('./text_strings/faq/fr.json') // france
    case 'nl': return require('./text_strings/faq/nl.json') // Netherlands
    case 'fi': return require('./text_strings/faq/fi.json') // finish
    case 'it': return require('./text_strings/faq/it.json') // italian
    case 'es': return require('./text_strings/faq/es.json') // spanish
    case 'de': return require('./text_strings/faq/de.json') // german
    default: return require('./text_strings/faq/en.json')
  }
}

export const getDictionaryStrings = (lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv': return require('./text_strings/dictionary/sv.json') // sweden
    case 'nb':
    case 'nn': return require('./text_strings/dictionary/nb.json') // norway
    case 'da': return require('./text_strings/dictionary/da.json') // danish
    case 'fr': return require('./text_strings/dictionary/fr.json') // france
    case 'nl': return require('./text_strings/dictionary/nl.json') // Netherlands
    case 'fi': return require('./text_strings/dictionary/fi.json') // finish
    case 'it': return require('./text_strings/dictionary/it.json') // italian
    case 'es': return require('./text_strings/dictionary/es.json') // spanish
    case 'de': return require('./text_strings/dictionary/de.json') // german
    default: return require('./text_strings/dictionary/en.json')
  }
}

export const getNativeErrorMessageStrings = (lang: string): {[key: string]: string} => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/sv.json')} // sweden
    case 'nn':
    case 'nb': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/nb.json')} // norway
    case 'da': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/da.json')} // danish
    case 'fr': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/fr.json')} // france
    case 'nl': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/nl.json')} // Netherlands
    case 'fi': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/fi.json')} // finish
    case 'it': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/it.json')} // italian
    case 'es': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/es.json')} // spanish
    case 'de': return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/de.json')} // german
    default: return {...defaultNativeErrorMessages, ...require('./text_strings/calendar/en.json')}
  }
}

export const getEnBotSurveyStrings = () => require('./text_strings/bot-survey/en.json')

export const removeTranslationHelpers = (text: string): string => {
  text = text.replace(/\[.*?\]/g, '').trim()
  text = text.replace(new RegExp(translationHelpTemplate, 'g'), '')
  text = text.replace(new RegExp(translationHelperEMMA, 'g'), '')
  text = text.replace(new RegExp(PLZ_CHECK, 'g'), '')
  text = text.replace(new RegExp(liliTemplate, 'g'), '')
  text = text.trim()
  return text
}

export const translationHelpTemplate = 'PLZ_TRANSLATE'
export const PLZ_CHECK = 'PLZ_CHECK'
export const liliTemplate = 'PLZ_COPY'
export const translationHelperEMMA = 'EMMA'

export const getRegions = () => Regions
export const getCities = () => Cities
export const getCountries = () => CountryCodes
export const getCountry = (countryCode: string) => CountryCodes.find((country: {code: string, name: string, dial_code: string}) => country.code === countryCode)
export const getPhoneNumberPrefix = (country: string) => {
  let prefixes: {[key: string]: string} = countryCodes2PhoneNumberPrefixes
  return parseInt(prefixes[country.toUpperCase()])
}
export const getCountryCodeFromLocale = (locale: string) => locale.slice(-2)
export const getTimezones = () => Timezones
export const getLangugageCodes = () => LanguageCodes.filter((languageCode: { name: string, nativeName: string, code: string}) => supportedLanguageCodes.indexOf(languageCode.code) !== -1)
export const getDefaultCurrencyCode = (userCountryCode: string): string => {
  let currencies: { [key: string]: string} = DefaultCurrencies
  return currencies[userCountryCode] || 'EUR'
}

export const getSupportedTimeZones = () => {
  let shortList: Array<object> = []
  Timezones.map((zone, index) => {
    if (supportedTimeZonesAndroid.indexOf(zone.value) !== -1) shortList.push(zone)
    return zone
  })
  return shortList || Timezones
}

export const exchangeRates = ExchangeRates

export const getCardTestQuestion = (step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getCardQuestion(step, lang, currencyCode)

export const getCardTestAnswer = (step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getCardAnswer(step, lang, currencyCode)

export const getFinLitTestQuestion = (testType: number, step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getFinLitQuestion(testType, step, lang, currencyCode)

export const getFinLitTestAnswer = (testType: number, step: number, lang: string | undefined = 'en', currencyCode: string | undefined = 'SEK') => getFinLitAnswer(testType, step, lang, currencyCode)

export const getInfluencerAnswer = (step: number, lang: string | undefined = 'en') => getInfluencerPortalAnswer(step, lang)

export const getExperimentalCourses = () => ExperimentalCourses

export function getText (langKey: string, values: Array<string|number>, textTransform: string = 'capitalize', textStrings: {[key: string]: string}): string {
  if (typeof textStrings === 'undefined') return ''
  if (!textStrings || !langKey) return ''
  let text = textStrings[langKey]
  if (!text) return ''
  text = removeTranslationHelpers(text)
  text = text.trim()
  text = applyValues(text, values)
  text = applyTransform(text, textTransform)
  return text
}

export const applyValues = (text: string, values: Array<string|number>): string => {
  if (!!values && Array.isArray(values)) values.forEach((item, index) => {
    text = text.split(`%${index + 1}$d`).join(item !== undefined ? item.toString() : '')
  })
  return text
}

export const applyTransform = (text: string, textTransform: string|undefined = 'capitalize'): string => {
  if (!textTransform) return text
  switch (textTransform) {
    case 'uppercase': return text.toUpperCase()
    case 'capitalize': return text.charAt(0).toUpperCase() + text.slice(1)
    case 'lowercase': return text.toLowerCase()
    default: return text
  }
}

export let getClienStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return require('./text_strings/client/sv.json') // sweden
    case 'nb':
    case 'nn': return require('./text_strings/client/nb.json') // norway
    case 'da': return require('./text_strings/client/da.json') // danish
    case 'fr': return require('./text_strings/client/fr.json') // france
    case 'nl': return require('./text_strings/client/nl.json') // netherlands
    case 'fi': return require('./text_strings/client/fi.json') // finish
    case 'it': return require('./text_strings/client/it.json') // italian
    case 'es': return require('./text_strings/client/es.json') // spanish
    case 'de': return require('./text_strings/client/de.json') // german
    default: return require('./text_strings/client/en.json')
  }
}

export function formatMoney (value: number, currencyCode: string | undefined): string {
  let currencySymbol = getCurrencySymbol(currencyCode || '')
  switch (currencyCode) {
    // no decimals
    case 'SEK':
    case 'DKK':
    case 'NOK': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ' ', ',', '%v%s')
    case 'ISK': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%v%s')
    case 'THB': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'GBP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'EUR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'USD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'AUD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'CAD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'NZD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'INR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'IDR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'CHF': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    case 'COP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
    case 'ZAR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), ',', '.', '%s%v')
    default: return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '.', ',', '%s%v')
  }
}

export function getCurrencySymbol (currencyCode: string): string {
  switch (currencyCode) {
    case 'SEK':
    case 'DKK':
    case 'NOK': return 'kr'
    case 'USD':
    case 'NAD':
    case 'AUD':
    case 'CAD':
    case 'NZD':
    case 'LRD':
    case 'COP': return '$'
    case 'GBP': return '£'
    case 'BWP': return 'P'
    case 'ZWD': return 'Z$'
    case 'SZL': return 'L'
    case 'LSL': return 'L'
    case 'ZMF': return 'ZK'
    case 'TZS': return 'Sh'
    case 'KES': return 'Sh'
    case 'UGX': return 'Sh'
    case 'NGN': return '₦'
    case 'GHS': return '₵'
    case 'GMD': return 'D'
    case 'SCR': return 'Re'
    case 'SHP': return '£'
    case 'INR': return '₹'
    case 'ISK': return 'kr'
    case 'THB': return '฿'
    case 'XAF': return 'CFA'
    case 'SLL': return 'Le'
    case 'MUR': return 'Rs'
    case 'CHF': return 'CHF'
    case 'IDR': return 'Rp'
    case 'ZAR': return 'R'
    default: return '€'
  }
}

export function formatDecimals (value: number): number {
  let decimalValue = value - Math.floor(value)
  if (decimalValue === 0) return 0
  return 2
}

export const SchoolHelper = School

export const AllowanceSuggestionsByCurrency = AllowanceSuggestions
