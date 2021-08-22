import styled from '@emotion/styled/macro';
import { DebounceInput } from 'react-debounce-input';

export const SearchWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 20px;
  background-color: white;
  color: black;
  border: 1px solid transparent;
  border-radius: 50%;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: white;
    box-shadow: var(--base-shadow);
  }
`;

export const DebounceInputStyled = styled(DebounceInput)`
  width: 100%;
  border: 2px solid var(--accent-color);
  border-radius: var(--border-radius);
  padding-left: 10px;
`;
