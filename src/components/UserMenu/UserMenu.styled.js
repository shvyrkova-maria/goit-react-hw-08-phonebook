import styled from '@emotion/styled/macro';

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  & > p {
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  font-size: 10px;
  font-weight: 500;
  background-color: var(--base-color);
  color: white;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--accent-color);
    color: black;
    box-shadow: var(--main-shadow);
  }
`;
