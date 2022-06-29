import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import localesResource from '@/Assets/Locales'

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: (locale: string) => void) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
}

i18next.use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: localesResource
})

export function translate(path: any) {
  return i18next.t(path)
}
export function changeLanguage(alias: any) {
  i18next.changeLanguage(alias)
}
export default i18next
