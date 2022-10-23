import styled from 'styled-components';
import { Input } from 'components/Input/Input';

import { AddContactButton } from 'components/Button/Button';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ContactForm = ({ onSubmit }) => {
  return (
    <FormStyle id="formUser" onSubmit={onSubmit}>
      <Input />
      <AddContactButton />
    </FormStyle>
  );
};
