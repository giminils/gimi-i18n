import {getAllLessons, getLesson} from '../school/School'
jest.disableAutomock()

describe('School tests', () => {
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
