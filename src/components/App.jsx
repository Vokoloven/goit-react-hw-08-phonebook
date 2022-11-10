import { Routes, Route } from 'react-router-dom';
import { Phonebook } from './Phonebook/Phonebook';
import { Register } from './Register/Register';
import { GlobalStyle } from 'Theme/globalStyle';
import { Box } from 'Theme/Box';
import { StyledLink } from './Home/StyledLink';

export const App = () => {
  return (
    <>
      <Box as="nav" mt={3}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="registration">Registration</StyledLink>
      </Box>

      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Phonebook />} />
        <Route path="registration" element={<Register />} />
      </Routes>
    </>
  );
};
