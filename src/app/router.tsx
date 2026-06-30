import { createBrowserRouter } from 'react-router'

import { PageLayout } from '../components/layout/PageLayout'
import { HomePage } from '../pages/HomePage'
import { IncubatorPage } from '../pages/IncubatorPage'
import { SoftLandingPage } from '../pages/SoftLandingPage'
import { WorkspacesPage } from '../pages/WorkspacesPage'
import { EventsPage } from '../pages/EventsPage'

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/workspaces',
        element: <WorkspacesPage />,
      },
      {
        path: '/incubator',
        element: <IncubatorPage />,
      },
      {
        path: '/soft-landing',
        element: <SoftLandingPage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
    ],
  },
])
