import styled from 'styled-components';
import { DeleteContactButton } from 'components/Button/Button';
import PropTypes from 'prop-types';

const UlStyled = styled.ul`
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.text};
`;

export const Contacts = ({ filter, onClick, contacts }) => {
  if (filter === '') {
    return (
      <>
        <UlStyled>
          {contacts &&
            contacts.map(f => {
              return (
                <li key={f.id} id={f.id}>
                  {f.name}: {f.number}
                  <DeleteContactButton onClick={onClick} />
                </li>
              );
            })}
        </UlStyled>
      </>
    );
  }

  return (
    <>
      <UlStyled>
        {filter &&
          filter.map(f => {
            return (
              <li key={f.id} id={f.id}>
                {f.name}: {f.number}
                <DeleteContactButton onClick={onClick} />
              </li>
            );
          })}
      </UlStyled>
    </>
  );
};

// Contacts.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   filter: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
