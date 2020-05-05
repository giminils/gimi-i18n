
// client
import sv from './text_strings/client/sv.json'
import en from './text_strings/client/en.json'
import no from './text_strings/client/nb.json'
import da from './text_strings/client/da.json'
import fr from './text_strings/client/fr.json'
import nl from './text_strings/client/nl.json'
import fi from './text_strings/client/fi.json'
import it from './text_strings/client/it.json'
import es from './text_strings/client/es.json'
import de from './text_strings/client/de.json'
import _default from './text_strings/client/default.json'

// client_new_structure
import svNewStructure from './text_strings/client_new_structure/sv.json'
import enNewStructure from './text_strings/client_new_structure/en.json'
import noNewStructure from './text_strings/client_new_structure/nb.json'
import daNewStructure from './text_strings/client_new_structure/da.json'
import frNewStructure from './text_strings/client_new_structure/fr.json'
import nlNewStructure from './text_strings/client_new_structure/nl.json'
import fiNewStructure from './text_strings/client_new_structure/fi.json'
import itNewStructure from './text_strings/client_new_structure/it.json'
import esNewStructure from './text_strings/client_new_structure/es.json'
import deNewStructure from './text_strings/client_new_structure/de.json'

// bot
import svBot from './text_strings/bot/sv.json'
import enBot from './text_strings/bot/en.json'
import noBot from './text_strings/bot/nb.json'
import daBot from './text_strings/bot/da.json'
import frBot from './text_strings/bot/fr.json'
import nlBot from './text_strings/bot/nl.json'
import fiBot from './text_strings/bot/fi.json'
import itBot from './text_strings/bot/it.json'
import esBot from './text_strings/bot/es.json'
import deBot from './text_strings/bot/de.json'

// Bot survey
import svBotSurvey from './text_strings/bot-survey/sv.json'
import enBotSurvey from './text_strings/bot-survey/en.json'
import noBotSurvey from './text_strings/bot-survey/nb.json'
import daBotSurvey from './text_strings/bot-survey/da.json'
import frBotSurvey from './text_strings/bot-survey/fr.json'
import nlBotSurvey from './text_strings/bot-survey/nl.json'
import fiBotSurvey from './text_strings/bot-survey/fi.json'
import itBotSurvey from './text_strings/bot-survey/it.json'
import esBotSurvey from './text_strings/bot-survey/es.json'
import deBotSurvey from './text_strings/bot-survey/de.json'

// Education
import svEducate from './text_strings/education/sv.json'
import enEducate from './text_strings/education/en.json'
import noEducate from './text_strings/education/nb.json'
import daEducate from './text_strings/education/da.json'
import frEducate from './text_strings/education/fr.json'
import nlEducate from './text_strings/education/nl.json'
import fiEducate from './text_strings/education/fi.json'
import itEducate from './text_strings/education/it.json'
import esEducate from './text_strings/education/es.json'
import deEducate from './text_strings/education/de.json'

// calendar
import defaultCalendar from './text_strings/calendar/default.json'
import daCalendar from './text_strings/calendar/da.json'
import fiCalendar from './text_strings/calendar/fi.json'
import isCalendar from './text_strings/calendar/is.json'
import svCalendar from './text_strings/calendar/sv.json'
import frCalendar from './text_strings/calendar/fr.json'
import nlCalendar from './text_strings/calendar/nl.json'
import noCalendar from './text_strings/calendar/nb.json'
import enCalendar from './text_strings/calendar/en.json'
import beCalendar from './text_strings/calendar/be.json'
import itCalendar from './text_strings/calendar/it.json'
import esCalendar from './text_strings/calendar/es.json'
import deCalendar from './text_strings/calendar/de.json'
import etCalendar from './text_strings/calendar/et.json'

// FAQ
import defaultNativeErrorMessages from './text_strings/faq/default.json'
import svFAQ from './text_strings/faq/sv.json'
import enFAQ from './text_strings/faq/en.json'
import noFAQ from './text_strings/faq/nb.json'
import daFAQ from './text_strings/faq/da.json'
import frFAQ from './text_strings/faq/fr.json'
import nlFAQ from './text_strings/faq/nl.json'
import fiFAQ from './text_strings/faq/fi.json'
import itFAQ from './text_strings/faq/it.json'
import esFAQ from './text_strings/faq/es.json'
import deFAQ from './text_strings/faq/de.json'

// native error messages
import svNativeErrorMessages from './native/error-messages/sv.json'
import enNativeErrorMessages from './native/error-messages/en.json'
import noNativeErrorMessages from './native/error-messages/nb.json'
import daNativeErrorMessages from './native/error-messages/da.json'
import frNativeErrorMessages from './native/error-messages/fr.json'
import nlNativeErrorMessages from './native/error-messages/nl.json'
import fiNativeErrorMessages from './native/error-messages/fi.json'
import itNativeErrorMessages from './native/error-messages/it.json'
import esNativeErrorMessages from './native/error-messages/es.json'
import deNativeErrorMessages from './native/error-messages/de.json'

