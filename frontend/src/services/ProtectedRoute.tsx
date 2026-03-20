import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';
export default function ProtectedRoute({ redirectPath = '/login' }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};