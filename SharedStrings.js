// @flow
import en from './text_strings/shared/en.json'
import Accounting from 'accounting'
import {removeTranslationHelpers} from './index'
// import da from './text_strings/shared/da.json'
// import fi from './text_strings/shared/fi.json'
// import is from './text_strings/shared/is.json'
import sv from './text_strings/shared/sv.json'
// import fr from './text_strings/shared/fr.json'
// import nl from './text_strings/shared/nl.json'
// import no from './text_strings/shared/nb.json'
// import be from './text_strings/shared/be.json'
// import it from './text_strings/shared/it.json'
// import es from './text_strings/shared/es.json'
// import de from './text_strings/shared/de.json'
// import et from './text_strings/shared/et.json'

export const getCardQuestion = (step: number, lang: string = 'en', currencyConfig: Object): string => {
  const textStrings = getSharedStrings(lang)
  return getText(`card_test_question_${step}`, [...getStringQuestionValues(step, currencyConfig)], textStrings)
}

export const getInfluencerPortalAnswer = (step: number, lang: string = 'en'): * => {
  if (step !== 1) return undefined
  return [{title: 'Instagram', valid: true}, {title: 'Youtube', valid: true}, {title: 'Snapchat', valid: true}, {title: 'Musically', valid: true}]
}

export const getCardAnswer = (step: number, lang: string = 'en', currencyConfig: Object): Array<Object> => {
  const textStrings = getSharedStrings(lang)
  const answers = []
  for (let i = 0; i < 3; i++) answers.push({title: getText(`card_test_question_${step}_answer_${i + 1}`, [getStringAnswerValues(step, i, currencyConfig)], textStrings), valid: getValidCardAnswer(step, i)})
  answers.push({title: getText('card_test_answer_dont_know', [], textStrings), valid: false})
  return answers
}

const getStringQuestionValues = (step: number, config: Object) => {
  switch (step) {
    case 2: return [Accounting.formatMoney(249, config.suffix, config.numberOfDecimals, '', ',', '%v %s'), Accounting.formatMoney(239, config.suffix, config.numberOfDecimals, '', ',', '%v %s')]
    case 7: return [Accounting.formatMoney(99, config.suffix, config.numberOfDecimals, '', ',', '%v %s')]
    default: return []
  }
}

const getStringAnswerValues = (step: number, answer: number, config: Object) => {
  answer = answer + 1
  switch (true) {
    case step === 2 && (answer === 2 || answer === 3): return [Accounting.formatMoney(10, config.suffix, config.numberOfDecimals, '', ',', '%v %s')]
    case step === 7: return [Accounting.formatMoney(99, config.suffix, config.numberOfDecimals, '', ',', '%v %s')] // do for all answers
    default: return []
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
    default: return false
  }
}

const getSharedStrings = (lang: string) => {
  switch (lang.substring(0, 2)) {
    case 'sv' : return sv
    /* case 'da' : return da
    case 'nb' :
    case 'nn' : return no
    case 'fr' : return fr
    case 'nl' : return nl
    case 'be' : return be
    case 'fi' : return fi
    case 'it' : return it
    case 'es' : return es
    case 'de' : return de
    case 'is' : return is
    case 'et' : return et */
    default : return en
  }
}

const getText = (langKey: *, values?: Array<*>, textStrings: *): string => {
  if (textStrings === undefined) return ''
  if (!textStrings || !langKey) return ''
  let text = textStrings[langKey]
  if (!text) return ''
  text = removeTranslationHelpers(text)
  text = text.trim()
  if (values) values.forEach((item, index) => {
    // $FlowFixMe //Needed 05.12.2017
    text = text.split(`%${index + 1}$d`).join(item)
  })
  text = text.charAt(0).toUpperCase() + text.slice(1)
  return text
}
