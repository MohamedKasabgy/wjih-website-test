import { useTranslation } from 'react-i18next'

export function LanguageToggle() {
  const { i18n, t } = useTranslation()
  const nextLanguage = i18n.resolvedLanguage === 'ar' ? 'en' : 'ar'

  return (
    <button
      aria-label={t('common.language')}
      className="min-h-11 rounded-md border border-[var(--color-border)] bg-white px-3 py-2 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--page-color)] hover:text-[var(--page-color)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--page-color)]"
      type="button"
      onClick={() => {
        void i18n.changeLanguage(nextLanguage)
      }}
    >
      {nextLanguage === 'ar' ? 'العربية' : 'English'}
    </button>
  )
}
