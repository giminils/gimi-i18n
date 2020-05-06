import ConfigNOK from '../config/config_NOK.json'
import ConfigDKK from '../config/config_DKK.json'
import ConfigAUD from '../config/config_AUD.json'
import ConfigCAD from '../config/config_CAD.json'
import ConfigEUR from '../config/config_EUR.json'
import ConfigGBP from '../config/config_GBP.json'
import ConfigINR from '../config/config_INR.json'
import ConfigNZD from '../config/config_NZD.json'
import ConfigSEK from '../config/config_SEK.json'
import ConfigUSD from '../config/config_USD.json'
import ConfigISK from '../config/config_ISK.json'
import ConfigDEF from '../config/config_DEF.json'
import ConfigTHB from '../config/config_THB.json'
import ConfigIDR from '../config/config_IDR.json'
import ConfigCHF from '../config/config_CHF.json'
import ConfigCOP from '../config/config_COP.json'

export const getCurrencyConfig = (currencyCode: string | undefined) => {
  switch (currencyCode) {
    case 'COP': return {...ConfigCOP, currencyCode}
    case 'CHF': return {...ConfigCHF, currencyCode}
    case 'IDR': return {...ConfigIDR, currencyCode}
    case 'DEF': return {...ConfigDEF, currencyCode}
    case 'NOK': return {...ConfigNOK, currencyCode}
    case 'DKK': return {...ConfigDKK, currencyCode}
    case 'SEK': return {...ConfigSEK, currencyCode}
    case 'GBP': return {...ConfigGBP, currencyCode}
    case 'USD': return {...ConfigUSD, currencyCode}
    case 'AUD': return {...ConfigAUD, currencyCode}
    case 'CAD': return {...ConfigCAD, currencyCode}
    case 'NZD': return {...ConfigNZD, currencyCode}
    case 'INR': return {...ConfigINR, currencyCode}
    case 'ISK': return {...ConfigISK, currencyCode}
    case 'THB': return {...ConfigTHB, currencyCode}
    default : return {...ConfigEUR, currencyCode: 'EUR'}
  }
}
