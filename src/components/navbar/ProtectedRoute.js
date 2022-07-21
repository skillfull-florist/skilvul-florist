import { useContext } from 'react';
import { AuthContext } from './../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const { auth } = useContext(AuthContext);

  if (!auth.isAuthenticated && loginOnly) {
    return <Navigate to='/login' />;
  }

  if (auth.isAuthenticated && !loginOnly) {
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedRoute;
