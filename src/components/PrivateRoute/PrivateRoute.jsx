import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userData } from 'redux/selectors';

export const PrivateRouter = () => {
  const { isLoggedIn } = useSelector(userData);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
