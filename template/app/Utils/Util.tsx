import {Linking, Platform} from 'react-native'
import * as R from 'ramda'

export default class Utilities {
  static safeReturn(object: any, path = [], fallback = null) {
    const result = R.path(path, object)
    return R.ifElse(R.isNil, R.always(fallback), R.identity)(result)
  }

  static isPlatform(platform: string) {
    return Platform.OS === platform
  }

  static isObjEmpty(obj: any) {
    if (typeof obj === 'undefined' || !obj || Object.keys(obj).length === 0) {
      return true
    }
    return false
  }

  static delay(time = 500) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  static dialCall = (phone: any) => {
    let link = Platform.OS === 'android' ? `tel:${phone}` : `telprompt:${phone}`

    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
          Linking.openURL(link)
        }
      })
      .catch(err => console.error('An error occurred', err))
  }

  static sendEmailViaEmailApp = (toMailId: any, subject: any, body: any) => {
    if (toMailId) {
      let link = `mailto:${toMailId}`
      if (subject) {
        link = `${link}?subject=${subject || ''}`
      }
      if (body) {
        link = `${link}?body=${body || ''}`
      }

      Linking.canOpenURL(link)
        .then(supported => {
          if (supported) {
            Linking.openURL(link)
          }
        })
        .catch(err => console.error('An error occurred', err))
    }
  }

  static openSmsUrl = (phone: any, body: any) => {
    const smsDiVIDER = Platform.OS === 'ios' ? '&' : '?'
    let link = `sms:${phone}${smsDiVIDER}body=${body || ''}`
    Linking.canOpenURL(link)
      .then(supported => {
        if (supported) {
          Linking.openURL(link)
        }
      })
      .catch(err => console.error('An error occurred', err))
  }

  static isEmpty(value: string | any[]) {
    if (!value || value.length === 0) {
      return true
    }
    return false
  }

  static replaceVietnamese(str: string) {
    if (this.isEmpty(str)) {
      return ''
    }
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a')
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e')
    str = str.replace(/??|??|???|???|??/g, 'i')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u')
    str = str.replace(/???|??|???|???|???/g, 'y')
    str = str.replace(/??/g, 'd')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A')
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E')
    str = str.replace(/??|??|???|???|??/g, 'I')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O')
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U')
    str = str.replace(/???|??|???|???|???/g, 'Y')
    str = str.replace(/??/g, 'D')
    return str
  }

  static sortAlphabet = (a: { DisplayName: any }, b: { DisplayName: any }) => {
    if (
      this.replaceVietnamese(a.DisplayName) >
      this.replaceVietnamese(b.DisplayName)
    ) {
      return 1
    }
    if (
      this.replaceVietnamese(a.DisplayName) <
      this.replaceVietnamese(b.DisplayName)
    ) {
      return -1
    }
    return 0
  }

  static existsKey(object: { hasOwnProperty: (arg0: any) => any }, key: any) {
    return object.hasOwnProperty(key)
  }

  static objectMap(object: { [x: string]: any }, mapFn: (arg0: string, arg1: any) => any) {
    return Object.keys(object).reduce((result: any, key) => {
      result[key] = mapFn(key, object[key])
      return result
    }, {})
  }

  static isArrayEmpty(array: string | any[] | null) {
    if (
      typeof array !== 'undefined' &&
      array != null &&
      array.length != null &&
      array.length > 0
    ) {
      return false
    }
    return true
  }

  static isURL = (s: string) => {
    if (typeof s !== 'string') {
      return false
    }
    return s.startsWith('https') || s.startsWith('http')
  }
}
