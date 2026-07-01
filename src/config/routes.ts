import type { PageThemeKey } from './pageThemes'

export type AppRoute = {
  key: PageThemeKey
  path: string
  labelKey: string
}

export const appRoutes = [
  {
    key: 'home',
    path: '/',
    labelKey: 'nav.home',
  },
  {
    key: 'workspaces',
    path: '/workspaces',
    labelKey: 'nav.workspaces',
  },
  {
    key: 'events',
    path: '/events',
    labelKey: 'nav.events',
  },
  {
    key: 'softLanding',
    path: '/soft-landing',
    labelKey: 'nav.softLanding',
  },
  {
    key: 'incubator',
    path: '/incubator',
    labelKey: 'nav.incubator',
  },
] as const satisfies readonly AppRoute[]

export const getRouteByPath = (pathname: string) =>
  appRoutes.find((route) => route.path === pathname) ?? appRoutes[0]
