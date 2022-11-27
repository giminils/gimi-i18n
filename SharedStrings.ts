import memoize from 'fast-memoize'
import {removeTranslationHelpers, formatMoney} from './index'
import ExchangeRates from './ExchangeRates'
import sv from './text_strings/shared/sv.json'
import en from './text_strings/shared/en.json'
import no from './text_strings/shared/nb.json'
import da from './text_strings/shared/da.json'
import fr from './text_strings/shared/fr.json'
import nl from './text_strings/shared/nl.json'
import fi from './text_strings/shared/fi.json'
import it from './text_strings/shared/it.json'
import es from './text_strings/shared/es.json'
import de from './text_strings/shared/de.json'
import {flatten} from './lib/flatten'

export const getFinLitQuestion = (
  testType: number,
  step: number,
  lang: string | undefined = 'en',
  currencyCode: string
) => {
  const textStrings = getSharedStrings(lang)
  return addCurrencyToGimiTestStrings(
    getText(`FinancialLiteracyTest${testType}.question_${step}`, [], textStrings),
    currencyCode
  )
}

export const getFinLitAnswer = (
  testType: number,
  step: number,
  lang: string | undefined = 'en',
  currencyCode: string
) => {
  const textStrings = getSharedStrings(lang)
  const answers = []
  for (let i = 0; i < 4; i++)
    answers.push({
      title: addCurrencyToGimiTestStrings(
        getText(`FinancialLiteracyTest${testType}.question_${step}_answer_${i + 1}`, [], textStrings),
        currencyCode
      ),
      valid: getValidFinLitAnswer(testType, step, i)
    })
  return answers
}

export const getCardQuestion = (step: number, lang = 'en', currencyCode: string): string => {
  const textStrings = getSharedStrings(lang)
  return getText(`CardTest.card_test_question_${step}`, [...getStringQuestionValues(step, currencyCode)], textStrings)
}

export const getCardAnswer = (
  step: number,
  lang = 'en',
  currencyCode: string
): Array<{title: string; valid: boolean}> => {
  const textStrings = getSharedStrings(lang)
  const answers = []
  for (let i = 0; i < 3; i++)
    answers.push({
      title: getText(
        `CardTest.card_test_question_${step}_answer_${i + 1}`,
        getStringAnswerValues(step, i, currencyCode),
        textStrings
      ),
      valid: getValidCardAnswer(step, i)
    })
  answers.push({
    title: getText('CardTest.card_test_answer_dont_know', [], textStrings),
    valid: false
  })
  return answers
}

export const getInfluencerPortalAnswer = (step: number): any => {
  if (step !== 1) return undefined
  return [
    {title: 'Instagram', valid: true},
    {title: 'Youtube', valid: true},
    {title: 'Snapchat', valid: true},
    {title: 'Musically', valid: true}
  ]
}

const getStringQuestionValues = (step: number, currencyCode: string) => {
  switch (step) {
    case 2:
      return [formatMoney(249, currencyCode), formatMoney(239, currencyCode)]
    case 7:
      return [formatMoney(99, currencyCode)]
    default:
      return []
  }
}

const getStringAnswerValues = (step: number, answer: number, currencyCode: string): Array<string> => {
  answer = answer + 1
  switch (true) {
    case step === 2 && (answer === 2 || answer === 3):
      return [formatMoney(10, currencyCode)]
    case step === 7:
      return [formatMoney(99, currencyCode)] // do for all answers
    default:
      return []
  }
}

function getValidFinLitAnswer(testNumber: number, step: number, answer: number): boolean {
  answer = answer + 1
  switch (testNumber) {
    case 1:
      switch (true) {
        case step === 1 && answer === 3:
          return true
        case step === 2 && answer === 1:
          return true
        case step === 3 && answer === 1:
          return true
        case step === 4 && answer === 2:
          return true
        case step === 5 && answer === 1:
          return true
        case step === 6 && answer === 4:
          return true
        case step === 7 && answer === 3:
          return true
        default:
          return false
      }
    case 2:
      switch (true) {
        case step === 1 && answer === 1:
          return true
        case step === 2 && answer === 4:
          return true
        case step === 3 && answer === 4:
          return true
        case step === 4 && answer === 3:
          return true
        case step === 5 && answer === 4:
          return true
        case step === 6 && answer === 1:
          return true
        case step === 7 && answer === 3:
          return true
        case step === 8 && answer === 2:
          return true
        case step === 9 && answer === 2:
          return true
        case step === 10 && answer === 2:
          return true
        default:
          return false
      }
    case 3:
      switch (true) {
        case step === 1 && answer === 4:
          return true
        case step === 2 && answer === 2:
          return true
        case step === 3 && answer === 3:
          return true
        case step === 4 && answer === 1:
          return true
        case step === 5 && answer === 1:
          return true
        case step === 6 && answer === 1:
          return true
        case step === 7 && answer === 3:
          return true
        case step === 8 && answer === 3:
          return true
        default:
          return false
      }
    default:
      return false
  }
}

const getValidCardAnswer = (step: number, answer: number): boolean => {
  answer = answer + 1
  switch (true) {
    case step === 1 && answer === 1:
      return true
    case step === 2 && answer === 3:
      return true
    case step === 3 && answer === 3:
      return true
    case step === 4 && answer === 1:
      return true
    case step === 5 && answer === 1:
      return true
    case step === 6 && answer === 2:
      return true
    case step === 7 && answer === 2:
      return true
    case step === 8 && answer === 3:
      return true
    case step === 9 && answer === 1:
      return true
    case step === 10 && answer === 3:
      return true
    default:
      return false
  }
}

const getText = (langKey: any, values: Array<string | number>, textStrings: any): string => {
  if (textStrings === undefined) return ''
  if (!textStrings || !langKey) return ''
  let text = textStrings[langKey]
  if (!text) return ''
  text = removeTranslationHelpers(text)
  text = text.trim()
  if (values)
    values.forEach((item, index) => {
      // $FlowFixMe //Needed 05.12.2017
      text = text.split(`%${index + 1}$d`).join(item)
    })
  text = text.charAt(0).toUpperCase() + text.slice(1)
  return text
}

const getSharedStrings = memoize((lang: string): object => {
  switch (lang.substring(0, 2)) {
    case 'sv':
      return flatten(sv)
    case 'da':
      return flatten(da)
    case 'nb':
    case 'no':
      return flatten(no)
    case 'fr':
      return flatten(fr)
    case 'nl':
      return flatten(nl)
    case 'fi':
      return flatten(fi)
    case 'it':
      return flatten(it)
    case 'es':
      return flatten(es)
    case 'de':
      return flatten(de)
    default:
      return flatten(en)
  }
})

export function addCurrencyToGimiTestStrings(text: string, currencyCode: string): string {
  if (!text) return ''
  let varsToConvert = text.match(/\$c{[^\d]*(\d+)[^\d]*\}/g)
  if (!!varsToConvert && Array.isArray(varsToConvert))
    varsToConvert.forEach((item) => {
      let value = item.match(/[0-9]+/)
      let matchedValue = 0
      if (value && value[0]) matchedValue = Number(value[0])
      let exchangeRates: {[key: string]: number} = ExchangeRates
      let exchangeRate = exchangeRates[currencyCode] || 1
      let formattedValue = formatMoney(Math.floor((matchedValue * exchangeRate) / 5) * 5, currencyCode)
      text = text.split(item).join(formattedValue)
    })
  return text
}
