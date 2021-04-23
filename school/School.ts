import * as Chapters from './Chapters.json'
import * as Lessons from './Lessons.json'
import * as Stories from './Stories.json'
import * as Challenges from './Challenges.json'
import * as Rockets from './Rockets.json'
import * as StorySnippets from './StorySnippets.json'

export const stories = Stories.data
export const challenges = Challenges.data
export const chapters = Chapters.data
export const lessons = Lessons.data
export const rockets = Rockets.data
export const storySnippets = StorySnippets.data

export let getAllLessons = () => {
  return lessons.map((lesson) => {
    let story = stories.find((story) => story.id === lesson.storyId)
    let challenge = challenges.find((challenge) => challenge.id === lesson.challengeId)
    const {id, type, isEnabled, titleLangKey, subtitleLangKey, imageUrl} = lesson
    return {id, type, isEnabled, titleLangKey, subtitleLangKey, imageUrl, story, challenge}
  })
}

export let getLesson = (id: number) => {
  let lessons = getAllLessons()
  return lessons.find((lesson) => lesson.id === id)
}

export let getAllChapters = () => {
  return chapters.map((chapter) => {
    const chapterLessons = lessons.filter((lesson) => chapter.lessonIds.indexOf(lesson.id) !== -1 && lesson.isEnabled)
    const rocket = chapter.rocketId ? getRocketById(chapter.rocketId) : undefined
    const storySnippet = chapter.storySnippetId ? getStorySnippetById(chapter.storySnippetId) : undefined
    return {...chapter, rocket, lessons: chapterLessons, storySnippet}
  })
}

export let getAllLessonsInChapter = (id: number) => {
  let chapter = chapters.find((chapter) => chapter.id === id)
  let lessons = getAllLessons()
  return lessons.filter((lesson) => {
    if (!chapter || !chapter.lessonIds) return []
    return chapter.lessonIds.indexOf(lesson.id) !== -1
  })
}

export let getChapter = (id: number) => {
  return chapters.find((chapter) => chapter.id === id)
}

export let getAvailableChapters = () => {
  return chapters.filter((chapter) => !chapter.isLocked)
}

export let getChapterByLessonId = (id: number) => {
  return chapters.find((chapter) => chapter.lessonIds.includes(id))
}

export let getRocketById = (id: number) => {
  return rockets.find((rocket) => rocket.id === id)
}

export let getChapterByRocketId = (id: number) => {
  return chapters.find((chapter) => chapter.rocketId && chapter.rocketId === id)
}

export let getStorySnippetById = (id: number) => {
  return storySnippets.find((storySnippet) => storySnippet.id === id)
}
