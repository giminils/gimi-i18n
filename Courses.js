// @flow
let defaultCourse = {}
let defaultChapter = {
  icon: 'iconHeart'
}
export default [
  {
    ...defaultCourse,
    name: 'earn',
    titleLangKey: 'course_earn_title',
    subtitleLangKey: 'course_earn_subtitle',
    chapters: [
      {
        ...defaultChapter,
        chapterID: 'earn_chapter_1',
        icon: 'iconLamp',
        chapterName: 'Solving problems',
        titleLangKey: 'earn_chapter_1',
        content: {
          chapterIntroLangKey: 'earn_chapter_1_intro',
          chapterSessionDescLangKey: 'earn_chapter_1_desc',
          slideContent: [
            {
              titleLangKey: 'earn_chapter_1_step_1_title',
              descLangKey: 'earn_chapter_1_step_1_desc'
            },
            {
              titleLangKey: 'earn_chapter_1_step_2_title',
              descLangKey: 'earn_chapter_1_step_2_desc'
            },
            {
              titleLangKey: 'earn_chapter_1_step_3_title',
              descLangKey: 'earn_chapter_1_step_3_desc'
            },
            {
              titleLangKey: 'earn_chapter_1_step_4_title',
              descLangKey: 'earn_chapter_1_step_4_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'earn_chapter_2',
        icon: 'iconStore',
        chapterName: 'Selling cookies',
        titleLangKey: 'earn_chapter_2',
        content: {
          chapterIntroLangKey: 'earn_chapter_2_intro',
          chapterSessionDescLangKey: 'earn_chapter_2_desc',
          slideContent: [
            {
              titleLangKey: 'earn_chapter_2_step_1_title',
              descLangKey: 'earn_chapter_2_step_1_desc'
            },
            {
              titleLangKey: 'earn_chapter_2_step_2_title',
              descLangKey: 'earn_chapter_2_step_2_desc'
            },
            {
              titleLangKey: 'earn_chapter_2_step_3_title',
              descLangKey: 'earn_chapter_2_step_3_desc'
            },
            {
              titleLangKey: 'earn_chapter_2_step_4_title',
              descLangKey: 'earn_chapter_2_step_4_desc'
            },
            {
              titleLangKey: 'earn_chapter_2_step_5_title',
              descLangKey: 'earn_chapter_2_step_5_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'earn_chapter_3',
        icon: 'iconBroom',
        chapterName: 'Declutter challenge',
        titleLangKey: 'earn_chapter_3',
        content: {
          chapterIntroLangKey: 'earn_chapter_3_intro',
          chapterSessionDescLangKey: 'earn_chapter_3_desc',
          slideContent: [
            {
              titleLangKey: 'earn_chapter_3_step_1_title',
              descLangKey: 'earn_chapter_3_step_1_desc'
            },
            {
              titleLangKey: 'earn_chapter_3_step_2_title',
              descLangKey: 'earn_chapter_3_step_2_desc'
            },
            {
              titleLangKey: 'earn_chapter_3_step_3_title',
              descLangKey: 'earn_chapter_3_step_3_desc'
            }
          ]
        }
      }
    ]
  },
  {
    ...defaultCourse,
    name: 'save',
    titleLangKey: 'course_save_title',
    subtitleLangKey: 'course_save_subtitle',
    chapters: [
      {
        ...defaultChapter,
        chapterID: 'save_chapter_1',
        icon: 'iconPercent',
        chapterName: 'Intro to interest',
        titleLangKey: 'save_chapter_1',
        content: {
          chapterIntroLangKey: 'save_chapter_1_intro',
          chapterSessionDescLangKey: 'save_chapter_1_desc',
          slideContent: [
            {
              titleLangKey: 'save_chapter_1_step_1_title',
              descLangKey: 'save_chapter_1_step_1_desc'
            },
            {
              titleLangKey: 'save_chapter_1_step_2_title',
              descLangKey: 'save_chapter_1_step_2_desc'
            },
            {
              titleLangKey: 'save_chapter_1_step_3_title',
              descLangKey: 'save_chapter_1_step_3_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'save_chapter_2',
        icon: 'iconScissors',
        chapterName: 'Cutting back on sweets',
        titleLangKey: 'save_chapter_2',
        content: {
          chapterIntroLangKey: 'save_chapter_2_intro',
          chapterSessionDescLangKey: 'save_chapter_2_desc',
          slideContent: [
            {
              titleLangKey: 'save_chapter_2_step_1_title',
              descLangKey: 'save_chapter_2_step_1_desc'
            },
            {
              titleLangKey: 'save_chapter_2_step_2_title',
              descLangKey: 'save_chapter_2_step_2_desc'
            },
            {
              titleLangKey: 'save_chapter_2_step_3_title',
              descLangKey: 'save_chapter_2_step_3_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'save_chapter_3',
        icon: 'iconToiletPaper',
        chapterName: 'Toilet paper challenge',
        titleLangKey: 'save_chapter_3',
        content: {
          chapterIntroLangKey: 'save_chapter_3_intro',
          chapterSessionDescLangKey: 'save_chapter_3_desc',
          slideContent: [
            {
              titleLangKey: 'save_chapter_3_step_1_title',
              descLangKey: 'save_chapter_3_step_1_desc'
            },
            {
              titleLangKey: 'save_chapter_3_step_2_title',
              descLangKey: 'save_chapter_3_step_2_desc'
            },
            {
              titleLangKey: 'save_chapter_3_step_3_title',
              descLangKey: 'save_chapter_3_step_3_desc'
            },
            {
              titleLangKey: 'save_chapter_3_step_4_title',
              descLangKey: 'save_chapter_3_step_4_desc'
            },
            {
              titleLangKey: 'save_chapter_3_step_5_title',
              descLangKey: 'save_chapter_3_step_5_desc'
            }
          ]
        }
      }
    ]
  },
  {
    ...defaultCourse,
    name: 'spend',
    titleLangKey: 'course_spend_title',
    subtitleLangKey: 'course_spend_subtitle',
    chapters: [
      {
        ...defaultChapter,
        chapterID: 'spend_chapter_1',
        icon: 'iconBoat',
        chapterName: 'Family fun on a budget',
        titleLangKey: 'spend_chapter_1',
        content: {
          chapterIntroLangKey: 'spend_chapter_1_intro',
          chapterSessionDescLangKey: 'spend_chapter_1_desc',
          slideContent: [
            {
              titleLangKey: 'spend_chapter_1_step_1_title',
              descLangKey: 'spend_chapter_1_step_1_desc'
            },
            {
              titleLangKey: 'spend_chapter_1_step_2_title',
              descLangKey: 'spend_chapter_1_step_2_desc'
            },
            {
              titleLangKey: 'spend_chapter_1_step_3_title',
              descLangKey: 'spend_chapter_1_step_3_desc'
            },
            {
              titleLangKey: 'spend_chapter_1_step_4_title',
              descLangKey: 'spend_chapter_1_step_4_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'spend_chapter_2',
        icon: 'iconCartFull',
        chapterName: 'Craft a shoppig list',
        titleLangKey: 'spend_chapter_2',
        content: {
          chapterIntroLangKey: 'spend_chapter_2_intro',
          chapterSessionDescLangKey: 'spend_chapter_2_desc',
          slideContent: [
            {
              titleLangKey: 'spend_chapter_2_step_1_title',
              descLangKey: 'spend_chapter_2_step_1_desc'
            },
            {
              titleLangKey: 'spend_chapter_2_step_2_title',
              descLangKey: 'spend_chapter_2_step_2_desc'
            },
            {
              titleLangKey: 'spend_chapter_2_step_3_title',
              descLangKey: 'spend_chapter_2_step_3_desc'
            },
            {
              titleLangKey: 'spend_chapter_2_step_4_title',
              descLangKey: 'spend_chapter_2_step_4_desc'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        chapterID: 'spend_chapter_3',
        icon: 'iconFlipFlops',
        chapterName: 'Shopping for shoes',
        titleLangKey: 'spend_chapter_3',
        content: {
          chapterIntroLangKey: 'spend_chapter_3_intro',
          chapterSessionDescLangKey: 'spend_chapter_3_desc',
          slideContent: [
            {
              titleLangKey: 'spend_chapter_3_step_1_title',
              descLangKey: 'spend_chapter_3_step_1_desc'
            },
            {
              titleLangKey: 'spend_chapter_3_step_2_title',
              descLangKey: 'spend_chapter_3_step_2_desc'
            },
            {
              titleLangKey: 'spend_chapter_3_step_3_title',
              descLangKey: 'spend_chapter_3_step_3_desc'
            },
            {
              titleLangKey: 'spend_chapter_3_step_4_title',
              descLangKey: 'spend_chapter_3_step_4_desc'
            }
          ]
        }
      }
    ]
  }
]
