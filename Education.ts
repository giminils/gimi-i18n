/**
 * This is an updated take on education courses and has replaced courses.js!
 */

const defaultCourse = {}
const defaultChapter = {
  icon: 'iconHeart',
  isPremium: false
}
const EDUCATION_STATIC_PATH = '/static/education/'

export default [
  {
    ...defaultCourse,
    name: 'earn',
    titleLangKey: 'course_earn_title',
    subtitleLangKey: 'course_earn_subtitle',
    chapters: [
      {
        ...defaultChapter,
        available: true,
        chapterID: 'earn_chapter_1',
        icon: 'iconLamp',
        chapterName: 'Solving problems',
        titleLangKey: 'earn_chapter_1',
        content: {
          chapterIntroLangKey: 'earn_chapter_1_intro',
          chapterSessionDescLangKey: 'earn_chapter_1_desc',
          image: EDUCATION_STATIC_PATH + 'earn/earnChapter1Image0.png', // NEW, doesnt have to be set. Will try to default to correct static if not set
          forAgesLangKey: 'earn_chapter_1_age',
          ageAdaptionLangKey: 'earn_chapter_1_age_adaption',
          learningOutcomesLangKey: 'earn_chapter_1_learning_outcome',
          onCompletion: 'earn_chapter_1_on_completion',
          extras: 'earn_chapter_1_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              image: EDUCATION_STATIC_PATH + 'earn/earnChapter1Image0.png', // NEW, doesnt have to be set. Will try to default to correct static if not set
              titleLangKey: 'earn_chapter_1_step_1_title',
              descLangKey: 'earn_chapter_1_step_1_desc',
              ideaLangKey: 'earn_chapter_1_step_1_idea'
            },
            {
              titleLangKey: 'earn_chapter_1_step_2_title',
              descLangKey: 'earn_chapter_1_step_2_desc',
              ideaLangKey: 'earn_chapter_1_step_2_idea'
            },
            {
              titleLangKey: 'earn_chapter_1_step_3_title',
              descLangKey: 'earn_chapter_1_step_3_desc',
              ideaLangKey: 'earn_chapter_1_step_3_idea'
            },
            {
              titleLangKey: 'earn_chapter_1_step_4_title',
              descLangKey: 'earn_chapter_1_step_4_desc',
              ideaLangKey: 'earn_chapter_1_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'earn_chapter_2',
        icon: 'iconStore',
        chapterName: 'Selling cookies',
        titleLangKey: 'earn_chapter_2',
        content: {
          chapterIntroLangKey: 'earn_chapter_2_intro',
          chapterSessionDescLangKey: 'earn_chapter_2_desc',
          forAgesLangKey: 'earn_chapter_2_age',
          ageAdaptionLangKey: 'earn_chapter_2_age_adaption',
          learningOutcomesLangKey: 'earn_chapter_2_learning_outcome',
          onCompletion: 'earn_chapter_2_on_completion',
          extras: 'earn_chapter_2_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'earn_chapter_2_step_1_title',
              descLangKey: 'earn_chapter_2_step_1_desc',
              ideaLangKey: 'earn_chapter_2_step_1_idea'
            },
            {
              titleLangKey: 'earn_chapter_2_step_2_title',
              descLangKey: 'earn_chapter_2_step_2_desc',
              ideaLangKey: 'earn_chapter_2_step_2_idea'
            },
            {
              titleLangKey: 'earn_chapter_2_step_3_title',
              descLangKey: 'earn_chapter_2_step_3_desc',
              ideaLangKey: 'earn_chapter_2_step_3_idea'
            },
            {
              titleLangKey: 'earn_chapter_2_step_4_title',
              descLangKey: 'earn_chapter_2_step_4_desc',
              ideaLangKey: 'earn_chapter_2_step_4_idea'
            },
            {
              titleLangKey: 'earn_chapter_2_step_5_title',
              descLangKey: 'earn_chapter_2_step_5_desc',
              ideaLangKey: 'earn_chapter_2_step_5_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'earn_chapter_3',
        icon: 'iconBroom',
        chapterName: 'Declutter challenge',
        titleLangKey: 'earn_chapter_3',
        content: {
          chapterIntroLangKey: 'earn_chapter_3_intro',
          chapterSessionDescLangKey: 'earn_chapter_3_desc',
          forAgesLangKey: 'earn_chapter_3_age',
          ageAdaptionLangKey: 'earn_chapter_3_age_adaption',
          learningOutcomesLangKey: 'earn_chapter_3_learning_outcome',
          onCompletion: 'earn_chapter_3_on_completion',
          extras: 'earn_chapter_3_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'earn_chapter_3_step_1_title',
              descLangKey: 'earn_chapter_3_step_1_desc',
              ideaLangKey: 'earn_chapter_3_step_1_idea'
            },
            {
              titleLangKey: 'earn_chapter_3_step_2_title',
              descLangKey: 'earn_chapter_3_step_2_desc',
              ideaLangKey: 'earn_chapter_3_step_2_idea'
            },
            {
              titleLangKey: 'earn_chapter_3_step_3_title',
              descLangKey: 'earn_chapter_3_step_3_desc',
              ideaLangKey: 'earn_chapter_3_step_3_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'earn_chapter_4',
        icon: 'iconChef',
        chapterName: 'Iterests and skills',
        titleLangKey: 'earn_chapter_4',
        content: {
          chapterIntroLangKey: 'earn_chapter_4_intro',
          chapterSessionDescLangKey: 'earn_chapter_4_desc',
          forAgesLangKey: 'earn_chapter_4_age',
          ageAdaptionLangKey: 'earn_chapter_4_age_adaption',
          learningOutcomesLangKey: 'earn_chapter_4_learning_outcome',
          onCompletion: 'earn_chapter_4_on_completion',
          extras: 'earn_chapter_4_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'earn_chapter_4_step_1_title',
              descLangKey: 'earn_chapter_4_step_1_desc',
              ideaLangKey: 'earn_chapter_4_step_1_idea'
            },
            {
              titleLangKey: 'earn_chapter_4_step_2_title',
              descLangKey: 'earn_chapter_4_step_2_desc',
              ideaLangKey: 'earn_chapter_4_step_2_idea'
            },
            {
              titleLangKey: 'earn_chapter_4_step_3_title',
              descLangKey: 'earn_chapter_4_step_3_desc',
              ideaLangKey: 'earn_chapter_4_step_3_idea'
            },
            {
              titleLangKey: 'earn_chapter_4_step_4_title',
              descLangKey: 'earn_chapter_4_step_4_desc',
              ideaLangKey: 'earn_chapter_4_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: false,
        chapterID: 'earn_chapter_5',
        icon: 'iconMedalFirst',
        chapterName: 'Job spotting',
        titleLangKey: 'earn_chapter_5',
        content: {
          chapterIntroLangKey: 'earn_chapter_5_intro',
          chapterSessionDescLangKey: 'earn_chapter_5_desc',
          forAgesLangKey: 'earn_chapter_5_age',
          ageAdaptionLangKey: 'earn_chapter_5_age_adaption',
          learningOutcomesLangKey: 'earn_chapter_5_learning_outcome',
          onCompletion: 'earn_chapter_5_on_completion',
          extras: 'earn_chapter_5_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'earn_chapter_5_step_1_title',
              descLangKey: 'earn_chapter_5_step_1_desc',
              ideaLangKey: 'earn_chapter_5_step_1_idea'
            },
            {
              titleLangKey: 'earn_chapter_5_step_2_title',
              descLangKey: 'earn_chapter_5_step_2_desc',
              ideaLangKey: 'earn_chapter_5_step_2_idea'
            },
            {
              titleLangKey: 'earn_chapter_5_step_3_title',
              descLangKey: 'earn_chapter_5_step_3_desc',
              ideaLangKey: 'earn_chapter_5_step_3_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        onlyAvailableInCountries: ['UK', 'GB'],
        chapterID: 'earn_chapter_6',
        icon: 'iconMedalFirst',
        chapterName: 'Top that job',
        titleLangKey: 'earn_chapter_6',
        content: {
          chapterIntroLangKey: 'earn_chapter_6_intro',
          chapterSessionDescLangKey: 'earn_chapter_6_desc',
          forAgesLangKey: 'earn_chapter_6_age',
          ageAdaptionLangKey: 'earn_chapter_6_age_adaption',
          learningOutcomesLangKey: 'earn_chapter_6_learning_outcome',
          onCompletion: 'earn_chapter_6_on_completion',
          extras: 'earn_chapter_6_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'earn_chapter_6_step_1_title',
              descLangKey: 'earn_chapter_6_step_1_desc',
              ideaLangKey: 'earn_chapter_6_step_1_idea'
            },
            {
              titleLangKey: 'earn_chapter_6_step_2_title',
              descLangKey: 'earn_chapter_6_step_2_desc'
            },
            {
              titleLangKey: 'earn_chapter_6_step_3_title',
              descLangKey: 'earn_chapter_6_step_3_desc',
              ideaLangKey: 'earn_chapter_6_step_3_idea'
            },
            {
              titleLangKey: 'earn_chapter_6_step_4_title',
              descLangKey: 'earn_chapter_6_step_4_desc',
              ideaLangKey: 'earn_chapter_6_step_4_idea'
            },
            {
              titleLangKey: 'earn_chapter_6_step_5_title',
              descLangKey: 'earn_chapter_6_step_5_desc',
              ideaLangKey: 'earn_chapter_6_step_5_idea'
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
        available: true,
        chapterID: 'save_chapter_1',
        icon: 'iconPercent',
        chapterName: 'Intro to interest',
        titleLangKey: 'save_chapter_1',
        content: {
          chapterIntroLangKey: 'save_chapter_1_intro',
          chapterSessionDescLangKey: 'save_chapter_1_desc',
          forAgesLangKey: 'save_chapter_1_age',
          ageAdaptionLangKey: 'save_chapter_1_age_adaption',
          learningOutcomesLangKey: 'save_chapter_1_learning_outcome',
          onCompletion: 'save_chapter_1_on_completion',
          extras: 'save_chapter_1_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'save_chapter_1_step_1_title',
              descLangKey: 'save_chapter_1_step_1_desc',
              ideaLangKey: 'save_chapter_1_step_1_idea'
            },
            {
              titleLangKey: 'save_chapter_1_step_2_title',
              descLangKey: 'save_chapter_1_step_2_desc',
              ideaLangKey: 'save_chapter_1_step_2_idea'
            },
            {
              titleLangKey: 'save_chapter_1_step_3_title',
              descLangKey: 'save_chapter_1_step_3_desc',
              ideaLangKey: 'save_chapter_1_step_3_idea'
            },
            {
              titleLangKey: 'save_chapter_1_step_4_title',
              descLangKey: 'save_chapter_1_step_4_desc',
              ideaLangKey: 'save_chapter_1_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'save_chapter_2',
        icon: 'iconScissors',
        chapterName: 'Cutting back on sweets',
        titleLangKey: 'save_chapter_2',
        content: {
          chapterIntroLangKey: 'save_chapter_2_intro',
          chapterSessionDescLangKey: 'save_chapter_2_desc',
          forAgesLangKey: 'save_chapter_2_age',
          ageAdaptionLangKey: 'save_chapter_2_age_adaption',
          learningOutcomesLangKey: 'save_chapter_2_learning_outcome',
          onCompletion: 'save_chapter_2_on_completion',
          extras: 'save_chapter_2_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'save_chapter_2_step_1_title',
              descLangKey: 'save_chapter_2_step_1_desc',
              ideaLangKey: 'save_chapter_2_step_1_idea'
            },
            {
              titleLangKey: 'save_chapter_2_step_2_title',
              descLangKey: 'save_chapter_2_step_2_desc',
              ideaLangKey: 'save_chapter_2_step_2_idea'
            },
            {
              titleLangKey: 'save_chapter_2_step_3_title',
              descLangKey: 'save_chapter_2_step_3_desc',
              ideaLangKey: 'save_chapter_2_step_3_idea'
            },
            {
              titleLangKey: 'save_chapter_2_step_4_title',
              descLangKey: 'save_chapter_2_step_4_desc',
              ideaLangKey: 'save_chapter_2_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'save_chapter_3',
        icon: 'iconToiletPaper',
        chapterName: 'Toilet paper challenge',
        titleLangKey: 'save_chapter_3',
        content: {
          chapterIntroLangKey: 'save_chapter_3_intro',
          chapterSessionDescLangKey: 'save_chapter_3_desc',
          forAgesLangKey: 'save_chapter_3_age',
          ageAdaptionLangKey: 'save_chapter_3_age_adaption',
          learningOutcomesLangKey: 'save_chapter_3_learning_outcome',
          onCompletion: 'save_chapter_3_on_completion',
          extras: 'save_chapter_3_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'save_chapter_3_step_1_title',
              descLangKey: 'save_chapter_3_step_1_desc',
              ideaLangKey: 'save_chapter_3_step_1_idea'
            },
            {
              titleLangKey: 'save_chapter_3_step_2_title',
              descLangKey: 'save_chapter_3_step_2_desc',
              ideaLangKey: 'save_chapter_3_step_2_idea'
            },
            {
              titleLangKey: 'save_chapter_3_step_3_title',
              descLangKey: 'save_chapter_3_step_3_desc',
              ideaLangKey: 'save_chapter_3_step_3_idea'
            },
            {
              titleLangKey: 'save_chapter_3_step_4_title',
              descLangKey: 'save_chapter_3_step_4_desc',
              ideaLangKey: 'save_chapter_3_step_4_idea'
            },
            {
              titleLangKey: 'save_chapter_3_step_5_title',
              descLangKey: 'save_chapter_3_step_5_desc',
              ideaLangKey: 'save_chapter_3_step_5_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'save_chapter_4',
        icon: 'iconRocket',
        chapterName: 'Start saving for a dream',
        titleLangKey: 'save_chapter_4',
        content: {
          chapterIntroLangKey: 'save_chapter_4_intro',
          chapterSessionDescLangKey: 'save_chapter_4_desc',
          forAgesLangKey: 'save_chapter_4_age',
          ageAdaptionLangKey: 'save_chapter_4_age_adaption',
          learningOutcomesLangKey: 'save_chapter_4_learning_outcome',
          onCompletion: 'save_chapter_4_on_completion',
          extras: 'save_chapter_4_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'save_chapter_4_step_1_title',
              descLangKey: 'save_chapter_4_step_1_desc',
              ideaLangKey: 'save_chapter_4_step_1_idea'
            },
            {
              titleLangKey: 'save_chapter_4_step_2_title',
              descLangKey: 'save_chapter_4_step_2_desc',
              ideaLangKey: 'save_chapter_4_step_2_idea'
            },
            {
              titleLangKey: 'save_chapter_4_step_3_title',
              descLangKey: 'save_chapter_4_step_3_desc',
              ideaLangKey: 'save_chapter_4_step_3_idea'
            },
            {
              titleLangKey: 'save_chapter_4_step_4_title',
              descLangKey: 'save_chapter_4_step_4_desc',
              ideaLangKey: 'save_chapter_4_step_4_idea'
            },
            {
              titleLangKey: 'save_chapter_4_step_5_title',
              descLangKey: 'save_chapter_4_step_5_desc',
              ideaLangKey: 'save_chapter_4_step_5_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: false,
        chapterID: 'save_chapter_5',
        icon: 'iconMagicWand',
        chapterName: 'Introduce compound interest',
        titleLangKey: 'save_chapter_5',
        content: {
          chapterIntroLangKey: 'save_chapter_5_intro',
          chapterSessionDescLangKey: 'save_chapter_5_desc',
          forAgesLangKey: 'save_chapter_5_age',
          ageAdaptionLangKey: 'save_chapter_5_age_adaption',
          learningOutcomesLangKey: 'save_chapter_5_learning_outcome',
          onCompletion: 'save_chapter_5_on_completion',
          extras: 'save_chapter_5_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'save_chapter_5_step_1_title',
              descLangKey: 'save_chapter_5_step_1_desc',
              ideaLangKey: 'save_chapter_5_step_1_idea'
            },
            {
              titleLangKey: 'save_chapter_5_step_2_title',
              descLangKey: 'save_chapter_5_step_2_desc',
              ideaLangKey: 'save_chapter_5_step_2_idea'
            },
            {
              titleLangKey: 'save_chapter_5_step_3_title',
              descLangKey: 'save_chapter_5_step_3_desc',
              ideaLangKey: 'save_chapter_5_step_3_idea'
            },
            {
              titleLangKey: 'save_chapter_5_step_4_title',
              descLangKey: 'save_chapter_5_step_4_desc',
              ideaLangKey: 'save_chapter_5_step_4_idea'
            },
            {
              titleLangKey: 'save_chapter_5_step_5_title',
              descLangKey: 'save_chapter_5_step_5_desc',
              ideaLangKey: 'save_chapter_5_step_5_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        onlyAvailableInCountries: ['UK', 'GB'],
        chapterID: 'save_chapter_6',
        icon: 'iconMagicWand',
        chapterName: 'Track my cash',
        titleLangKey: 'save_chapter_6',
        content: {
          chapterIntroLangKey: 'save_chapter_6_intro',
          chapterSessionDescLangKey: 'save_chapter_6_desc',
          forAgesLangKey: 'save_chapter_6_age',
          ageAdaptionLangKey: 'save_chapter_6_age_adaption',
          learningOutcomesLangKey: 'save_chapter_6_learning_outcome',
          onCompletion: 'save_chapter_6_on_completion',
          extras: 'save_chapter_6_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'save_chapter_6_step_1_title',
              descLangKey: 'save_chapter_6_step_1_desc',
              ideaLangKey: 'save_chapter_6_step_1_idea'
            },
            {
              titleLangKey: 'save_chapter_6_step_2_title',
              descLangKey: 'save_chapter_6_step_2_desc',
              ideaLangKey: 'save_chapter_6_step_2_idea'
            },
            {
              titleLangKey: 'save_chapter_6_step_3_title',
              descLangKey: 'save_chapter_6_step_3_desc',
              ideaLangKey: 'save_chapter_6_step_3_idea'
            },
            {
              titleLangKey: 'save_chapter_6_step_4_title',
              descLangKey: 'save_chapter_6_step_4_desc',
              ideaLangKey: 'save_chapter_6_step_4_idea'
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
        available: true,
        chapterID: 'spend_chapter_1',
        icon: 'iconBoat',
        chapterName: 'Family fun on a budget',
        titleLangKey: 'spend_chapter_1',
        content: {
          chapterIntroLangKey: 'spend_chapter_1_intro',
          chapterSessionDescLangKey: 'spend_chapter_1_desc',
          forAgesLangKey: 'spend_chapter_1_age',
          ageAdaptionLangKey: 'spend_chapter_1_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_1_learning_outcome',
          onCompletion: 'spend_chapter_1_on_completion',
          extras: 'spend_chapter_1_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_1_step_1_title',
              descLangKey: 'spend_chapter_1_step_1_desc',
              ideaLangKey: 'spend_chapter_1_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_1_step_2_title',
              descLangKey: 'spend_chapter_1_step_2_desc',
              ideaLangKey: 'spend_chapter_1_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_1_step_3_title',
              descLangKey: 'spend_chapter_1_step_3_desc',
              ideaLangKey: 'spend_chapter_1_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_1_step_4_title',
              descLangKey: 'spend_chapter_1_step_4_desc',
              ideaLangKey: 'spend_chapter_1_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'spend_chapter_2',
        icon: 'iconCartFull',
        chapterName: 'Craft a shoppig list',
        titleLangKey: 'spend_chapter_2',
        content: {
          chapterIntroLangKey: 'spend_chapter_2_intro',
          chapterSessionDescLangKey: 'spend_chapter_2_desc',
          forAgesLangKey: 'spend_chapter_2_age',
          ageAdaptionLangKey: 'spend_chapter_2_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_2_learning_outcome',
          onCompletion: 'spend_chapter_2_on_completion',
          extras: 'spend_chapter_2_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_2_step_1_title',
              descLangKey: 'spend_chapter_2_step_1_desc',
              ideaLangKey: 'spend_chapter_2_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_2_step_2_title',
              descLangKey: 'spend_chapter_2_step_2_desc',
              ideaLangKey: 'spend_chapter_2_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_2_step_3_title',
              descLangKey: 'spend_chapter_2_step_3_desc',
              ideaLangKey: 'spend_chapter_2_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_2_step_4_title',
              descLangKey: 'spend_chapter_2_step_4_desc',
              ideaLangKey: 'spend_chapter_2_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'spend_chapter_3',
        icon: 'iconFlipFlops',
        chapterName: 'Shopping for shoes',
        titleLangKey: 'spend_chapter_3',
        content: {
          chapterIntroLangKey: 'spend_chapter_3_intro',
          chapterSessionDescLangKey: 'spend_chapter_3_desc',
          forAgesLangKey: 'spend_chapter_3_age',
          ageAdaptionLangKey: 'spend_chapter_3_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_3_learning_outcome',
          onCompletion: 'spend_chapter_3_on_completion',
          extras: 'spend_chapter_3_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_3_step_1_title',
              descLangKey: 'spend_chapter_3_step_1_desc',
              ideaLangKey: 'spend_chapter_3_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_3_step_2_title',
              descLangKey: 'spend_chapter_3_step_2_desc',
              ideaLangKey: 'spend_chapter_3_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_3_step_3_title',
              descLangKey: 'spend_chapter_3_step_3_desc',
              ideaLangKey: 'spend_chapter_3_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_3_step_4_title',
              descLangKey: 'spend_chapter_3_step_4_desc',
              ideaLangKey: 'spend_chapter_3_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        chapterID: 'spend_chapter_4',
        icon: 'iconEarth',
        chapterName: 'The climate deal',
        titleLangKey: 'spend_chapter_4',
        content: {
          chapterIntroLangKey: 'spend_chapter_4_intro',
          chapterSessionDescLangKey: 'spend_chapter_4_desc',
          forAgesLangKey: 'spend_chapter_4_age',
          ageAdaptionLangKey: 'spend_chapter_4_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_4_learning_outcome',
          onCompletion: 'spend_chapter_4_on_completion',
          extras: 'spend_chapter_4_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_4_step_1_title',
              descLangKey: 'spend_chapter_4_step_1_desc',
              ideaLangKey: 'spend_chapter_4_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_4_step_2_title',
              descLangKey: 'spend_chapter_4_step_2_desc',
              ideaLangKey: 'spend_chapter_4_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_4_step_3_title',
              descLangKey: 'spend_chapter_4_step_3_desc',
              ideaLangKey: 'spend_chapter_4_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_4_step_4_title',
              descLangKey: 'spend_chapter_4_step_4_desc',
              ideaLangKey: 'spend_chapter_4_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        isPremium: true,
        onlyAvailableInCountries: ['SE'],
        chapterID: 'spend_chapter_5',
        icon: 'iconCashier',
        chapterName: 'First purchase in a store',
        titleLangKey: 'spend_chapter_5',
        content: {
          chapterIntroLangKey: 'spend_chapter_5_intro',
          chapterSessionDescLangKey: 'spend_chapter_5_desc',
          forAgesLangKey: 'spend_chapter_5_age',
          ageAdaptionLangKey: 'spend_chapter_5_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_5_learning_outcome',
          onCompletion: 'spend_chapter_5_on_completion',
          extras: 'spend_chapter_5_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_5_step_1_title',
              descLangKey: 'spend_chapter_5_step_1_desc',
              ideaLangKey: 'spend_chapter_5_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_5_step_2_title',
              descLangKey: 'spend_chapter_5_step_2_desc',
              ideaLangKey: 'spend_chapter_5_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_5_step_3_title',
              descLangKey: 'spend_chapter_5_step_3_desc',
              ideaLangKey: 'spend_chapter_5_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_5_step_4_title',
              descLangKey: 'spend_chapter_5_step_4_desc',
              ideaLangKey: 'spend_chapter_5_step_4_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        isPremium: true,
        onlyAvailableInCountries: ['SE'],
        chapterID: 'spend_chapter_6',
        icon: 'iconDesktop',
        chapterName: 'First online purchase',
        titleLangKey: 'spend_chapter_6',
        content: {
          chapterIntroLangKey: 'spend_chapter_6_intro',
          chapterSessionDescLangKey: 'spend_chapter_6_desc',
          forAgesLangKey: 'spend_chapter_6_age',
          ageAdaptionLangKey: 'spend_chapter_6_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_6_learning_outcome',
          onCompletion: 'spend_chapter_6_on_completion',
          extras: 'spend_chapter_6_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_6_step_1_title',
              descLangKey: 'spend_chapter_6_step_1_desc',
              ideaLangKey: 'spend_chapter_6_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_6_step_2_title',
              descLangKey: 'spend_chapter_6_step_2_desc',
              ideaLangKey: 'spend_chapter_6_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_6_step_3_title',
              descLangKey: 'spend_chapter_6_step_3_desc',
              ideaLangKey: 'spend_chapter_6_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_6_step_4_title',
              descLangKey: 'spend_chapter_6_step_4_desc',
              ideaLangKey: 'spend_chapter_6_step_4_idea'
            },
            {
              titleLangKey: 'spend_chapter_6_step_5_title',
              descLangKey: 'spend_chapter_6_step_5_desc',
              ideaLangKey: 'spend_chapter_6_step_5_idea'
            }
          ]
        }
      },
      {
        ...defaultChapter,
        available: true,
        onlyAvailableInCountries: ['UK', 'GB'],
        chapterID: 'spend_chapter_7',
        icon: 'iconCashier',
        chapterName: 'Coin checker challenge',
        titleLangKey: 'spend_chapter_7',
        content: {
          chapterIntroLangKey: 'spend_chapter_7_intro',
          chapterSessionDescLangKey: 'spend_chapter_7_desc',
          forAgesLangKey: 'spend_chapter_7_age',
          ageAdaptionLangKey: 'spend_chapter_7_age_adaption',
          learningOutcomesLangKey: 'spend_chapter_7_learning_outcome',
          onCompletion: 'spend_chapter_7_on_completion',
          extras: 'spend_chapter_7_extra',
          relatedLinks: [
            // NEW
            // {
            //   displayLangKey: 'general_name',
            //   url: 'https://matzielab.com'
            // }
          ],
          slideContent: [
            {
              titleLangKey: 'spend_chapter_7_step_1_title',
              descLangKey: 'spend_chapter_7_step_1_desc',
              ideaLangKey: 'spend_chapter_7_step_1_idea'
            },
            {
              titleLangKey: 'spend_chapter_7_step_2_title',
              descLangKey: 'spend_chapter_7_step_2_desc',
              ideaLangKey: 'spend_chapter_7_step_2_idea'
            },
            {
              titleLangKey: 'spend_chapter_7_step_3_title',
              descLangKey: 'spend_chapter_7_step_3_desc',
              ideaLangKey: 'spend_chapter_7_step_3_idea'
            },
            {
              titleLangKey: 'spend_chapter_7_step_4_title',
              descLangKey: 'spend_chapter_7_step_4_desc',
              ideaLangKey: 'spend_chapter_7_step_4_idea'
            }
          ]
        }
      }
    ]
  }
]
