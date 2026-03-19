import { createBrowserRouter } from 'react-router';
import ReactMicroFrontend from '../MFEs/ReactMicroFrontend';
import VueMicroFrontend from '../MFEs/VueMicroFrontend';

import { Login } from '../views/Login';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/b',
    element: <VueMicroFrontend />,
  },
  {
    path: '/c',
    element: <ReactMicroFrontend />,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
]);
