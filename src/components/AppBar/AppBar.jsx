import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Box } from 'Theme/Box';
import { userData } from 'redux/selectors';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(userData);
  return (
    <Box as="header" display="flex" mt={3}>
      <Navigation />
      {!isLoggedIn ? (
        <>
          <AuthNav />
        </>
      ) : (
        <UserMenu />
      )}
    </Box>
  );
};
