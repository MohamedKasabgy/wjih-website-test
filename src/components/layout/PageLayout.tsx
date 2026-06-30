import type { CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router'

import { getRouteByPath } from '../../config/routes'
import { pageThemes } from '../../config/pageThemes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

type ThemeStyle = CSSProperties & {
  '--page-color': string
  '--page-color-soft': string
}

export function PageLayout() {
  const location = useLocation()
  const route = getRouteByPath(location.pathname)
  const theme = pageThemes[route.key]

  const themeStyle: ThemeStyle = {
    '--page-color': theme.color,
    '--page-color-soft': `${theme.color}1A`,
  }

  return (
    <div className="min-h-svh bg-[var(--color-bg)] text-[var(--color-text)]" style={themeStyle}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
