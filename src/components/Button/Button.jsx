import styled from 'styled-components';

const ButtonStyle = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[3]}px;

  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[4]}px;
`;

export const AddContactButton = () => {
  return <ButtonStyle type="submit">Add Contact</ButtonStyle>;
};

export const DeleteContactButton = ({ onClick }) => {
  return (
    <ButtonStyle onClick={onClick} type="button">
      Delete
    </ButtonStyle>
  );
};
