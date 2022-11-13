import { Box } from 'Theme/Box';
import { StyledLink } from './StyledLink';
import { useSelector } from 'react-redux';
import { userData } from 'redux/selectors';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(userData);

  return (
    <Box as="nav" display="flex">
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="phonebook">Phonebook</StyledLink>}
    </Box>
  );
};
