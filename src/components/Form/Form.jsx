import styled from 'styled-components';

import { AddContactButton } from 'components/Button/Button';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled.input`
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[4]}px;
`;

export const Input = () => {
  return (
    <>
      <InputStyle
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters,
apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles
de Batz de Castelmore d'Artagnan"
        required
      ></InputStyle>
      <h2>Number</h2>
      <InputStyle
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone
        number must be digits and can contain spaces, dashes, parentheses and
        can start with +"
        required
      ></InputStyle>
    </>
  );
};

export const ContactForm = ({ onSubmit }) => {
  return (
    <FormStyle id="formUser" onSubmit={onSubmit}>
      <Input></Input>
      <AddContactButton></AddContactButton>
    </FormStyle>
  );
};
