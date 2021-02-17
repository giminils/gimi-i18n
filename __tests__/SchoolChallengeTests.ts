import {challenges} from '../school/School'
jest.disableAutomock()
const CHALLENGE_TYPES = ['ROCKET', 'BANK', 'QUIZ', 'CLICK_TO_CHOOSE_MULTIPLE', 'CLICK_TO_CHOOSE_ORDER']

let warnChallengeId = (challenge: { id: number }, prop: string) => {
  console.warn(`Challenge with id: ${challenge.id} having problems with: ${prop} `)
}
describe('School challenge tests', () => {
  test('it should return number of challenges', () => {
    expect(challenges.length).toBeGreaterThan(0)
  })
  test('challenges should have uniqueIDs', () => {
    let ids: Array<Number> = []
    challenges.map((challenge) => ids.push(challenge.id))
    expect([...new Set(ids)].length === ids.length).toBeTruthy()
  })
  challenges.map((challenge) => {
    const {type, screens, products} = challenge
    test('challenges should have an existing type', () => {
      if (CHALLENGE_TYPES.indexOf(type) === -1) warnChallengeId(challenge, 'type')
      expect(CHALLENGE_TYPES.indexOf(type)).toBeGreaterThan(-1)
    })
    switch (true) {
      case type === 'QUIZ':
        test('quiz challenges should have screens', () => {
          if ((!screens || screens.length === 0)) warnChallengeId(challenge, 'screens')
          expect(screens).toBeDefined()
        })
        if (screens) test('quiz challenge screen should have exactly 1 correct answer', () => {
          screens.forEach(({buttons}: {buttons: Array<Object>}) => {
            const correctAnwers = buttons.filter((button: {isCorrect?: boolean}) => button.isCorrect === true).length
            if (correctAnwers !== 1) warnChallengeId(challenge, 'correct answers')
            expect(correctAnwers).toBe(1)
          })
        })
        break
      case type === 'BANK':
        test('bank challenges should have products', () => {
          if (!products || products.length === 0) warnChallengeId(challenge, 'products')
          expect(products).toBeDefined()
        })
        if (products) test('bank challenge product price should be Int bigger than 0', () => {
          products.map(({price}: {price: number}) => {
            if (!price || !Number.isInteger(price) || price < 1) warnChallengeId(challenge, 'price')
            expect(!!price && Number.isInteger(price) && price > 0).toBeTruthy()
          })
        })
        break
      case type === 'CLICK_TO_CHOOSE_MULTIPLE' || type === 'CLICK_TO_CHOOSE_ORDER' : {
        test('click to choose multiple/in order challenges should have screens', () => {
          if ((!screens || screens.length === 0)) warnChallengeId(challenge, 'screens')
          expect(screens).toBeDefined()
        })
        if (screens) test('click to choose multiple/in order challenges screen should have at multiple buttons', () => {
          screens.forEach(({buttons}: {buttons: Array<Object>}) => {
            if (!buttons || buttons.length < 1) warnChallengeId(challenge, 'buttons')
            expect(buttons.length).toBeGreaterThan(1)
          })
        })
        if (screens) screens.forEach(({buttons}: {buttons: Array<Object>}) => {
          if (type === 'CLICK_TO_CHOOSE_MULTIPLE') test('click to choose multiple challenge screen should have at least 1 correct answer', () => {
            const isButtonsValid = buttons.some((button: {isCorrect?: boolean}) => button.isCorrect === true)
            if (!isButtonsValid) warnChallengeId(challenge, 'correct answers')
            expect(isButtonsValid).toBeTruthy()
          })
          let ids: Array<Number> = []
          test('click to choose multiple/in order challenges buttons should have id', () => {
            buttons.forEach((button: {id?: number}) => {
              ids.push(button.id ? button.id : 0)
              if (!button.id || button.id < 1) warnChallengeId(challenge, 'button id')
              expect(button.id).toBeGreaterThan(0)
            })
          })
          if (screens) test('click to choose multiple/in order challenges buttons should have unique id', () => {
            if ([...new Set(ids)].length !== ids.length) warnChallengeId(challenge, 'button unique ids')
            expect([...new Set(ids)].length === ids.length).toBeTruthy()
          })
        })
        break
      }
    }
  })
})
