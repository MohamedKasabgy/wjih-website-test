export const pageThemes = {
  home: {
    label: 'Home',
    color: '#7A1219',          // crimson accent
    bg: '#FFFFFF',
    text: '#1E2650',
    heading: '#1E2650',
    muted: '#5A6480',
    surface: '#FAFAF9',
    border: '#EAE4E0',
  },
  workspaces: {
    label: 'Workspaces',
    color: '#7A1219',          // crimson
    bg: '#FFFFFF',
    text: '#1E2650',
    heading: '#1E2650',
    muted: '#5A6480',
    surface: '#FAFAF9',
    border: '#EAE4E0',
  },
  incubator: {
    label: 'Wadi Jeddah Incubator',
    color: '#3B0000',          // deep burgundy
    bg: '#FFFFFF',
    text: '#1E2650',
    heading: '#1E2650',
    muted: '#5A6480',
    surface: '#FAFAF9',
    border: '#EAE4E0',
  },
  softLanding: {
    label: 'Soft Landing Program',
    color: '#1E2650',          // navy
    bg: '#FFFFFF',
    text: '#1E2650',
    heading: '#1E2650',
    muted: '#5A6480',
    surface: '#FAFAF9',
    border: '#EAE4E0',
  },
  events: {
    label: 'Events & Meetings',
    color: '#EE7203',          // orange
    bg: '#FFFFFF',
    text: '#1E2650',
    heading: '#1E2650',
    muted: '#5A6480',
    surface: '#FAFAF9',
    border: '#EAE4E0',
  },
} as const


export type PageThemeKey = keyof typeof pageThemes
