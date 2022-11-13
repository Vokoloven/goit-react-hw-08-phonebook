// import styled from 'styled-components';
import { Box } from 'Theme/Box';
import TextField from '@mui/material/TextField';

// const InputStyle = styled.input`
//   width: ${p => p.theme.space[7]}px;
//   height: ${p => p.theme.space[4]}px;
// `;

export const Inputik = () => {
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
      <Box display="flex" flexDirection="column">
        <Box mb={3}>
          <TextField
            inputProps={{
              pattern: '[a-zA-Zа-яА-Я]*',
            }}
            required
            id="outlined-required"
            name="name"
            label="Name"
            type="text"
            autoComplete="off"
          />
        </Box>
        <Box mb={3}>
          <TextField
            inputProps={{
              pattern: '[0-9]*',
            }}
            required
            id="outlined-required"
            name="number"
            label="Number"
            type="tel"
            autoComplete="off"
          />
        </Box>
      </Box>
    </Box>
  );
};

//   return (
//     <>
//       <InputStyle
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
// ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters,
// apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles
// de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <Box as="h2" mt={3} mb={3}>
//         Number
//       </Box>
//       <InputStyle
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone
//         number must be digits and can contain spaces, dashes, parentheses and
//         can start with +"
//         required
//       />
//     </>
//   );
