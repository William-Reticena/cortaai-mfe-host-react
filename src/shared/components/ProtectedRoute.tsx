import { Navigate, useLocation } from 'react-router';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem('accessToken');
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};
