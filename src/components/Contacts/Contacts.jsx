import styled from 'styled-components';
import { DeleteContactButton } from 'components/Button/Button';

const UlStyled = styled.ul`
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.text};
`;

export const Contacts = ({ filter, onClick, contacts }) => {
  return (
    <>
      <UlStyled>
        {filter &&
          filter.map(f => {
            return (
              <li key={f.id} id={f.id}>
                {f.name}: {f.number}
                <DeleteContactButton onClick={onClick}></DeleteContactButton>
              </li>
            );
          })}
      </UlStyled>
    </>
  );
};
