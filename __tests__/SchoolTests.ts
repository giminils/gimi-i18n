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
    test('stories should have multiple screens', () => {
        stories.map((story) => {
            const {screens} = story
            if (!screens || screens.length === 0) warnStoryId(story, 'screens length')
            expect(screens.length).toBeGreaterThan(0)
        })
    })
    test('story screen should have one of: titleLangKey, subTitleLangKey', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                const {titleLangKey, subTitleLangKey} = screen
                if (!titleLangKey && !subTitleLangKey) warnStoryId(story, 'titleLangKey and subTitleLangKey')
                expect(titleLangKey || subTitleLangKey).toBeDefined()
            })
        })
    })
    test('story buttons should be array', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                const {buttons} = screen
                if (!buttons || buttons.length === 0) warnStoryId(story, 'button length')
                expect(buttons.length).toBeGreaterThan(0)
            })
        })
    })
    test('story button should have at least one of: langKey, imageUrl', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                const {buttons} = screen
                buttons.forEach((button: {langKey?: string, imageUrl?: string}) => {
                    const {langKey, imageUrl} = button
                    if (!langKey && !imageUrl) warnStoryId(story, 'button langKey and imageUrl')
                    expect(langKey || imageUrl).toBeDefined()
                })
            })
        })
    })
    test('story screen should have an existing type', () => {
        stories.map((story) => {
            story.screens.map((screen) => {
                const {type} = screen
                if (!type || STORYSCREEN_TYPES.indexOf(type) === -1) warnStoryId(story, 'type')
                expect(STORYSCREEN_TYPES.indexOf(type)).toBeGreaterThan(-1)
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
    test('challanges should have an existing type', () => {
        challanges.map((challange) => {
            const {type} = challange
            if (CHALLANGE_TYPES.indexOf(type) === -1) warnchallangeId(challange, 'type')
            expect(CHALLANGE_TYPES.indexOf(type)).toBeGreaterThan(-1)
        })
    })
    test('challanges should have screens or products', () => {
        challanges.map((challange) => {
            const {screens, products} = challange
            if((!screens || screens.length === 0) && (!products || products.length === 0)) warnchallangeId(challange, 'screens and products')
            expect(screens || products).toBeDefined()
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
