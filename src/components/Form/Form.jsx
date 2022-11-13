import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Inputik } from 'components/Input/Input';

import { AddContactButton } from 'components/Button/Button';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactForm = ({ onSubmit }) => {
  return (
    <FormStyle id="formUser" onSubmit={onSubmit}>
      <Inputik />
      <AddContactButton />
    </FormStyle>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
