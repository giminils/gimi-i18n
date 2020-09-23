import { getQuizzes, getStories, getAllLessons, getLesson} from '../school/Lessons'
jest.disableAutomock()
const QUIZ_TYPES = ['ROCKET', 'BANK']
describe('School tests', () => {
    // STORIES
    test('it should return number of stories', () => {
        expect(getStories().length).toBeGreaterThan(0)
    })
    test('stories should have multiple screens', () => {
        let sotries = getStories()
        sotries.map((story) => expect(story.screens.length).toBeGreaterThan(0))
    })
    test('story buttons should be array', () => {
        let sotries = getStories()
        sotries.map((story) => {
            story.screens.map((screen) => expect(screen.buttons.length).toBeGreaterThan(0))
        })
    })
    test('story should have titleLangKey', () => {
        let sotries = getStories()
        sotries.map((story) => {
            story.screens.map((screen) => expect(screen.titleLangKey).toBeDefined())
        })
    })
    test('story should have subTitleLangKey', () => {
        let sotries = getStories()
        sotries.map((story) => {
            story.screens.map((screen) => expect(screen.subTitleLangKey).toBeDefined())
        })
    })
    test('story should have imageUrl', () => {
        let sotries = getStories()
        sotries.map((story) => {
            story.screens.map((screen) => expect(screen.imageUrl).toBeDefined())
        })
    })
    test('story should have button langKeys', () => {
        let sotries = getStories()
        sotries.map((story) => {
            story.screens.map((screen) => {
                screen.buttons.map((button) => expect(button.langKey).toBeDefined())
            })
        })
    })

    test('stories should have uniqueIDs', () => {
        let sotries = getStories()
        let ids: Array<Number> = []
        sotries.map((story) => ids.push(story.id))
        expect([...new Set(ids)].length === ids.length).toBeTruthy()
    })
    
    // QUIZZES
    test('it should return number of quizzes', () => {
        expect(getQuizzes().length).toBeGreaterThan(0)
    })
    test('quizzes should have uniqueIDs', () => {
        let quizzes = getQuizzes()
        let ids: Array<Number> = []
        quizzes.map((quiz) => ids.push(quiz.id))
        expect([...new Set(ids)].length === ids.length).toBeTruthy()
    })
    test('quizzes should have an existing type', () => {
        let quizzes = getQuizzes()
        let types: Array<String> = []
        quizzes.map((quiz) => {
            expect(QUIZ_TYPES.indexOf(quiz.type)).toBeGreaterThan(-1)
        })
    })

    // LESSONS
    test('Should be able to pare story with quiz', () => {
        let stories = getStories()
        let quizzes = getQuizzes()
        stories.map((story) => {
            expect(quizzes.find(quiz => quiz.id === story.id)).toBeDefined()
        })
    })
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
