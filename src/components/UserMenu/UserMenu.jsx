import { Box } from 'Theme/Box';
import { useSelector, useDispatch } from 'react-redux';
import { userData } from 'redux/selectors';
import operations from 'redux/auth/auth-operations';
// import Button from '@mui/material/Button';
import { ColorButton } from 'components/AuthNav/ColorButton';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(operations.logOut());
  };

  const {
    user: { name },
  } = useSelector(userData);

  return (
    <Box display="flex" ml="auto">
      <Box
        display="flex"
        as="p"
        fontSize={3}
        mr={3}
        justifyContent="center"
        alignItems="center"
        p={0}
      >
        Добро пожаловать {name}
      </Box>
      <ColorButton type="button" onClick={logOutUser}>
        Log Out
      </ColorButton>
      {/* <StyledButton type="button" onClick={logOutUser}>
        Log Out
      </StyledButton> */}
    </Box>
  );
};
