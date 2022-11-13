import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from 'redux/selectors';

export const PublicRoute = () => {
  const { isLoggedIn } = useSelector(userData);

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
};
