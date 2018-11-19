
import fs from 'fs'
import jsonValidator from 'json-dup-key-validator'
jest.disableAutomock()

describe('JSON files', () => {
  it('LOL', () => {})
  var dirs = fs.readdirSync('./text_strings/')
  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) return
    fs.readdirSync(dir).forEach((file) => {
      if (file === '.DS_Store') return
      let path = `${dir}/${file}`
      it(`it should have valid JSON for ${path}`, () => {
        let json = fs.readFileSync(path, {encoding: 'utf8'})
        jsonValidator.parse(json, false)
      })
    })
  })
})
