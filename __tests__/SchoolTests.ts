import {challanges, stories, getAllLessons, getLesson} from '../school/School'
jest.disableAutomock()
const STORYSCREEN_TYPES = ['DEFAULT', 'PAUSE']
const CHALLANGE_TYPES = ['ROCKET', 'BANK', 'QUIZ']

let warnStoryId = (story: { id: number }, prop: string) => {
  console.warn(`Story with id: ${story.id} having problems with: ${prop} `)
}

let warnchallangeId = (CHALLANGE: { id: number }, prop: string) => {
  console.warn(`CHALLANGE with id: ${CHALLANGE.id} having problems with: ${prop} `)
}
describe('School tests', () => {
  // STORIES
  test('it should return number of stories', () => {
    expect(stories.length).toBeGreaterThan(0)
  })
  test('stories should have uniqueIDs', () => {
    let ids: Array<Number> = []
    stories.map((story) => ids.push(story.id))
    expect([...new Set(ids)].length === ids.length).toBeTruthy()
  })
  stories.map((story) => {
    const {screens} = story
    test('stories should have multiple screens', () => {
      if (!screens || screens.length === 0) warnStoryId(story, 'screens length')
      expect(screens.length).toBeGreaterThan(0)
    })
    screens.map((screen) => {
      const {type, titleLangKey, subTitleLangKey, buttons} = screen
      test('story screen should have an existing type', () => {
        if (!type || STORYSCREEN_TYPES.indexOf(type) === -1) warnStoryId(story, 'type')
        expect(STORYSCREEN_TYPES.indexOf(type)).toBeGreaterThan(-1)
      })
      test('story screen should have one of: titleLangKey, subTitleLangKey', () => {
        if (!titleLangKey && !subTitleLangKey) warnStoryId(story, 'titleLangKey and subTitleLangKey')
        expect(titleLangKey || subTitleLangKey).toBeDefined()
      })
      test('story buttons should be array', () => {
        if (!buttons || buttons.length === 0) warnStoryId(story, 'button length')
        expect(buttons.length).toBeGreaterThan(0)
      })
      test('story button should have at least one of: langKey, imageUrl', () => {
        buttons.forEach((button: {langKey?: string, imageUrl?: string}) => {
          const {langKey, imageUrl} = button
          if (!langKey && !imageUrl) warnStoryId(story, 'button langKey and imageUrl')
          expect(langKey || imageUrl).toBeDefined()
        })
      })
    })
  })

  // challanges
  test('it should return number of challanges', () => {
    expect(challanges.length).toBeGreaterThan(0)
  })
  test('challanges should have uniqueIDs', () => {
    let ids: Array<Number> = []
    challanges.map((challange) => ids.push(challange.id))
    expect([...new Set(ids)].length === ids.length).toBeTruthy()
  })
  challanges.map((challange) => {
    const {type, screens, products} = challange
    test('challanges should have an existing type', () => {
      if (CHALLANGE_TYPES.indexOf(type) === -1) warnchallangeId(challange, 'type')
      expect(CHALLANGE_TYPES.indexOf(type)).toBeGreaterThan(-1)
    })
    switch (type) {
      case 'QUIZ':
        test('quiz challenges should have screens', () => {
          if ((!screens || screens.length === 0)) warnchallangeId(challange, 'screens')
          expect(screens).toBeDefined()
        })
        test('quiz challenge screen should have exactly 1 correct answer', () => {
          if (screens)
            screens.map((screen) => {
              const {buttons} = screen
              const correctAnwers = buttons.filter((button) => button.isCorrect === true).length
              if (correctAnwers !== 1) warnchallangeId(challange, 'correct answers')
              expect(correctAnwers).toBe(1)
            })
        })
        break
      case 'BANK':
        test('bank challenges should have products', () => {
          if (!products || products.length === 0) warnchallangeId(challange, 'products')
          expect(products).toBeDefined()
        })
        test('bank challenge product price should be Int bigger than 0', () => {
          if (products)
            products.map(({price}: {price: number}) => {
              if (!price || !Number.isInteger(price) || price < 1) warnchallangeId(challange, 'price')
              expect(!!price && Number.isInteger(price) && price > 0).toBeTruthy()
            })
        })
        break
    }
  })

  // LESSONS
  test('getAllLessons should return multiple lessons', () => {
    expect(getAllLessons().length).toBeGreaterThan(0)
  })
  test('getLesson should return single lesson from lessons', () => {
    let lessonIds = getAllLessons().map((lesson) => lesson.id)
    lessonIds.map((id) => {
      expect(getLesson(id)).toBeDefined()
    })
  })
})
