import styled from 'styled-components';

export const StyledButton = styled('button')`
  width: ${p => p.theme.sizes[6]}px;
  height: ${p => p.theme.sizes[4]}px;
  color: ${p => p.theme.colors.background};
  margin-right: ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.active};
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;
