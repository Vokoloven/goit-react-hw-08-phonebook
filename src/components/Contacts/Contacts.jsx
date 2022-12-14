import styled from 'styled-components';
import { DeleteContactButton } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { Box } from 'Theme/Box';

const UlStyled = styled.ul`
  font-size: ${p => p.theme.fontSizes[2]}px;
  color: ${p => p.theme.colors.text};
`;

export const Contacts = ({ filter, onClick, contacts, inputRef }) => {
  if (contacts.length === 0) {
    return (
      <Box as="h2" mt={3}>
        No any contacts in phonebook
      </Box>
    );
  }
  if (inputRef === '') {
    return (
      <>
        <UlStyled>
          {contacts &&
            contacts.map(f => {
              return (
                <Box
                  key={f.id}
                  id={f.id}
                  display="flex"
                  alignItems="center"
                  mb={3}
                >
                  <Box as="li" mr={3}>
                    {f.name}: {f.number}
                  </Box>
                  <DeleteContactButton onClick={onClick} />
                </Box>
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
              <Box
                key={f.id}
                id={f.id}
                display="flex"
                alignItems="center"
                mb={3}
              >
                <Box as="li" mr={3}>
                  {f.name}: {f.number}
                </Box>
                <DeleteContactButton onClick={onClick} />
              </Box>
            );
          })}
      </UlStyled>
    </>
  );
};

Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  ]).isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
