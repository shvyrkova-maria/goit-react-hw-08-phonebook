import styled from '@emotion/styled/macro';

export const Ul = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  background-color: var(--bg-color);
  border: 1px solid var(--bg-color);
  border-radius: 5px;
  animation: scaleIn 1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @keyframes scaleIn {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const Div = styled.div`
  color: var(--base-color);
  & > svg {
    color: var(--accent-color);
    width: 35px;
  }

  &:not(:last-child) {
    color: var(--text-color);
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 150px;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  background-color: var(--accent-color);
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: var(--base-shadow);
  }
`;
