import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RouterProvider } from 'react-router'

import { router } from './router'

export default function App() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return <RouterProvider router={router} />
}
