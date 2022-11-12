import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Register } from './Register/Register';
import { Phonebook } from './Phonebook/Phonebook';
import { Home } from './Home/Home';
import { GlobalStyle } from 'Theme/globalStyle';
import { LogIn } from './LogIn/LogIn';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="phonebook" element={<Phonebook />} />
        <Route path="registration" element={<Register />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </>
  );
};
