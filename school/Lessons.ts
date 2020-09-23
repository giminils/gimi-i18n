import * as Stories from './Stories.json'
import * as Quizzes from './Quizzes.json'

export let getStories = () => Stories.data

export let getQuizzes = () => Quizzes.data

export let getAllLessons = () => {
    let stories = getStories()
    let quizzes = getQuizzes()
    return stories.map((story) => {
        let quizForStory = quizzes.find(quiz => quiz.id == story.id)
        return {id: story.id, isEnabled: story.isEnabled, story, quiz: quizForStory}
    })
}

export let getLesson = (id: number) => {
    let lessons = getAllLessons()
    return lessons.find((lesson) => lesson.id === id)
}