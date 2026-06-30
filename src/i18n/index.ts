import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import arCommon from '../locales/ar/common.json'
import enCommon from '../locales/en/common.json'

i18n.use(initReactI18next).init({
  resources: {
    ar: {
      common: arCommon,
    },
    en: {
      common: enCommon,
    },
  },
  lng: 'ar',
  fallbackLng: 'ar',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
