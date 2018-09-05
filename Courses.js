// @flow
let defaultCourse = {}
let defaultChapter = {}
export default [
  {
    ...defaultCourse,
    ...defaultChapter,
    'name': 'save',
    'titleLangKey': 'course_save_title',
    'subtitleLangKey': '',
    'chapters': [
      {
        'chapterName': 'Saving for dummies',
        'titleLangKey': 'save_chapter_1',
        'content': [

        ]
      }
    ]
  },
  {
    ...defaultCourse,
    ...defaultChapter,
    'name': 'earn',
    'titleLangKey': 'course_earn_title',
    'subtitleLangKey': '',
    'chapters': [
      {
        'chapterName': 'Easy cash',
        'titleLangKey': 'earn_chapter_1',
        'content': [

        ]
      }
    ]
  },
  {
    ...defaultCourse,
    ...defaultChapter,
    'name': 'spend',
    'titleLangKey': 'course_spend_title',
    'subtitleLangKey': '',
    'chapters': [
      {
        'chapterName': 'Spend like rich kids',
        'titleLangKey': 'spend_chapter_1',
        'content': [

        ]
      }
    ]
  }
]
