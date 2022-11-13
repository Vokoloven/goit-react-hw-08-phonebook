import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Box as Boxik } from 'Theme/Box';
import { userData } from 'redux/selectors';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { NavLink } from 'react-router-dom';

export const ButtonAppBar = () => {
  const { isLoggedIn } = useSelector(userData);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            display="flex"
            alignItems="center"
          >
            <Navigation />
            {!isLoggedIn ? (
              <Boxik display="flex" ml="auto">
                <AuthNav />
              </Boxik>
            ) : (
              <UserMenu />
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    // <Box as="header" display="flex" mt={3}>
    //   <Navigation />
    //   {!isLoggedIn ? (
    //     <>
    //       <AuthNav />
    //     </>
    //   ) : (
    //     <UserMenu />
    //   )}
    // </Box>
  );
};
