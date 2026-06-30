export const pageThemes = {
  home: {
    label: 'Home',
    color: '#7A1219',
  },
  workspaces: {
    label: 'Workspaces',
    color: '#1E2650',
  },
  incubator: {
    label: 'Wadi Jeddah Incubator',
    color: '#EE7203',
  },
  softLanding: {
    label: 'Soft Landing Program',
    color: '#3B0000',
  },
} as const

export type PageThemeKey = keyof typeof pageThemes
