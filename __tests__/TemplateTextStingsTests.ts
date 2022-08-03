import svLang from '../text_strings/templates/sv.json'
jest.disableAutomock()

let name1 = '_name'
let name2 = '_name_'
let title1 = '_title'
let title2 = '_title_'
let desc1 = '_description'
let desc2 = '_description_'

let checkForPattern = (patternString: string): boolean => {
  let descKeys = Object.keys(svLang)
  descKeys = descKeys.filter((deskKey) => deskKey.includes(patternString) && deskKey.length === patternString.length)
  return descKeys.length === 1
}

describe('default', () => {
  it('Should have _description for _name or _title', () => {
    let errors: Array<object> = []

    let langKeys = Object.keys(svLang)

    langKeys.forEach((titleTemplate) => {
      let descString

      switch (true) {
        case titleTemplate.includes(name1) && !titleTemplate.includes(name2):
          descString = titleTemplate.split(name1)[0] + desc1

          if (!checkForPattern(descString)) errors.push({desk: `Missing Description for ${titleTemplate}`})
          break
        case titleTemplate.includes(title1) && !titleTemplate.includes(title2):
          descString = titleTemplate.split(title1)[0] + desc1

          if (!checkForPattern(descString)) errors.push({desk: `Missing Description for ${titleTemplate}`})
          break
        case titleTemplate.includes(name2):
          descString = titleTemplate.split(name2)[0] + desc2 + titleTemplate.split(name2)[1]
          if (!checkForPattern(descString)) errors.push({desk: `Missing Description for ${titleTemplate}`})
          break
        case titleTemplate.includes(title2):
          descString = titleTemplate.split(title2)[0] + desc2 + titleTemplate.split(title2)[1]
          if (!checkForPattern(descString)) errors.push({desk: `Missing Description for ${titleTemplate}`})
          break
      }
    })

    expect(errors).toEqual([])
  })

  it('Each description should have name or title', () => {
    let errors: Array<{desk: string}> = []
    let langKeys = Object.keys(svLang)

    langKeys.forEach((titleTemplate) => {
      let descString1
      let descString2

      switch (true) {
        case titleTemplate.includes(desc1) && !titleTemplate.includes(desc2):
          descString1 = titleTemplate.split(desc1)[0] + title1 + titleTemplate.split(desc1)[1]
          descString2 = titleTemplate.split(desc1)[0] + title1 + titleTemplate.split(desc1)[1]
          if (!checkForPattern(descString1) && !checkForPattern(descString2))
            errors.push({desk: `Missing name1/title1 for ${titleTemplate}`})

          break
        case titleTemplate.includes(desc2):
          descString1 = titleTemplate.split(desc2)[0] + title2 + titleTemplate.split(desc2)[1]
          descString2 = titleTemplate.split(desc2)[0] + name2 + titleTemplate.split(desc2)[1]

          if (!checkForPattern(descString1) && !checkForPattern(descString2))
            errors.push({desk: `Missing name2/title2 for ${titleTemplate}`})

          break
      }
    })

    expect(errors).toEqual([])
  })
})
