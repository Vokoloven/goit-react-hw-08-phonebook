import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Box } from 'Theme/Box';
import { ColorButton } from 'components/AuthNav/ColorButton';

// import styled from 'styled-components';

// const ButtonStyle = styled.button`
//   margin-top: ${p => p.theme.space[3]}px;
//   margin-left: ${p => p.theme.space[3]}px;

//   width: ${p => p.theme.space[6]}px;
//   height: ${p => p.theme.space[4]}px;
// `;

export const AddContactButton = () => {
  return (
    <Box>
      <ColorButton variant="contained" color="success" type="submit">
        Add Contact
      </ColorButton>
    </Box>
  );
};

export const DeleteContactButton = ({ onClick }) => {
  return (
    <Button color="error" variant="outlined" onClick={onClick} type="button">
      Delete
    </Button>
  );
};

DeleteContactButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
