import { Routes, Route } from 'react-router-dom';
import { ButtonAppBar } from './AppBar/AppBar';
import { GlobalStyle } from 'Theme/globalStyle';
import operations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { PrivateRouter } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';

const patternLazy = path => lazy(() => import(`${path}`));

const Home = patternLazy('./Home/Home');
const Phonebook = patternLazy('./Phonebook/Phonebook');
const Register = patternLazy('./Register/Register');
const LogIn = patternLazy('./LogIn/LogIn');

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <ButtonAppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="registration" element={<Register />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<LogIn />} />
          </Route>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="phonebook" element={<Phonebook />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
