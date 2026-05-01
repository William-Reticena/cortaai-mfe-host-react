import type { RouteObject } from 'react-router';

import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import ReactMicroFrontend from '@/MFEs/ReactMicroFrontend';
import VueMicroFrontend from '@/MFEs/VueMicroFrontend';

import { Login } from '@/views/Login';
import { Registration } from '@/views/Registration';
import { MainLayout } from '@/views/MainLayout';

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Registration />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'b/*',
        element: (
          <ProtectedRoute>
            <VueMicroFrontend />
          </ProtectedRoute>
        ),
      },
      {
        path: 'c/*',
        element: (
          <ProtectedRoute>
            <ReactMicroFrontend />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
];
