import {rockets} from '../school/School'
jest.disableAutomock()

const warnRocketId = (rocket: {id: number}, prop: string) => {
  console.warn(`Rocket with id: ${rocket.id} having problems with: ${prop} `)
}

describe('School rocket tests', () => {
  test('it should return number of rockets', () => {
    expect(rockets.length).toBeGreaterThan(0)
  })
  test('rockets should have uniqueIDs', () => {
    let ids: Array<number> = []
    rockets.map((rocket) => ids.push(rocket.id))
    expect([...new Set(ids)].length === ids.length).toBeTruthy()
  })
  rockets.forEach((rocket) => {
    const {subtitleLangKey, screens} = rocket

    test('rockets should have subtitleLangKey', () => {
      if (!subtitleLangKey) warnRocketId(rocket, 'subtitleLangKey')
      expect(subtitleLangKey).toBeDefined()
    })

    test('rockets should have screens', () => {
      if (!screens || screens.length === 0) warnRocketId(rocket, 'screens')
      expect(screens).toBeDefined()
    })

    if (screens)
      screens.forEach((screen) => {
        const {buttons} = screen
        test('rockets screen should have buttons', () => {
          if (!buttons || buttons.length === 0) warnRocketId(rocket, 'buttons')
          expect(buttons).toBeDefined()
        })

        if (buttons) {
          test('buttons should have uniqueIDs', () => {
            let ids: Array<number> = []
            buttons.forEach((button) => ids.push(button.id))
            expect([...new Set(ids)].length === ids.length).toBeTruthy()
          })

          test('rockets screen should have exactly 1 correct button', () => {
            const correctAnwers = buttons.filter((button) => button.isCorrect === true).length
            if (correctAnwers !== 1) warnRocketId(rocket, 'correct answers')
            expect(correctAnwers).toBe(1)
          })

          buttons.forEach((button) => {
            test('buttons should have langKey', () => {
              if (!button.langKey) warnRocketId(rocket, 'button langKey')
              expect(button.langKey).toBeDefined()
            })
          })
        }
      })
  })
})
