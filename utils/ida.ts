/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import fs2 from 'fs'
import sekConfig from '../config/config_SEK.json'

let RunIda = (): any => {
  let files = [
    'config_AUD.json',
    'config_CAD.json',
    'config_DEF.json',
    'config_DKK.json',
    'config_EUR.json',
    'config_GBP.json',
    'config_INR.json',
    'config_ISK.json',
    'config_NOK.json',
    'config_NZD.json',
    'config_SEK.json',
    'config_THB.json',
    'config_USD.json',
    'config_IDR.json',
    'config_CHF.json'
  ]
  files.forEach((file) => {
    syncConfigKeys(file)
  })
}

let syncConfigKeys = (file: string) => {
  let config = JSON.parse(fs2.readFileSync('../config/' + file).toString())

  const sekConfigRecord = sekConfig as Record<string, any>

  // Delete Support
  Object.keys(config)
    .filter((key) => sekConfigRecord[key] === undefined)
    .forEach((key) => {
      delete config[key]
      console.log(`Deleting key: '${key}' from ${file}`)
    })

  // Create
  Object.keys(sekConfig)
    .filter((key) => config[key] === undefined)
    .forEach((key) => {
      config[key] = sekConfigRecord[key]
      console.log(`Creating key: '${key}' in ${file}`)
    })

  // Save changes
  let newConf = JSON.stringify(config, undefined, 2)
  fs2.unlinkSync('./config/' + file)
  fs2.writeFileSync('./config/' + file, newConf, {encoding: 'utf8'})
}

RunIda()
