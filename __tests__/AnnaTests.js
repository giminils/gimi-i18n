import {translationHelpTemplate, translateFrom} from '../utils/src/AnnaHelper'

jest.unmock('../utils/src/AnnaHelper') // we need thos in order to run "jest" from gimi project

describe('AnnaHelper', () => {
  it('it should not have chaned translation helper template ', () => {
    expect(translationHelpTemplate).toEqual('PLZ_TRANSLATE')
  })

  it('it should translate from en instead of sv', () => {
    expect(translateFrom).toEqual('en.json')
  })
})
