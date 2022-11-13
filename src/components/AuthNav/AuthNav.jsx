import { Box } from 'Theme/Box';
// import { StyledLink } from './StyledLink';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box ml="auto" mr={3}>
      <Button color="inherit">
        <NavLink to="registration">Registration</NavLink>
      </Button>
      <Button color="inherit">
        <NavLink to="login">Log In</NavLink>
      </Button>
    </Box>
  );
};
