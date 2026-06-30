export const pageThemes = {
  home: {
    label: 'Home',
    color: '#D6BAAE',
    bg: '#4A2C2C', // Desaturated Burgundy
    text: '#FFFFFF',
    heading: '#FFFFFF',
    muted: '#E6DAD5',
    surface: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.2)',
  },
  workspaces: {
    label: 'Workspaces',
    color: '#D6BAAE',
    bg: '#761020', // Workspaces background
    text: '#F8F5F3',
    heading: '#FFFFFF',
    muted: '#E6DAD5',
    surface: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.2)',
  },
  incubator: {
    label: 'Wadi Jeddah Incubator',
    color: '#D6BAAE',
    bg: '#390100', // Wadi Jeddah Incubator background
    text: '#F8F5F3',
    heading: '#FFFFFF',
    muted: '#E6DAD5',
    surface: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.2)',
  },
  softLanding: {
    label: 'Soft Landing Program',
    color: '#1E2650',
    bg: '#AAB8C4', // Desaturated Light Blue
    text: '#1E2650',
    heading: '#1E2650',
    muted: '#3A4D6B',
    surface: 'rgba(255,255,255,0.3)',
    border: 'rgba(30,38,80,0.2)',
  },
  events: {
    label: 'Events & Meetings',
    color: '#7A1219',
    bg: '#E6D9D3', // Desaturated Beige
    text: '#1E2650',
    heading: '#3B0000',
    muted: '#5F647A',
    surface: 'rgba(255,255,255,0.4)',
    border: 'rgba(122,18,25,0.2)',
  },
} as const

export type PageThemeKey = keyof typeof pageThemes
