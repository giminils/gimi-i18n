import {getDictionaryStrings} from '../index'
jest.disableAutomock()

const dictionaryStrings = getDictionaryStrings('en')
const _description = '_description'
const _variant = '_variant_'

test('should get dictionary strings', () => {
  expect(dictionaryStrings).toBeDefined()
})

Object.keys(dictionaryStrings).forEach((key: string) => {
  test('dictionary key should should have format dictionary_chapter_{number}_{word}', () => {
    const keyArr = key.split('_')
    expect(keyArr[0]).toBe('dictionary')
    expect(keyArr[1]).toBe('chapter')
    expect(parseInt(keyArr[2])).toBeGreaterThan(0)
  })

  switch (true) {
    case key.includes(_description): {
      test('dictionary description should have matching word', () => {
        expect(dictionaryStrings[key.replace(_description, '')]).toBeDefined()
      })
      break
    }
    case key.includes(_variant): {
      const baseKey = key.split(_variant)[0]
      test('dictionary variants should have matching word', () => {
        expect(dictionaryStrings[baseKey]).toBeDefined()
      })
      test('dictionary variants should have matching description', () => {
        expect(dictionaryStrings[`${baseKey}${_description}`]).toBeDefined()
      })
      break
    }
    default: {
      test('dictionary words should have matching description', () => {
        expect(dictionaryStrings[`${key}${_description}`]).toBeDefined()
      })
    }
  }
})