import Accounting from 'accounting'
import flatten from 'flat'
import sekConfig from './config/config_SEK.json'
import CountryCodes from './CountryCodes.json'
import Regions from './Regions.json'
import {getCardQuestion, getCardAnswer, getInfluencerPortalAnswer, getFinLitQuestion, getFinLitAnswer} from './SharedStrings'
import Cities from './Cities.json'
import Timezones from './TimeZones.json'
import LanguageCodes from './LanguageCodes.json'
import countryCodes2PhoneNumberPrefixes from './countryCodes2PhoneNumberPrefixes.json'
import ExchangeRates from './ExchangeRates'
import DefaultCurrencies from './DefaultCurrencies'
import ExperimentalCourses from './Education'

export let supportedLanguageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'be', 'it', 'es', 'de', 'et']
export let gimiWebLanguageCodes = ['en', 'sv', 'no']
export let supportedTimeZonesAndroid =
  ['Europe/Stockholm', 'Europe/Oslo', 'Europe/Helsinki', 'Europe/Copenhagen', 'Europe/Prague', 'Europe/London', 'America/New_York', 'America/Los_Angeles',
    'America/Vancouver', 'America/Panama', 'Pacific/Guam', 'Pacific/Palau', 'America/Puerto_Rico', 'Africa/Windhoek', 'Australia/Sydney', 'America/Toronto',
    'Pacific/Auckland', 'Asia/Calcutta', 'Africa/Cairo']

export let languageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'it', 'es', 'de']

export const languageCodesForTranslation = ['nb', 'de', 'fi', 'fr', 'da', 'nl', 'it', 'es', 'sv', 'en']

export const getSupportedCurrencyInfos = (): Array<{code: string, name: string}> => [
  {code: 'SEK', name: 'Swedish Krona'},
  {code: 'NOK', name: 'Norwegian Krone'},
  {code: 'DKK', name: 'Danish Krone'},
  {code: 'GBP', name: 'Pound Sterling'},
  {code: 'USD', name: 'US Dollar'},
  {code: 'EUR', name: 'Euro'},
  {code: 'AUD', name: 'Australian Dollar'},
  {code: 'CAD', name: 'Canadian Dollar'},
  {code: 'NZD', name: 'New Zealand Dollar'},
  {code: 'INR', name: 'Indian Rupee'},
  {code: 'ZAR', name: 'Rand'},
  {code: 'ISK', name: 'Iceland Krona'},
  {code: 'THB', name: 'Thai Baht'},
  {code: 'IDR', name: 'Indonesian Rupiahs'},
  {code: 'CHF', name: 'Swiss Franc'},
  {code: 'COP', name: 'Colombian Peso'}
]

export const getEducationStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return svEducate
    case 'nb':
    case 'nn': return noEducate
    case 'da': return daEducate
    case 'fr': return frEducate
    case 'nl': return nlEducate
    case 'fi': return fiEducate
    case 'it': return itEducate
    case 'es': return esEducate
    case 'de': return deEducate
    default: return enEducate
  }
}

export const getTextStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {..._default, ...sv, ...svBot, ...svBotSurvey, ...svEducate, ...svFAQ} // sweden
    case 'nb':
    case 'nn': return {..._default, ...no, ...noBot, ...noBotSurvey, ...noEducate, ...noFAQ} // norway
    case 'da': return {..._default, ...da, ...daBot, ...daBotSurvey, ...daEducate, ...daFAQ} // danish
    case 'fr': return {..._default, ...fr, ...frBot, ...frBotSurvey, ...frEducate, ...frFAQ} // france
    case 'nl': return {..._default, ...nl, ...nlBot, ...nlBotSurvey, ...nlEducate, ...nlFAQ} // netherlands
    case 'fi': return {..._default, ...fi, ...fiBot, ...fiBotSurvey, ...fiEducate, ...fiFAQ} // finish
    case 'it': return {..._default, ...it, ...itBot, ...itBotSurvey, ...itEducate, ...itFAQ} // italian
    case 'es': return {..._default, ...es, ...esBot, ...esBotSurvey, ...esEducate, ...esFAQ} // spanish
    case 'de': return {..._default, ...de, ...deBot, ...deBotSurvey, ...deEducate, ...deFAQ} // german
    default: return {..._default, ...en, ...enBot, ...enBotSurvey, ...enEducate, ...enFAQ}
  }
}

export const getCalendarStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'da': return {...defaultCalendar, ...daCalendar} // danish
    case 'sv': return {...defaultCalendar, ...svCalendar} // sweden
    case 'nb':
    case 'nn': return {...defaultCalendar, ...noCalendar} // norway
    case 'fr': return {...defaultCalendar, ...frCalendar} // france
    case 'nl': return {...defaultCalendar, ...nlCalendar} // netherlands
    case 'be': return {...defaultCalendar, ...beCalendar} // belgian
    case 'fi': return {...defaultCalendar, ...fiCalendar} // finish
    case 'it': return {...defaultCalendar, ...itCalendar} // italian
    case 'es': return {...defaultCalendar, ...esCalendar} // spanish
    case 'de': return {...defaultCalendar, ...deCalendar} // german
    case 'is': return {...defaultCalendar, ...isCalendar} // island
    case 'et': return {...defaultCalendar, ...etCalendar} // Estonia
    default : return {...defaultCalendar, ...enCalendar}
  }
}

