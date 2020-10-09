import {quizzes, stories, getAllLessons, getLesson} from '../school/School'
jest.disableAutomock()
const QUIZ_TYPES = ['ROCKET', 'BANK']

let warnStoryId = (story: { id: number }, prop: string) => {
    console.warn(`Story with id: ${story.id} having problems with: ${prop} `)
}

let warnQuizId = (Quiz: { id: number }, prop: string) => {
    console.warn(`Quiz with id: ${Quiz.id} having problems with: ${prop} `)
}
describe('School tests', () => {
    // STORIES
    test('it should return number of stories', () => {
        expect(stories.length).toBeGreaterThan(0)
    })
    test('stories should have multiple screens', () => {
        stories.map((story) => {
            if (story.screens.length === 0) warnStoryId(story, 'screens length')
            expect(story.screens.length).toBeGreaterThan(0)
        })
    })
    test('story buttons should be array', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                if (screen.buttons.length === 0) warnStoryId(story, 'button length')
                expect(screen.buttons.length).toBeGreaterThan(0)
            })
        })
    })
    test('story should have titleLangKey', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                if (!screen.titleLangKey) warnStoryId(story, 'titleLangKey')
                expect(screen.titleLangKey).toBeDefined()
            })
        })
    })
    test('story should have subTitleLangKey', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                if (!screen.subTitleLangKey) warnStoryId(story, 'subTitleLangKey')
                expect(screen.subTitleLangKey).toBeDefined()
            })
        })
    })
    test('story should have imageUrl', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                if (!screen.imageUrl) warnStoryId(story, 'imageUrl')
                expect(screen.imageUrl).toBeDefined()
            })
        })
    })
    test('story should have button langKey or imageUrl', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                screen.buttons.forEach((button: {langKey?: string, imageUrl?: string}) => {
                    if (!button.langKey || !button.imageUrl) warnStoryId(story, 'langKey')
                    expect(button.langKey || button.imageUrl).toBeDefined()
                })
            })
        })
    })
    test('story should have a type', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                if (!screen.type) warnStoryId(story, 'type')
                expect(screen.type).toBeDefined()
            })
        })
    })

    test('stories should have uniqueIDs', () => {
        let ids: Array<Number> = []
        stories.map((story) => ids.push(story.id))
        expect([...new Set(ids)].length === ids.length).toBeTruthy()
    })
    
    // QUIZZES
    test('it should return number of quizzes', () => {
        expect(quizzes.length).toBeGreaterThan(0)
    })
    test('quizzes should have uniqueIDs', () => {
        let ids: Array<Number> = []
        quizzes.map((quiz) => ids.push(quiz.id))
        expect([...new Set(ids)].length === ids.length).toBeTruthy()
    })
    test('quizzes should have an existing type', () => {
        let types: Array<String> = []
        quizzes.map((quiz) => {
            if (QUIZ_TYPES.indexOf(quiz.type) === -1) warnQuizId(quiz, 'type')
            expect(QUIZ_TYPES.indexOf(quiz.type)).toBeGreaterThan(-1)
        })
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
