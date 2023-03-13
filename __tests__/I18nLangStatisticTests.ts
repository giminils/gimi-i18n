/* eslint jest/expect-expect: 0 */
import {getTextStrings, languageCodes, gimiWebLanguageCodes, languageCodesForTranslation} from '../index'
import {stringLengthStatistic, stringTranslationTags} from '../TestUtil'
let languageCodesHolder = languageCodes
import Slack from 'node-slack'

jest.disableAutomock()

describe('TextStrings', () => {
  test.skip('test should export in slack the length of text_strings', () => {
    // let stringLengthData: {status: string; data: Array<string>}
    let stringLengthData: any

    languageCodes.forEach((languageCode) => {
      stringLengthData = stringLengthStatistic(getTextStrings('en'), getTextStrings(languageCode), 'en', languageCode)
      const attachmentPayload = [
        {
          fallback: 'String lenght data',
          text:
            'Link to gtest "' +
            languageCode +
            '"  <https://gtesthub.com/Barnpengar/veckopengen-app-i18n-text-strings-/blob/master/text_strings/client/' +
            languageCode +
            '.json|Click here>',
          color: stringLengthData.status ? 'warning' : '#36a64f', // Can etesther be one of 'good', 'warning', 'danger', or any hex color code
          // Fields are displayed in a table on the message
          fields: stringLengthData.data
        }
      ]
      // https://gtesthub.com/Barnpengar/veckopengen-app-i18n-text-strings-/blob/master/text_strings/client/be.json
      if (stringLengthData.data.length > 1) SendToSlackStats(attachmentPayload, languageCode)
    })
  })

  test('test should show where we have PLZ_TRANSLATE', () => {
    const stringTagData: Array<any> = []
    const jsonDataTranslate: Array<any> = []
    const jsonEmmaTag: Array<any> = []

    const textStringsTypes = ['server', 'templates', 'client', 'share-image-generator', 'bot', 'gimi-web'] // 'moonshine'

    const textStrings: Record<string, any> = {}
    textStringsTypes.forEach((textStringsType) => {
      textStrings[textStringsType] = {}
    })
    textStringsTypes.forEach((textStringsType) => {
      if (textStringsType === 'gimi-web') languageCodesHolder = gimiWebLanguageCodes
      if (textStringsType !== 'gimi-web') languageCodesHolder = languageCodesForTranslation
      languageCodesHolder.forEach((lang) => {
        try {
          textStrings[textStringsType][lang] = require(`../text_strings/${textStringsType}/${lang}`)
        } catch (err) {
          const e = err as Error
          // eslint-disable-next-line no-console
          console.error(`Cant parse ${textStringsType}/${lang} ${e.message}`)
          throw err
        }
      })
    })
    // server and templates string data
    textStringsTypes.forEach((textStringsType) => {
      if (textStringsType === 'gimi-web') languageCodesHolder = gimiWebLanguageCodes
      if (textStringsType !== 'gimi-web') languageCodesHolder = languageCodesForTranslation
      languageCodesHolder.forEach((languageCode) => {
        stringTagData.push(
          stringTranslationTags(textStrings[textStringsType][languageCode], languageCode, textStringsType)
        )
      })
    })

    // get plzTranslate
    stringTagData.forEach((data) => {
      const path = data.path ? data.path : 'client'
      let isAdded = false
      if (data.plzTrans > 0) {
        for (let i = 0; i < jsonDataTranslate.length; i++)
          if (jsonDataTranslate[i].lang === data.lang) {
            jsonDataTranslate[i].path.push(path)
            jsonDataTranslate[i].count.push(data.plzTrans)
            jsonDataTranslate[i].link.push(
              '<https://gtesthub.com/Barnpengar/veckopengen-app-i18n-text-strings-/blob/master/text_strings/' +
                path +
                '/' +
                data.lang +
                '.json|Click>'
            )
            isAdded = true
          }

        if (!isAdded) {
          const displayObject: any = {
            lang: '',
            path: [],
            count: [],
            link: []
          }
          displayObject.lang = data.lang
          displayObject.path.push(path)
          displayObject.count.push(data.plzTrans)
          displayObject.link.push(
            '<https://gtesthub.com/Barnpengar/veckopengen-app-i18n-text-strings-/blob/master/text_strings/' +
              path +
              '/' +
              data.lang +
              '.json|Click>'
          )
          jsonDataTranslate.push(displayObject)
        }
      }
    })
    // get plz EMMA
    stringTagData.forEach((data) => {
      const path = data.path ? data.path : 'client'
      let isAdded = false
      if (data.emmaTag > 0) {
        for (let i = 0; i < jsonEmmaTag.length; i++)
          if (jsonEmmaTag[i].lang === data.lang) {
            jsonEmmaTag[i].path.push(path)
            jsonEmmaTag[i].count.push(data.emmaTag)
            jsonEmmaTag[i].link.push(
              '<https://gtesthub.com/Barnpengar/veckopengen-app-i18n-text-strings-/blob/master/text_strings/' +
                path +
                '/' +
                data.lang +
                '.json|Click>'
            )
            isAdded = true
          }

        if (!isAdded) {
          const displayObject: any = {
            lang: '',
            path: [],
            count: [],
            link: []
          }
          displayObject.lang = data.lang
          displayObject.path.push(path)
          displayObject.count.push(data.emmaTag)
          displayObject.link.push(
            '<https://gtesthub.com/Barnpengar/veckopengen-app-i18n-text-strings-/blob/master/text_strings/' +
              path +
              '/' +
              data.lang +
              '.json|Click>'
          )
          jsonEmmaTag.push(displayObject)
        }
      }
    })
    let text = `PLZ_TRANSLATE
    ${jsonDataTranslate.map((i) => JSON.stringify(i)).join('\n')}`
    const textEmma = `Found Emma ${jsonEmmaTag.map((i) => JSON.stringify(i)).join('\n')}`
    // eslint-disable-next-line

    text = text.replace(/['"]+/g, '')

    if (jsonEmmaTag.length > 0) SendToNonTech(textEmma)

    SendToSlackTagStats(text)
  })
})

const SendToSlackStats = (attachmentPayload: any, languageCode?: string) => {
  const slack = new Slack('https://hooks.slack.com/services/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')
  slack.send({
    text:
      'i18n Language files wtesth languageCode "' +
      languageCode +
      '" are more than 25% longer then their English counter parts',
    channel: '#i18n_translation_stat',
    username: 'I18nLangStatistics',
    icon_emoji: ':bread:',
    attachments: attachmentPayload,
    unfurl_links: true,
    link_names: 1
  })
}
const SendToSlackTagStats = (text: any, languageCode?: string) => {
  const slack = new Slack('https://hooks.slack.com/services/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')
  slack.send({
    text,
    channel: '#i18n_translation_tags',
    username: 'I18nLangStatistics',
    icon_emoji: ':ramen:',
    attachments: [],
    unfurl_links: true,
    link_names: 1
  })
}

const SendToNonTech = (text: any, languageCode?: string) => {
  const slack = new Slack('https://hooks.slack.com/services/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')
  const attachmentPayload = [
    {
      fallback: 'Found EMMA',
      text: text,
      color: 'warning' // Can etesther be one of 'good', 'warning', 'danger', or any hex color code
      // Fields are displayed in a table on the message
    }
  ]
  slack.send({
    text: 'Found Emma in i18n plz fix',
    channel: '#travis-non-tech',
    username: 'I18nLangStatistics',
    icon_emoji: ':robot_face:',
    attachments: attachmentPayload,
    unfurl_links: true,
    link_names: 1
  })
}
