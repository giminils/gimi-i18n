
/* eslint jest/expect-expect:  0 */
import fs from 'fs'
import jsonValidator from 'json-dup-key-validator'
jest.disableAutomock()

describe('JSON files', () => {
  it('LOL', () => {})
  let dirs = fs.readdirSync('./text_strings/')
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) return
    try {
      if (dir === '.DS_Store') return
      fs.readdirSync(dir).forEach((file) => {
        if (file === '.DS_Store') return
        const path = `${dir}/${file}`
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
