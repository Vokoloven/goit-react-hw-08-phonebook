import { Box } from 'Theme/Box';
import { StyledLink } from './StyledLink';

export const Navigation = () => {
  return (
    <Box as="nav">
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="phonebook">Phonebook</StyledLink>
    </Box>
  );
};
