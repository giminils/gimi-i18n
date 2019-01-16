// @flow
import {leaveBreadcrumb} from './Bugsnag'
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

// Bot
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

import sekConfig from './config/config_SEK.json'
import CountryCodes from './CountryCodes.json'
import Regions from './Regions.json'
import {getCardQuestion, getCardAnswer, getInfluencerPortalAnswer} from './SharedStrings'
import Cities from './Cities.json'
import Timezones from './TimeZones.json'
import LanguageCodes from './LanguageCodes.json'
import countryCodes2PhoneNumberPrefixes from './countryCodes2PhoneNumberPrefixes.json'
import ExchangeRates from './ExchangeRates'
import DefaultCurrencies from './DefaultCurrencies'
import Courses from './Courses'

export var supportedLanguageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'be', 'it', 'es', 'de', 'et']
export var gimiWebLanguageCodes = ['en', 'sv']
export var supportedTimeZonesAndroid =
  ['Europe/Stockholm', 'Europe/Oslo', 'Europe/Helsinki', 'Europe/Copenhagen', 'Europe/Prague', 'Europe/London', 'America/New_York', 'America/Los_Angeles',
    'America/Vancouver', 'America/Panama', 'Pacific/Guam', 'Pacific/Palau', 'America/Puerto_Rico', 'Africa/Windhoek', 'Australia/Sydney', 'America/Toronto',
    'Pacific/Auckland', 'Asia/Calcutta', 'Africa/Cairo']

export var languageCodes = ['da', 'fi', 'sv', 'nb', 'en', 'fr', 'nl', 'it', 'es', 'de']

export let languageCodesForTranslation = ['nb', 'de', 'fi', 'fr', 'da', 'nl', 'it', 'es', 'sv', 'en']

export let getSupportedCurrencyInfos = (): Array<{code: string, name: string}> => [
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

export let getEducationStrings = (lang: string) => {
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

export let getTextStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv': return {..._default, ...sv, ...svBot, ...svEducate} // sweden
    case 'nb':
    case 'nn': return {..._default, ...no, ...noBot, ...noEducate} // norway
    case 'da': return {..._default, ...da, ...daBot, ...daEducate} // danish
    case 'fr': return {..._default, ...fr, ...frBot, ...frEducate} // france
    case 'nl': return {..._default, ...nl, ...nlBot, ...nlEducate} // Netherlands
    case 'fi': return {..._default, ...fi, ...fiBot, ...fiEducate} // finish
    case 'it': return {..._default, ...it, ...itBot, ...itEducate} // italian
    case 'es': return {..._default, ...es, ...esBot, ...esEducate} // spanish
    case 'de': return {..._default, ...de, ...deBot, ...deEducate} // german
    default: return {..._default, ...en, ...enBot, ...enEducate}
  }
}

export let getCalendarStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'da' : return {...defaultCalendar, ...daCalendar} // danish
    case 'sv' : return {...defaultCalendar, ...svCalendar} // sweden
    case 'nb' :
    case 'nn' : return {...defaultCalendar, ...noCalendar} // norway
    case 'fr' : return {...defaultCalendar, ...frCalendar} // france
    case 'nl' : return {...defaultCalendar, ...nlCalendar} // Netherlands
    case 'be' : return {...defaultCalendar, ...beCalendar} // belgian
    case 'fi' : return {...defaultCalendar, ...fiCalendar} // finish
    case 'it' : return {...defaultCalendar, ...itCalendar} // italian
    case 'es' : return {...defaultCalendar, ...esCalendar} // spanish
    case 'de' : return {...defaultCalendar, ...deCalendar} // german
    case 'is' : return {...defaultCalendar, ...isCalendar} // island
    case 'et' : return {...defaultCalendar, ...etCalendar} // Estonia
    default : return {...defaultCalendar, ...enCalendar}
  }
}

export let removeTranslationHelpers = (text: string): string => {
  text = text.replace(/\[.*?\]/g, '').trim()
  text = text.replace(new RegExp(translationHelpTemplate, 'g'), '')
  text = text.replace(new RegExp(translationHelperEMMA, 'g'), '')
  text = text.replace(new RegExp(birgittaTemplate, 'g'), '')
  text = text.replace(new RegExp(liliTemplate, 'g'), '')
  text = text.trim()
  return text
}

export let translationHelpTemplate = 'PLZ_TRANSLATE'
export let birgittaTemplate = 'PLZ_CHECK'
export let liliTemplate = 'PLZ_COPY'
export let translationHelperEMMA = 'EMMA'

export let getRegions = () => Regions
export let getCities = () => Cities
export let getCountries = () => CountryCodes
export let getCountry = (countryCode: string) => CountryCodes.find(country => country.code === countryCode)
export let getPhoneNumberPrefix = (country: string) => parseInt(countryCodes2PhoneNumberPrefixes[country.toUpperCase()])
export let getCountryCodeFromLocale = (locale: string) => locale.slice(-2)
export let getTimezones = () => Timezones
export let getLangugageCodes = () => LanguageCodes.filter(languageCode => supportedLanguageCodes.indexOf(languageCode.code) !== -1)
export let getDefaultCurrencyCode = (userCountryCode: string): string => DefaultCurrencies[userCountryCode] || 'EUR'

export let getSupportedTimeZones = () => {
  var shortList = []
  Timezones.map((zone, index) => {
    if (supportedTimeZonesAndroid.indexOf(zone.value) !== -1)
      shortList.push(zone)
  })
  return shortList || Timezones
}

export let exchangeRates = ExchangeRates

export let getCardTestQuestion = (step: number, lang?: string = 'en', currencyConfig?: Object = sekConfig) => getCardQuestion(step, lang, currencyConfig)

export let getInfluencerAnswer = (step: number, lang?: string = 'en') => getInfluencerPortalAnswer(step, lang)

export let getCardTestAnswer = (step: number, lang?: string = 'en', currencyConfig?: Object = sekConfig) => getCardAnswer(step, lang, currencyConfig)

export let getCourses = () => Courses

export let getChapter = () => Courses

export function getText (langKey: *, values?: Array<*>, textTransform?: string = 'capitalize', textStrings: Object): string {
  if (typeof textStrings === 'undefined') return ''
  if (!textStrings || !langKey) return ''
  var text = textStrings[langKey]
  if (!text) return ''
  text = removeTranslationHelpers(text)
  text = text.trim()
  if (values && !values.isArray())
    leaveBreadcrumb(`I18N text values error ${values}`)

  if (!!values && values.isArray()) values.forEach((item, index) => {
    text = text.split(`%${index + 1}$d`).join(item)
  })
  if (textTransform)
    switch (textTransform) {
      case 'uppercase': return text.toUpperCase()
      case 'capitalize': return text.charAt(0).toUpperCase() + text.slice(1)
      case 'lowercase': return text.toLowerCase()
      default: return text
    }
  return text
}
