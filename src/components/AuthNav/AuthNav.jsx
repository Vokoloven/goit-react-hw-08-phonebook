import { Box } from 'Theme/Box';
// import { StyledLink } from './StyledLink';
// import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { ColorButton } from './ColorButton';
// import { backgroundColor } from 'styled-system';

export const AuthNav = () => {
  return (
    <Box ml="auto" mr={3} display="flex">
      <Box mr={3}>
        <ColorButton>
          <NavLink to="registration">Registration</NavLink>
        </ColorButton>
      </Box>
      <Box>
        <ColorButton>
          <NavLink to="login">Log In</NavLink>
        </ColorButton>
      </Box>
    </Box>
  );
};
