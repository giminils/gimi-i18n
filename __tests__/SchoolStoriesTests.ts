import {stories} from '../school/School'
jest.disableAutomock()
const STORYSCREEN_TYPES = ['DEFAULT', 'PAUSE']

const warnStoryId = (story: {id: number}, prop: string) => {
  console.warn(`Story with id: ${story.id} having problems with: ${prop} `)
}

describe('School stories tests', () => {
  test('it should return number of stories', () => {
    expect(stories.length).toBeGreaterThan(0)
  })
  test('stories should have uniqueIDs', () => {
    let ids: Array<number> = []
    stories.map((story) => ids.push(story.id))
    expect([...new Set(ids)].length === ids.length).toBeTruthy()
  })
  stories.forEach((story) => {
    const {screens} = story
    test('stories should have multiple screens', () => {
      if (!screens || screens.length === 0) warnStoryId(story, 'screens length')
      expect(screens.length).toBeGreaterThan(0)
    })
    screens.forEach((screen) => {
      const {type, titleLangKey, subtitleLangKey, buttons} = screen
      test('story screen should have an existing type', () => {
        if (!type || STORYSCREEN_TYPES.indexOf(type) === -1) warnStoryId(story, 'type')
        expect(STORYSCREEN_TYPES.indexOf(type)).toBeGreaterThan(-1)
      })
      test('story screen should have one of: titleLangKey, subtitleLangKey', () => {
        if (!titleLangKey && !subtitleLangKey) warnStoryId(story, 'titleLangKey and subtitleLangKey')
        expect(titleLangKey || subtitleLangKey).toBeDefined()
      })
      test('story buttons should be array', () => {
        if (!buttons || buttons.length === 0) warnStoryId(story, 'button length')
        expect(buttons.length).toBeGreaterThan(0)
      })
      test('story button should have at least one of: langKey, imageUrl', () => {
        buttons.forEach((button: {langKey?: string; imageUrl?: string}) => {
          const {langKey, imageUrl} = button
          if (!langKey && !imageUrl) warnStoryId(story, 'button langKey and imageUrl')
          expect(langKey || imageUrl).toBeDefined()
        })
      })
    })
  })
})
