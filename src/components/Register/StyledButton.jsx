import styled from 'styled-components';

export const StyledButton = styled('button')`
  width: ${p => p.theme.sizes[7]}px;
  height: ${p => p.theme.sizes[4]}px;
  color: ${p => p.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.active};
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
