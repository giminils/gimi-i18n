import {getCourses} from '../index'
jest.disableAutomock()

let courses = getCourses()
let chapterIDs = []

courses.forEach(course => {
  let {chapters} = course
  chapters.map(chapter => chapterIDs.push(chapter.chapterID))
})

describe('Courses', () => {
  chapterIDs.forEach(chapterID => {
    it(`${chapterID} chapterID must be unique`, () => {
      let uniqueids = chapterIDs.filter(id => id === chapterID)
      expect(uniqueids.length).toEqual(1)
    })
  })
})
