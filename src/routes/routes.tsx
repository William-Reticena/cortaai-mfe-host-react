import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import ReactMicroFrontend from '@/MFEs/ReactMicroFrontend';
import VueMicroFrontend from '@/MFEs/VueMicroFrontend';

import { Login } from '@/views/Login';
import { MainLayout } from '@/views/MainLayout';

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/b/*',
    element: (
      <ProtectedRoute>
        <VueMicroFrontend />
      </ProtectedRoute>
    ),
  },
  {
    path: '/c/*',
    element: (
      <ProtectedRoute>
        <ReactMicroFrontend />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
];
