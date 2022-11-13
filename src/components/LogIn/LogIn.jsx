import { Box } from 'Theme/Box';
// import { StyledInput } from './StyledInput';
// import { StyledButton } from './StyledButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(operations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      mt={3}
    >
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit}
      >
        <Box mb={3}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            value={email}
            type="text"
            autoComplete="off"
            onChange={handleChange}
          />
        </Box>

        <Box mb={3}>
          <TextField
            id="password"
            name="password"
            label="Password"
            value={password}
            type="password"
            autoComplete="off"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;

// <Box
//   as="form"
//   display="flex"
//   flexDirection="column"
//   width="200 px"
//   autoComplete="off"
//   onSubmit={handleSubmit}
//   ml={3}
//   mt={3}
// >
//   <label htmlFor="email">Email</label>
//   <StyledInput
//     type="email"
//     value={email}
//     name="email"
//     id="email"
//     onChange={handleChange}
//     autoComplete="off"
//     pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
//     title="Invalid email address"
//     required
//   />

//   <label htmlFor="password">Password</label>
//   <StyledInput
//     type="password"
//     value={password}
//     name="password"
//     id="password"
//     onChange={handleChange}
//     autoComplete="off"
//     pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
//     title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number"
//     required
//   />
//   <StyledButton type="submit">Register</StyledButton>
// </Box>
