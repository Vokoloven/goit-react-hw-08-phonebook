import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { Box } from 'Theme/Box';

export const Filter = ({ onChange }) => {
  return (
    <>
      <Box fontSize={3}>Find contacts by name</Box>

      <TextField
        required
        id="outlined-required"
        type="text"
        autoComplete="off"
        onChange={onChange}
      />

      {/* <input
        type="text"
        ng-model="search"
        id="search"
        onChange={onChange}
      ></input> */}
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
