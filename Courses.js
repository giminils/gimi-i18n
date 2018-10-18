// @flow
let defaultCourse = {}
let defaultChapter = {
  icon: 'iconHeart'
}
export default [
  {
    ...defaultCourse,
    name: 'save',
    titleLangKey: 'course_save_title',
    subtitleLangKey: '',
    chapters: [
      {
        ...defaultChapter,
        chapterName: 'Saving for dummies',
        titleLangKey: 'save_chapter_1',
        content: {
          chapterIntroLangKey: 'save_chapter_1_intro',
          chapterSessionDescLangKey: 'save_chapter_1_session_desc',
          slideContent: [
            {
              titleLangKey: 'save_chapter_1_step_1_title',
              descLangKey: 'save_chapter_1_step_1_desc',
            }, 
            {
              titleLangKey: 'save_chapter_1_step_2_title',
              descLangKey: 'save_chapter_1_step_2_desc',
            },
            {
              titleLangKey: 'save_chapter_1_step_3_title',
              descLangKey: 'save_chapter_1_step_3_desc',
            }
          ]
        },
      },
      {
        ...defaultChapter,
        chapterName: 'Saving for dummies',
        titleLangKey: 'save_chapter_1',
        content: [

        ]
      }
    ]
  },
  {
    ...defaultCourse,
    name: 'earn',
    titleLangKey: 'course_earn_title',
    subtitleLangKey: '',
    chapters: [
      {
        ...defaultChapter,
        chapterName: 'Easy cash',
        titleLangKey: 'earn_chapter_1',
        content: [

        ]
      }
    ]
  },
  {
    ...defaultCourse,
    name: 'spend',
    titleLangKey: 'course_spend_title',
    subtitleLangKey: '',
    chapters: [
      {
        ...defaultChapter,
        chapterName: 'Spend like rich kids',
        titleLangKey: 'spend_chapter_1',
        content: [

        ]
      }
    ]
  }
]