export const getFAQStrings = (lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv': return svFAQ // sweden
    case 'nb':
    case 'nn': return noFAQ // norway
    case 'da': return daFAQ // danish
    case 'fr': return frFAQ // france
    case 'nl': return nlFAQ // Netherlands
    case 'fi': return fiFAQ // finish
    case 'it': return itFAQ // italian
    case 'es': return esFAQ // spanish
    case 'de': return deFAQ // german
    default: return enFAQ
  }
}

export const getNativeErrorMessageStrings = (lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {...defaultNativeErrorMessages, ...svNativeErrorMessages} // sweden
    case 'nb': return {...defaultNativeErrorMessages, ...noNativeErrorMessages} // norway
    case 'da': return {...defaultNativeErrorMessages, ...daNativeErrorMessages} // danish
    case 'fr': return {...defaultNativeErrorMessages, ...frNativeErrorMessages} // france
    case 'nl': return {...defaultNativeErrorMessages, ...nlNativeErrorMessages} // Netherlands
    case 'fi': return {...defaultNativeErrorMessages, ...fiNativeErrorMessages} // finish
    case 'it': return {...defaultNativeErrorMessages, ...itNativeErrorMessages} // italian
    case 'es': return {...defaultNativeErrorMessages, ...esNativeErrorMessages} // spanish
    case 'de': return {...defaultNativeErrorMessages, ...deNativeErrorMessages} // german
    default: return {...defaultNativeErrorMessages, ...enNativeErrorMessages}
  }
}

export const getEnBotSurveyStrings = () => enBotSurvey

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
export const getCountry = (countryCode: string) => CountryCodes.find(country => country.code === countryCode)
export const getPhoneNumberPrefix = (country: string) => parseInt(countryCodes2PhoneNumberPrefixes[country.toUpperCase()])
export const getCountryCodeFromLocale = (locale: string) => locale.slice(-2)
export const getTimezones = () => Timezones
export const getLangugageCodes = () => LanguageCodes.filter(languageCode => supportedLanguageCodes.indexOf(languageCode.code) !== -1)
export const getDefaultCurrencyCode = (userCountryCode: string): string => DefaultCurrencies[userCountryCode] || 'EUR'

export const getSupportedTimeZones = () => {
  let shortList: Array<object> = []
  Timezones.map((zone, index) => {
    if (supportedTimeZonesAndroid.indexOf(zone.value) !== -1) shortList.push(zone)
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

export function getText (langKey: any, values: Array<string|number>, textTransform: string = 'capitalize', textStrings: object): string {
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

export const applyValues = (text: string, values?: Array<*>): string => {
  if (!!values && Array.isArray(values)) values.forEach((item, index) => {
    text = text.split(`%${index + 1}$d`).join(item)
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
    case 'sv': return sv // sweden
    case 'nb':
    case 'nn': return no // norway
    case 'da': return da // danish
    case 'fr': return fr // france
    case 'nl': return nl // netherlands
    case 'fi': return fi // finish
    case 'it': return it // italian
    case 'es': return es // spanish
    case 'de': return de // german
    default: return en
  }
}

export let getClientNewStructureStrings = (lang: string): string => {
  switch (lang.substring(0, 2)) {
    case 'sv': return flatten(svNewStructure) // sweden
    case 'nb':
    case 'nn': return flatten(noNewStructure) // norway
    case 'da': return flatten(daNewStructure) // danish
    case 'fr': return flatten(frNewStructure) // france
    case 'nl': return flatten(nlNewStructure) // netherlands
    case 'fi': return flatten(fiNewStructure) // finish
    case 'it': return flatten(itNewStructure) // italian
    case 'es': return flatten(esNewStructure) // spanish
    case 'de': return flatten(deNewStructure) // german
    default: return flatten(enNewStructure)
  }
}

export function formatMoney (value: number, currencyCode: string|undefined): string {
  let currencySymbol = getCurrencySymbol(currencyCode || '')
  switch (currencyCode) {
    // no decimals
    case 'SEK':
    case 'DKK':
    case 'NOK': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%v%s')
    case 'ISK': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%v%s')
    case 'THB': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'XAF': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%v%s')
    case 'SLL': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'MUR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'GBP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'USD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'NAD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'AUD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'CAD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'NZD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'BWP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'ZWD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'SZL': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'LSL': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'ZMF': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'TZS': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'KES': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'UGX': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'NGN': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'GHS': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'LRD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'GMD': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'SCR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'SHP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'INR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'IDR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'CHF': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'COP': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    case 'ZAR': return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
    default: return Accounting.formatMoney(value, currencySymbol, formatDecimals(value), '', '.', '%s%v')
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
    case 'CHF': return 'SFr'
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
