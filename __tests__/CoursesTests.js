import {getCourses} from '../index'

let courses = getCourses()
let chapterIDs = []

courses.forEach(course => {
  let {chapters} = course
  chapters.map(chapter => chapterIDs.push(chapter.chapterID))
})

chapterIDs.forEach(chapterID => {
  it(`${chapterID} chapterID must be unique`, () => {
    let uniqueids = chapterIDs.filter(id => id === chapterID)
    expect(uniqueids.length).toEqual(1)
  })
})
