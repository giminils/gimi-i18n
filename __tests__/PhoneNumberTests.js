import {formatPhoneNo} from '../../libs/I18n'
jest.disableAutomock()

let testableNumberOfBeers = [
  {number: '+359877696925', result: '+359877696925'},
  {number: '+46793342058', result: '+46793342058'},
  {number: '+46768402500', result: '+46768402500'},
  {number: '+46701758055', result: '+46701758055'},
  {number: '+46723131674', result: '+46723131674'},
  {number: '+46709682772', result: '+46709682772'},
  {number: '+46768716777', result: '+46768716777'},
  {number: '+46760190699', result: '+46760190699'},
  {number: '+46733544939', result: '+46733544939'},
  {number: '+46721611083', result: '+46721611083'},
  {number: '+46721611083', result: '+46721611083'},

  {number: '+447984718330', result: '+447984718330'},
  {number: '+447455290835', result: '+447455290835'},
  {number: '+447398998250', result: '+447398998250'},
  {number: '+447834257233', result: '+447834257233'},
  {number: '+447833947198', result: '+447833947198'},
  {number: '+447777628868', result: '+447777628868'},
  {number: '+31620118488', result: '+31620118488'},
  {number: '+447525860824', result: '+447525860824'},
  {number: '+447964052743', result: '+447964052743'},
  {number: '07948234689', result: '07948234689'}
]

describe('TestPhoneNumber Validation', () => {
  xit('it should get correct number', () => {
    testableNumberOfBeers.forEach((item) => {
      expect(formatPhoneNo(item.number)).toEqual(item.result)
    })
  })
})
