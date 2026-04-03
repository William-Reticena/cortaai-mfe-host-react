import { Navigate } from 'react-router';

import { ProtectedRoute } from '@/shared/components/ProtectedRoute';
import ReactMicroFrontend from '@/MFEs/ReactMicroFrontend';
import VueMicroFrontend from '@/MFEs/VueMicroFrontend';
import { Login } from '@/views/Login';

export const routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to='/login' replace />,
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
