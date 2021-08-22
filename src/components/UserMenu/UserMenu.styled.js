import styled from '@emotion/styled/macro';

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
  background-color: var(--text-color);
  color: var(--base-color);
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: white;
    box-shadow: var(--base-shadow);
  }
`;
