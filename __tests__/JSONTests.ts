
/* eslint jest/expect-expect:  0 */
const fs = require('fs')
import jsonValidator from 'json-dup-key-validator'
jest.disableAutomock()

describe('JSON files', () => {
  it('NEED THIS TO PASS', () => { })
  let dirs
  try {
    dirs = fs.readdirSync('./text_strings/')
  }
  catch (e) {
    dirs = fs.readdirSync('./i18n/text_strings/')
  }
  dirs.forEach((dir: string) => {
    if (!fs.existsSync(dir)) return
    try {
      if (dir === '.DS_Store' || dir === 'ios' || dir === 'school') return
      fs.readdirSync(dir).forEach((file: string) => {
        if (file === '.DS_Store') return
        const path = `${dir}/${file}`
        console.warn(path)
        it(`it should have valid JSON for ${path}`, () => {
          const json = fs.readFileSync(path, {
            encoding: 'utf8'
          })
          jsonValidator.parse(json, false)
        })
      })
    } catch (error) {
      throw new Error(`Cant parse: ${error}`)
    }
  })
})
