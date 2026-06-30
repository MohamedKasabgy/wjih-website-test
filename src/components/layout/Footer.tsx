import { useTranslation } from 'react-i18next'

import { Container } from '../ui/Container'

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-6">
      <Container className="flex flex-col gap-2 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Wadi Jeddah Innovation Hub</p>
        <p>{t('common.contactWhatsapp')}</p>
      </Container>
    </footer>
  )
}
