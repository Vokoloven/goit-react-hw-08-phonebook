import { Box } from 'Theme/Box';
import { StyledInput } from './StyledInput';
import { StyledButton } from './StyledButton';
import { useState } from 'react';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      as="form"
      display="flex"
      flexDirection="column"
      width="200 px"
      autoComplete="off"
      onSubmit={handleSubmit}
      ml={3}
      mt={3}
    >
      <label htmlFor="name">Name</label>
      <StyledInput
        type="text"
        value={name}
        name="name"
        id="name"
        onChange={handleChange}
        autoComplete="off"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
        ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters"
        required
      />

      <label htmlFor="email">Email</label>
      <StyledInput
        type="email"
        value={email}
        name="email"
        id="email"
        onChange={handleChange}
        autoComplete="off"
        pattern="[^@]+@[^@]+\.[a-zA-Z]{2,}"
        title="Invalid email address"
        required
      />

      <label htmlFor="password">Password</label>
      <StyledInput
        type="password"
        value={password}
        name="password"
        id="password"
        onChange={handleChange}
        autoComplete="off"
        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        title="Password must contain: Minimum 8 characters atleast 1 Alphabet and 1 Number"
        required
      />
      <StyledButton type="submit">Register</StyledButton>
    </Box>
  );
};
