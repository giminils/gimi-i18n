import {getCourses} from '../index'
jest.disableAutomock()

const courses = getCourses()
const chapterIDs = []

courses.forEach(course => {
  const {chapters} = course
  chapters.map(chapter => chapterIDs.push(chapter.chapterID))
})

describe('Courses', () => {
  chapterIDs.forEach(chapterID => {
    it(`${chapterID} chapterID must be unique`, () => {
      const uniqueids = chapterIDs.filter(id => id === chapterID)
      expect(uniqueids).toHaveLength(1)
    })
  })
})
