import { Box } from 'Theme/Box';
import { StyledLink } from './StyledLink';

export const AuthNav = () => {
  return (
    <Box ml="auto" mr={3}>
      <StyledLink to="registration">Registration</StyledLink>
      <StyledLink to="login">Log In</StyledLink>
    </Box>
  );
};
